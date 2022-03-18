// utility.cpp
// Description: Common functions
#include "utility.h"

string GetInputString(string prompt) {
  string input;
  cout << prompt;
  while (!(cin >> input)) {
    cin.clear();
    cin.ignore(256, '\n');
    cout << "Invalid input" << endl << prompt;
  }
  return input;
}

int GetInputInt(string prompt) {
  int input;
  cout << prompt;
  while (!(cin >> input)) {
    cin.clear();
    cin.ignore(256, '\n');
    cout << "Invalid input, integars only" << endl << prompt;
  }
  return input;
}