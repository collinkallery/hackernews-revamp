# Hacker News - UI & UX Revamp

## Abstract

We were assigned a choose-you-own-adventure group project called "Stretch" during the third of four modules at Turing School of Software & Design. The goal was to stretch our recently-learned skills using React and React Testing Library while teaching ourselves to implement new technologies that had not been taught. We had the opportunity to delve into styled-components, advanced accessibility tools and Hooks. We chose the Hacker News API to build our project around. Hacker News is a widely used website to find "deeply interesting" stories. It is used by developers, project managers, hackers, and anyone who may be interested in brushing up on current events. However, the desktop application creates conflict between developers. Some argue the simplistic UI makes it easy to navigate with minimal distractions, while others claim it's a UI eyesore, with little organization and no visually-pleasing elements. For our stretch project, we did a mobile-first revamp of the UI and UX of Hacker News using React, with a focus on styled-components and accessibility.

## Specific Objectives

1. The user needs to be able to work with or manipulate the data - Our user can browse, filter and save articles.
2. The application should be a multi-page application using React Router.
3. The use of at least one external API - We used the Hacker News API and openGraphAPI.
4. Use of new technologies - We learned styled-components, advanced accessibility and Hooks.
5. 100% passing accessibility testing on Lighthouse audit with use of a totA11y and Axe accessibility tools.
6. Keep state based components to a minimum and leverage more functional components.
7. Use a modular architecture for application file structure.
8. Write tests for React components and some asynchronous functionality.

## Installation

> Clone down this repo into an empty directory on your local machine
> Run `npm install` in your teminal to install the project's dependencies
> Run `npm start` to run the application in development mode
> Visit [http://localhost:3000](http://localhost:3000) to view it in the browser
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenges

We decided to re-create the Hacker News website in just under a week. Our MVP displays the ten top, newest, and all-time best stories. One of the most challenging aspects to the project was using the openGraphAPI to fetch images from each article URL to display as a preview on our HN mobile site. We gave this API the URL of the article to locate an image from the URL and return an object that we could work with. Understanding this API was difficult but greatly improved our UX and UI. The nested asynchronous fetching was also a learning experience. We didn't want to fetch all of the data available on the Hacker News API on page-load so we had to figure out when exactly to fetch a given group of articles. This presented problems such as saving an article twice if it was clicked again because our logic was checking to see if they were the same article but because they were from separate fetches, different objects were returned. 

## Looking Ahead

Looking ahead, we'd like to have a more robust testing suite with more integration coverage - we ran into some roadblocks with asychronous testing. We would like to implement a light/dark mode toggle feature to our project. Lastly, we like to have comments and jobs available on our website but given time constraints did not implement this. 

## The NEW Hacker News In Action
![gif1](https://media.giphy.com/media/VgwHBwIPGW34lF2wcX/giphy.gif)
![gif2](https://media.giphy.com/media/KbwIN6CeQvsTU0Mdhi/giphy.gif)
