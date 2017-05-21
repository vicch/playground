// interface.cpp
// Description: The UI part
#include "interface.h"
#include "utility.h"

Interface::Interface() {}
Interface::~Interface() {}

void Interface::Delim() {
  cout << "---------------------------------------------" << endl;
  return;
}

void Interface::Welcome() {
  cout << endl << "Welcome to Composer Database!" << endl;
  return;
}

void Interface::Goodbye() {
  cout << endl << "Goodbye!" << endl;
  return;
}

void Interface::Prompt() {
  Delim();
  cout << "1) Add a new composer." << endl;
  cout << "2) Retrieve a composer's data." << endl;
  cout << "3) Promote/demote a composer's rank." << endl;
  cout << "4) List all composers." << endl;
  cout << "5) List all composers by rank." << endl;
  cout << "0) Quit." << endl;
  cout << endl;
}

// Return status code:
// 0 : quit
// >0: action success
// -1: action error
int Interface::Action() {
  action_ = GetInputInt("Your action: ");
  switch (action_) {
    case 0:
      break;
    case 1:
      AddComposer();
      break;
    case 2:
      FindComposer();
      break;
    case 3:
      UpdateRank();
      break;
    case 4:
      ListAll();
      break;
    case 5:
      cout << "Performin action " << action_ << endl;
      break;
    default:
      cout << "Invalid action, try again." << endl;
      Prompt();
  }
  return action_;
}

void Interface::AddComposer() {
  Delim();
  cout << "Add composer:" << endl << endl;

  string first_name = GetInputString("First name:    ");
  string last_name  = GetInputString("Last name:     ");
  int    yob        = GetInputInt(   "Year of birth: ");
  string genre      = GetInputString("Genre:         ");
  string fact       = GetInputString("Fact:          ");

  db_.AddComposer(first_name, last_name, yob, genre, fact);

  Delim();
  return;
}

void Interface::FindComposer() {
  Delim();
  cout << "Find composer:" << endl << endl;

  string last_name = GetInputString("Last name: ");
  Composer& composer = db_.FindComposer(last_name);

  if (composer.last_name() == "") {
    cout << "Composer not found." << endl;

  } else {
    cout << endl;
    composer.Display();
  }

  Delim();
  return;
}

void Interface::UpdateRank() {
  Delim();
  cout << "Update rank:" << endl << endl;

  string last_name = GetInputString("Last name: ");
  Composer& composer = db_.FindComposer(last_name);

  if (composer.last_name() == "") {
    cout << "Composer not found." << endl;

  } else {
    cout << "Updating rank for: " << composer.first_name() << " " << composer.last_name() << endl;

    string action = GetInputString("Promote(p) or Demote(d): ");
    int    change = GetInputInt("Rank change: ");

    if (action == "p") {
      composer.Promote(change);
      cout << endl << "Rank promoted." << endl;

    } else if (action == "d") {
      composer.Demote(change);
      cout << endl << "Rank demoted." << endl;

    } else {
      cout << "Invalid action, try again." << endl;
    }
  }

  Delim();
  return;
}

void Interface::ListAll() {
  Delim();
  cout << "List all composers:" << endl << endl;

  db_.DisplayAll();

  Delim();
  return;
}