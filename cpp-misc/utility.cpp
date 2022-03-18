// utility.cpp
// Description: Common functions
#include <cstdlib>
#include <ctime>
using namespace std;

void FillRandomInt(int* input, int count, int min, int max) {
  for (int i = 0; i < count; i++) {
    srand(time(NULL));
    input[i] = rand() % max + min;
  }
  return;
}