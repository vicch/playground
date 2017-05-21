OBJS = main.o interface.o database.o composer.o utility.o
CC = g++
CFLAGS = -ansi -pedantic-errors -Wall

exe: $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o exe

main.o: main.cpp interface.h
	$(CC) $(CFLAGS) main.cpp -c

interface.o: interface.h interface.cpp database.h utility.h
	$(CC) $(CFLAGS) interface.cpp -c

database.o: database.h database.cpp composer.h
	$(CC) $(CFLAGS) database.cpp -c

composer.o: composer.h composer.cpp
	$(CC) $(CFLAGS) composer.cpp -c

utility.o: utility.h utility.cpp
	$(CC) $(CFLAGS) utility.cpp -c

clean:
	rm -f *.o *~ exe