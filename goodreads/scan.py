# This script scans and exports book data on Goodreads by book IDs range.

import sys
import time
import csv
import traceback
import requests
from bs4 import BeautifulSoup

BASE_URL = 'https://www.goodreads.com/book/show/'
HEADERS = ['id', 'series', 'title', 'author', 'genre1', 'genre2', 'genre3', 'rating', 'count', 'date']

def scan_range(from_id, to_id):
	file_name = '%s-%s.csv' % (from_id, to_id)
	with open(file_name, 'w', newline='') as file:
		writer = csv.DictWriter(file, fieldnames=HEADERS, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
		writer.writeheader()

		for book_id in range(from_id, to_id + 1):
			writer.writerow(scan_book(book_id))

def scan_book(book_id):
	book = None
	while (book is None):
		book = scan(book_id)
		time.sleep(5)
	return book

def scan(book_id):
	try:
		print('Scanning book %s' % book_id)

		book = {header: '' for header in HEADERS}
		book['id'] = book_id
		book['date'] = time.strftime('%Y/%m/%d')

		soup = get_soup(book_id)
		if is_404(soup):
			return book

		book['series'] = get_series(soup)
		book['title'] = soup.find(id='bookTitle').contents[0].strip()
		book['author'] = soup.find('a', class_='authorName').find('span').contents[0].strip().replace('  ', ' ')

		genres = soup.find_all('a', class_='bookPageGenreLink')
		book['genre1'] = genres[0].contents[0] if (len(genres) > 0) else ''
		book['genre2'] = genres[1].contents[0] if (len(genres) > 1) else ''
		book['genre3'] = genres[2].contents[0] if (len(genres) > 2) else ''

		book['rating'] = float(soup.find(attrs={'itemprop': 'ratingValue'}).contents[0])
		book['count'] = int(soup.find(attrs={'itemprop': 'ratingCount'})['content'])

		return book

	except Exception as e:
		# print(traceback.format_exc())
		print(e)
		return None

def get_soup(book_id):
	soup = None
	while (soup is None):
		url = '%s%s' % (BASE_URL, book_id)
		page = requests.get(url)
		soup = BeautifulSoup(page.content, 'html.parser')
	return soup

def is_404(soup):
	# If there is a button going back to homepage, it's a 404 page
	return soup.find(text='Back to the Goodreads homepage') is not None

def get_series(soup):
	elem = soup.find(id='bookSeries').find('a')
	if elem is None:
		return ''

	series = elem.contents[0]
	# Series name format: (<series> #<seq>), return only <series>
	return series.split('(')[1].split(')')[0].split('#')[0].strip()

if __name__ == '__main__':
	from_id = int(sys.argv[1])
	to_id = int(sys.argv[2])
	scan_range(from_id, to_id)
