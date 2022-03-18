// main.cpp
#include "utility.h"
#include "sort.h"

void RunQuickSort() {
  int before[10];
  for (int i = 0; i < 10; i++) {
    cout << before[i] << endl;
  }
  cout << "---" << endl;
  FillRandomInt(&before[0], 10, 0, 100);
  for (int i = 0; i < 10; i++) {
    cout << before[i] << endl;
  }
  // QuickSort();
}

int main() {
  RunQuickSort();
  return 0;
}