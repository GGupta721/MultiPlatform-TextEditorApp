# Simple text editor app

#### This project implements a simple text editor app that allows the user to customize the text with features such as underline, bold, italic, alignment etc. It also contains a feature Spell-Check that tells the user if there are any spelling mistakes made in the text.

#### The project uses Html, CSS and Javascript for the front-end which connencts to the Rest-api backend made via python Flask framework. The backend uses the SpellCheck feature made using C++ to parse through the dictionary of all the english words. 

#### To communicate between javascript and python scripts, the app uses REST_API server with python flask. To communicate between Python and C++ scripts, the app uses XML-RPC for C++ which allows python to make procedural calls to the C++ program.

#### To run the project
###### Go into the sandbox directory and run commands :
`docker-compose build`
`docker-compose up`
##### After that load the html file into the browser from the frontend directory.

#### In future versions, the app can allow the user to store custom words and update the database dictionary with new words. Allow provide auto spell check suggestions mode.
