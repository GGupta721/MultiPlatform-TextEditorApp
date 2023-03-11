# Cmpt383 Project-Polyglot

## What is the overall goal of the project (i.e. what does it do, or what problem is it solving)?
##### This project implements a simple text editor app that allows the user to customize the text with features such as underline, bold, italic, alignment etc. It also contains a feature Spell-Check that tells the user if there are any spelling mistakes made in the text.

## Which languages did you use, and what parts of the system are implemented in each?
##### The project uses Html, CSS and Javascript for the front-end which connencts to the Rest-api backend made via python Flask framework. The backend uses the SpellCheck feature made using C++ to parse through the dictionary of all the english words. 

## What methods did you use to communicate between languages?
##### To communicate between the js and python, I used theREST_API server with python flask and used fetch requests from JS to the server. To communicate between Python and C++ I used the XML-RPC for C++ which allows python to make procedural calls to the C++ program.

## Exactly what steps should be taken to get the project working, after getting your code? [This should start with vagrant up or docker-compose up and can include one or two commands to start components after that.]
##### Go into the sandbox directory and run commands :
`docker-compose build`
`docker-compose up`
##### After that load the html file into the browser from the frontend directory.

## What features should we be looking for when marking your project?
##### Js program that can custumize the text with features such as underline, bold, italic, align etc. Spellcheck feature implimented in C++. RESTAPI created via Flask framework that can communicate with the JS APP to get the input text, store it in session storage, and send it back to the app after clicking the spell-check button (console log). 

#### In future versions, the app can allow the user to store custom words and update the database dictionary with new words. Allow provide auto spell check suggestions mode.
