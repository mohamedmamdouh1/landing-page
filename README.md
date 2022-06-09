# Landing Page Project

## Table of Contents

* [Introduction](#introduction)
* [Architecture](#architecture)
* [Features](#features)
* [References](#references)


## Introduction
The Aim of this project is to provide more convenient way to navigate through webpage.
It's a common problem to get lost in the middle of long webpages containing a lot of sections.
This project addresses this issue by providing a dynamic navigation menu, easy to reach, and customizable on adding or removing sections.
Just by Clicking on the desired section, you'll be there in no time with smooth transition that you can map your location on the webpage and be aware of the active section without getting confused.
Also navigation on webpage will be responsive through other devices regardless the screensize thanks to media query.

## Architecture
- The project is composed of 3 distinct files. They are organized by Language and classified by functionality for each one: 
    - ***HTML file***: index.html : Containing the main elements and the document tree as a whole with organized nodes and elements, and linked with the stylesheet and the script used.  **It is the main file that should be opened in the browser to test and view the Landing Page project.**
    - ***CSS file***: style.css : This file is responsible for the style and design for the document page (including: font, background, colors, etc ... ). without it, it is just a plain white boring webpage.
    - ***JavaScript file***: app.js: Without Js file, the project will be static. All interactive actions and feedback responses is generated by the JavaScript file. and it interacts with the HTML through DOM. 

## Features
### Dynamic Navigation Menu
- Navigation Menu at the top of the page on the right side, sections are clickable and hovering make a different style than other ones with the black background.
-This menu is built dynamically using JavaScript.

### Section Active State Indication
- Adding to the dynamism of the page, user can differentiate between active section while being in the visual view port and other sections that are inactive, just by scrolling into that section

### Scroll to Selected Section
- User can navigate from the top menu through any section just with a click and will be transfered to the required link in a bit with dynamic and responsive scrolling animation feature. 

### Responsiveness on Smaller Screens
- User can navigate from different devices with different screen size. Webpage is responsive on smaller sceens and navigation menu is compacted to meet the required size for better display of the content. 

## References
The fourth section was done by adding addSection() function by querySelector(), createElement(), setAttribute(), innerHTML() Methods.

The CSS section done by modifying Navigation Styles in the starter code to create the media query [Source: Starter code in Udacity].

The JavaScript file done by: Initializing the Global variables using: JavaScript and the DOM section in Getting Started section of Udacity Project with the suggested methods: .querySelectorAll(), getElementById()
createDocumentFragment() method used as stated in Performance Lesson 5.

.getAttribute(), & .createElement() are from Creating Content with JavaScript Lesson 3.

.classList: .add & .remove adopted from 5.Style Page Content (Lesson 3)

.addEventListener() suggested on Working with Browser Events (Lesson 4).

other methods: .href() found in Further Research Section on: MDN to refer : https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement/href

.getBoundingClientRect() method and concept is found in the reference: w3schools. :https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp

 section.getBoundingClientRect().top = (300 ~ 360) was recommended by the Web tutor on student community webinar discussions as the average size of the section shown on the viewport.
