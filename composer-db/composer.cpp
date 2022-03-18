// composer.cpp
// Description: The class for a Composer record
#include "composer.h"

Composer::Composer() {
  rank_ = kDefaultRank;
}

Composer::~Composer() {}

string Composer::first_name() {
  return first_name_;
}

string Composer::last_name() {
  return last_name_;
}

int Composer::yob() {
  return yob_;
}

string Composer::genre() {
  return genre_;
}

int Composer::rank() {
  return rank_;
}

string Composer::fact() {
  return fact_;
}

void Composer::set_first_name(string in_first_name) {
  first_name_ = in_first_name;
}

void Composer::set_last_name(string in_last_name) {
  last_name_ = in_last_name;
}

void Composer::set_yob(int in_yob) {
  yob_ = in_yob;
}

void Composer::set_genre(string in_genre) {
  genre_ = in_genre;
}

void Composer::set_rank(int in_rank) {
  rank_ = in_rank;
}

void Composer::set_fact(string in_fact) {
  fact_ = in_fact;
}

void Composer::Promote(int increment) {
  int new_rank = (rank_ - increment < 1) ? 1 : rank_ - increment;
  rank_ = new_rank;
  cout << "New rank: " << rank_ << endl;
}

void Composer::Demote(int decrement) {
  int new_rank = (rank_ + decrement > 10) ? 10 : rank_ + decrement;
  rank_ = new_rank;
  cout << "New rank: " << rank_ << endl;
}

void Composer::Display() {
  cout << "Name:  " << first_name_ << " " << last_name_ << endl;
  cout << "YoB:   " << yob_ << endl;
  cout << "Genre: " << genre_ << endl;
  cout << "Rank:  " << rank_ << endl;
  cout << "Fact:  " << fact_ << endl;
}