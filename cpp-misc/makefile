OBJS = main.o utility.o sort.o
CC = g++
CFLAGS = -ansi -pedantic-errors -Wall -c
LFLAGS = -ansi -pedantic-errors -Wall

exe: $(OBJS)
	$(CC) $(LFLAGS) $(OBJS) -o exe

main.o: main.cpp
	$(CC) $(CFLAGS) main.cpp

utility.o: utility.h utility.cpp
	$(CC) $(CFLAGS) utility.cpp

sort.o: sort.h sort.cpp
	$(CC) $(CFLAGS) sort.cpp

clean:
	rm -f *.o exe