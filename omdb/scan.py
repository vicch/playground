# This script reads movie data of given IMDB ID range from OMDB API and exports to CSV

import sys
import time
import csv
import requests

URL = 'https://www.omdbapi.com/?apiKey=%s&i=%s'
API_KEYS = ['e1ce9b62', '447083ab']

HEADERS = ['link', 'id', 'title', 'year', 'type', 'genre', 'country', 'director', 'rating', 'count', 'date']

def scan_range(from_id, to_id):
	file_name = 'omdb-%s-%s.csv' % (from_id, to_id)
	for movie_id in range(from_id, to_id + 1):
		with open(file_name, 'a', newline='') as file:
			writer = csv.DictWriter(file, fieldnames=HEADERS, delimiter=',', quotechar='"', quoting=csv.QUOTE_ALL)
			writer.writerow(scan_movie(movie_id))

def scan_movie(movie_id):
	movie = None
	while (movie is None):
		movie = scan(movie_id)
		time.sleep(5)
	return movie

def scan(movie_id):
	try:
		formatted_id = format_id(movie_id)
		print('Scanning movie %s' % formatted_id)

		movie = {header: '' for header in HEADERS}
		movie['id'] = formatted_id
		movie['date'] = time.strftime('%Y/%m/%d')

		data = get_data(movie_id, formatted_id)
		if data['Response'] == 'False':
			return movie

		movie['type'] = data['Type'].capitalize()
		movie['title'] = data['Title']
		movie['year'] = data['Year']
		movie['country'] = data['Country']
		movie['genre'] = data['Genre']
		movie['director'] = data['Director']
		movie['rating'] = data['imdbRating']
		movie['count'] = data['imdbVotes'].replace(',', '')

		return movie

	except Exception as e:
		print(e)
		return None

def get_data(movie_id, formatted_id):
	# Rotate the API keys per movie ID
	api_key = API_KEYS[movie_id % len(API_KEYS)]
	url = URL % (api_key, formatted_id)

	response = requests.get(url)
	return response.json()

def format_id(id):
	return 'tt%07d' % id

if __name__ == '__main__':
	from_id = int(sys.argv[1])
	to_id = int(sys.argv[2])
	scan_range(from_id, to_id)
