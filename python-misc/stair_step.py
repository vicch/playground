"""
A script to solve the cliche problem of 'how many ways to run up N 
steps of stairs when you can run x or y steps each time'
1. Define total steps
2. Define min and max steps each time
3. Wait for the magic
Output can be just the count of different solutions, or all soluti-
ons listed out in detail (memory usage could be high for a big N)
"""
# Get input (with validation)
def getInput(prompt):
    i = input(prompt)
    while not i.isdigit():
        i = input('Input a number\n')
    return int(i)

# Get solutions with details
def getSols(restSt, possSt):
    allSols = []
    for st in possSt:
        sols = []
        if restSt - st > 0:
            sols = getSols(restSt - st, possSt)
            sols = [sol + [st] for sol in sols]
        elif restSt - st == 0:
            sols = [[st]]
        allSols += sols
    return allSols

# Get solutions count only
def getSolsCount(restSt, possSt):
    allSolsCount = 0
    for st in possSt:
        solsCount = 0
        if restSt - st > 0:
            solsCount = getSolsCount(restSt - st, possSt)
        elif restSt - st == 0:
            solsCount = 1
        allSolsCount += solsCount
    return allSolsCount

totalSt = getInput('Total steps:\n')         # Total steps
minSt   = getInput('Min steps each time:\n') # Min steps each time
maxSt   = getInput('Max steps each time:\n') # Max steps each time
possSt  = list(range(minSt, maxSt + 1))      # All possible steps each time

# Get solutions count only
# solsCount = getSolsCount(totalSt, possSt)
# print('Solutions count:\n%d' % solsCount)

# Get all solutions with details
sols = getSols(totalSt, possSt)
print('Sols count:\n%d' % len(sols))
print('All solutions:')
for sol in sols:
    print(sol)