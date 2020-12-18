# Frontend Developer Technical Test
The project is a simple landing page that contains a slideshow element and a form element.The code runs locally on ''http://localhost:3000' with [NodeJS](https://nodejs.org/en/docs/):
[ExpressJS](https://expressjs.com/)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#Features)
* [To DO](#To-Do)

## General info

### Structure

* server.js
* views
    * index.html
    * 404.html
* public
    * img
    * style
       * style.css
    * main.js

On the landing page will have a slideshow as its first element, and the page follows good practices.
Underneath the slideshow, is a simple HTML form that will serve as a fetch service to consult public repositories of Github users. 
	
## Technologies
Project is created with:

### Server
* node v12.14.1
* [nodemon](https://www.npmjs.com/package/nodemon)
* express v^4.17.1
 
	
## Setup
To run this project first install it locally.
Clone a repository using the command line
and instructions of [GitHub](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
$ cd ProjectFolder/
$ npm install
$ nodemon server.js
```
## Features
* The awesome pictures are royalty free from [Unsplash](https://unsplash.com/);
* Icons from [Fontawesome](https://fontawesome.com/)

## To DO
* Display the list better;
* Getting a better error handling;

