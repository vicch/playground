// interface.h
// Description: The UI part
#include <iostream>
#include <string>
#include "database.h"
using namespace std;

class Interface {
  public:
    Interface();
    ~Interface();

    void Welcome(); // Display welcome message
    void Prompt();  // Display prompt message
    void Goodbye(); // Display goodbye message

    int Action(); // Perform an action, return status code

  private:
    int action_;   // User action
    Database db_;  // Database object

    void Delim(); // Display delimeter line
    
    void AddComposer();
    void FindComposer();
    void UpdateRank();
    void ListAll();
};