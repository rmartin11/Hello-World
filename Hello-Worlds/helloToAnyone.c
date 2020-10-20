#include <stdio.h>

int main(void)
{
    char name[64];
    printf("Say hello to: \n");
    scanf("%s" , name);
    printf("Hello, %s, have a wonderful day!\n", name);
}
