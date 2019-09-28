# electron_wrapper
For the people like me who just want to copy paste their built/static web page into a functioning app

Bare minimum to easily make an Electron app using your production code.

# How to

- create an app/ folder
- copy your project in app/ with index.html as entry point. 
(IF index.html isn't your entry point, either rename it or open index.js and change the value in "mainWindow.LoadUrl"

# Running
- npm install (just once to install). If this means nothing to you, look for a nodejs tutorial.

- npm electron:start for launching your app through electron
- npm electron:build to package your app based on the current OS.

# Why

It's mostly for personal use. It is heavily based on Capacitor electron template, 
but I've changed things here and there because I wanted a production build.

# To-Do
Package for all
Document the code
