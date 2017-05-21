// composer.h
// Description: The class for a Composer record
#include <iostream>
using namespace std;

const int kDefaultRank = 10; // Lowest by default

class Composer {
  public:
    Composer();  // Constructor
    ~Composer(); // Destructor

    // Accessors
    string first_name();
    string last_name();
    int    yob();
    string genre();
    int    rank();
    string fact();

    // Mutators
    void set_first_name(string in_first_name);
    void set_last_name(string in_last_name);
    void set_yob(int in_yob);
    void set_genre(string in_genre);
    void set_rank(int in_rank);
    void set_fact(string in_fact);

    // Methods
    void Promote(int increment); // Increase composer's rank
    void Demote(int decrement);  // Decrease composer's rank
    void Display(); // Display all the attributes of a composer

  private:
    string first_name_;
    string last_name_;
    int    yob_;   // year of birth
    string genre_; // baroque, classical, romantic, etc.
    string fact_;
    int    rank_;
};