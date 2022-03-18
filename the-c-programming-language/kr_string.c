// Solving string related questions in K&R's The C Programming Language
#include <stdio.h>

#define MAXLEN 1000
#define INWORD  1
#define OUTWORD 0

struct line_meta {
    int c_cnt, w_cnt, s_cnt;
};

int read_line(char line[], struct line_meta *meta, int maxlen);

int main()
{
    char line[MAXLEN];
    struct line_meta meta;

    while (read_line(line, &meta, MAXLEN) > 0) {
        printf("%s\n", line);
        printf("Char count: %d\n", meta.c_cnt);
        printf("Word count: %d\n", meta.w_cnt);
        printf("Sentence count: %d\n", meta.s_cnt);
        printf("\n");
    }

    return 0;
}

int read_line(char line[], struct line_meta *meta, int maxlen)
{
    int c, w, c_cnt, w_cnt, s_cnt;

    c_cnt = w_cnt = s_cnt = 0;
    w = OUTWORD;

    while (c_cnt < maxlen && (c = getchar()) && c != EOF && c != '\n') {
        line[c_cnt] = c;
        c_cnt++;

        if (c == '.') {
            s_cnt++;
        }

        if (c == ' ') {
            w = OUTWORD;
        } else {
            // Word begins
            if (w == OUTWORD) {
                w = INWORD;
                w_cnt++;
            }
        }
    }
    line[c_cnt] = '\0';

    meta->c_cnt = c_cnt;
    meta->w_cnt = w_cnt;
    meta->s_cnt = s_cnt;
    
    return c_cnt;
}