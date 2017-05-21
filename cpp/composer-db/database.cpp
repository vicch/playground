// database.cpp
// Decription: Class for a database of Composer records
#include "database.h"

Database::Database() {
  next_slot_ = 0;
}
Database::~Database() {}

Composer& Database::AddComposer(
  string in_first_name,
  string in_last_name,
  int in_yob,
  string in_genre,
  string in_fact) {

  Composer composer;
  composer.set_first_name(in_first_name);
  composer.set_last_name(in_last_name);
  composer.set_yob(in_yob);
  composer.set_genre(in_genre);
  composer.set_fact(in_fact);

  composers_[next_slot_++] = composer;
  next_slot_ %= kMaxComposers; // Start from 0 when reached max capacity

  cout << endl << "Composer added." << endl;

  return composer;
}

Composer& Database::FindComposer(string in_last_name) {
  int count = sizeof(composers_) / sizeof(composers_[0]);
  for (int i = 0; i < count; i++) {
    if (composers_[i].last_name() == in_last_name) {
      return composers_[i];
    }
  }
  Composer empty;
  return empty;
}

void Database::DisplayAll() {
  int count = sizeof(composers_) / sizeof(composers_[0]);
  for (int i = 0; i < count; i++) {
    if (composers_[i].last_name() != "") {
      composers_[i].Display();
      cout << endl;
    }
  }
  return;
}

void Database::DisplayByRank() {

}