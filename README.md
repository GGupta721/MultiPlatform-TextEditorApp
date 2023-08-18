# Polygot Text Editor Application

This project is an implementation of a simple text editor application that provides users with various customization features such as underline, bold, italic, alignment, and more. Additionally, it includes a spell-check feature to identify spelling mistakes in the text. 

The front-end of the application is developed using HTML, CSS, and JavaScript, which connects to the REST API backend built with the Python Flask framework. 

The backend utilizes a SpellCheck feature implemented in C++ to parse through an English word dictionary. To facilitate communication between JavaScript and Python scripts, the application employs a REST API server with Python Flask. 

Furthermore, communication between Python and C++ scripts is achieved using XML-RPC for C++, enabling procedural calls from Python to the C++ program.



## Features

The MultiPlatform Text Editor Application offers the following features:
* Text Formatting: Users can apply formatting options such as underline, bold, and italic to customize the appearance of their text.
* Alignment: The application allows users to align their text to the left, right, center, or justify it.
* Spell-check: The integrated spell-check feature detects and highlights spelling mistakes in the text, providing users with valuable feedback.
  
## Technical Details

The application's architecture involves multiple components working together to deliver a seamless user experience:

1. Front-end:
  * HTML: The user interface is built using HTML, providing the structure and layout for the text editor.
  * CSS: Cascading Style Sheets (CSS) are used to define the visual presentation and styling of the text editor.
  * JavaScript: The application utilizes JavaScript to handle user interactions and perform dynamic updates on the text editor.

2. Back-end:
  * Flask: The Python web framework Flask is employed to handle the server-side logic and serve the HTML templates.
  * Flask: This Flask extension is used for rendering polyglot HTML output, allowing the application to support multiple languages and character sets.

3. Spell-check:
  * The spell-check functionality is implemented using a combination of Python and C++.
  * Python: The Flask back-end communicates with a Python script responsible for processing the user's text and invoking the C++ spell-checker.
  * C++: The C++ spell-checker parses through a dictionary of English words to identify and highlight any spelling mistakes.
    
## Usage

To utilize the MultiPlatform Text Editor Application, follow these steps:

* Clone the repository by executing the following command in your terminal:
  * git clone `https://github.com/GGupta721/MultiPlatform-TextEditorApp.git`
* Set up the necessary dependencies and environment as specified in the repository's documentation or README file.
* To run the project go into the sandbox directory and run commands :
`docker-compose build`
`docker-compose up`

