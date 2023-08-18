#include <iostream>
#include <string>
#include <fstream>
#include <algorithm>
#include <ctype.h>
#include <conio.h>
#include <vector>
#define WIN32_LEAN_AND_MEAN /* required by xmlrpc-c/server_abyss.hpp */

#include <cassert>
#include <stdexcept>
#ifdef _WIN32
#include <windows.h>
#else
#include <unistd.h>
#endif

#include <chrono>
#include <thread>
// #include "SpellCheck.h"
using namespace std;

#include <xmlrpc-c/base.hpp>
#include <xmlrpc-c/registry.hpp>
#include <xmlrpc-c/server_abyss.hpp>

#ifdef _WIN32
#define SLEEP(seconds) SleepEx(seconds * 1000);
#else
#define SLEEP(seconds) sleep(seconds);
#endif

char lower_alpha[] = {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};


int main(int const, const char **const)
{

    try
    {
        xmlrpc_c::registry myRegistry;

        xmlrpc_c::methodPtr const sampleAddMethodP(new sampleAddMethod);

        myRegistry.addMethod("sample.add", sampleAddMethodP);

        xmlrpc_c::serverAbyss myAbyssServer(
            xmlrpc_c::serverAbyss::constrOpt()
                .registryP(&myRegistry)
                .portNumber(8080));

        myAbyssServer.run();
        // xmlrpc_c::serverAbyss.run() never returns
        assert(false);
        while (true)
    {
        string input, line;
        int len, flen, correct = 0;
        cout << "Enter the word: ";
        getline(cin, input);
        len = input.length();
        for (int i = 0; i < len; i++)
            input[i] = tolower(input[i]);
        ifstream words("wordlist.txt");
        if (words)
        {
            while (getline(words, line))
            {
                flen = line.length();
                if (len == flen)
                {
                    if (line == input)
                    {
                        correct = 1;
                    }
                    else
                        continue;
                }
                else
                    continue;
            }
            words.close();
            if (correct == 1)
            {
                cout << endl
                     << "Spelling is correct" << endl;
            }
            else
            {
                cout << endl
                     << "Spelling is wrong" << endl;
            }
        }

        _getch();
    }
    catch (exception const &e)
    {
        cerr << "Something failed.  " << e.what() << endl;
    }
    return 0;
}
