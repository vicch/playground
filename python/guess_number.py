"""
A game of number-guessing (or human-binary-search)
1. Define the upper limit of the game (lowe limit is always 0)
2. Guess the number from hints
"""
import random

# Get input (with validation)
def getInput(prompt):
    i = input(prompt)
    while not i.isdigit():
        i = input('Input a number:\n')
    return int(i)

max = getInput('Define the upper limit of the game:\n')
goal = int(random.random() * max)
times = 1

# First guess
guess = getInput('Guess a number between 0 and %d:\n' % max)

while guess != goal:
    times += 1
    if guess > goal:
        guess = getInput('Too big.\n')
    else:
        guess = getInput('Too small.\n')

print('Correct in %d guesses.' % times)