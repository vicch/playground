// main.cpp
// Description: Composer Database entry
#include <iostream>
#include "interface.h"
using namespace std;

int main() {
  Interface interface;
  interface.Welcome();
  interface.Prompt();
  while (interface.Action() != 0) {}
  interface.Goodbye();
  return 0;
}