# Hacker News - UI & UX Revamp

## Abstract

During the third quarter of our time at Turing School of Software & Design, we were given a very loosely-structured project called "Stretch", where we needed to implement our recently-learned skills in React and the React Testing Library, but also teach ourselves and implement a new technology that has not yet been taught to us. We were given the "Miscellaneous" category, where we were given the opportunity to delve into styled components and more advanced accessibility tools. We were also told to find an API and create a project around it, so we chose the Hacker News API. Hacker News is a widely used news outlet for stories related to technology. It is used by developers, project managers, hackers, and anyone who may be interested in brushing up on current events in the world of tech. The desktop application, however, seems to create conflict between developers, with many claiming its simplistic UI makes it easy to navigate with minimal distractions, while others claim it's a UI eyesore, with little organization and no visually-pleasing elements. For our stretch project, we decided to revamp the UI and UX of Hacker News using React, with a strong focus on styled components and refined accessibility.

## Specific Objectives

1. The application cannot simply be a display of data - there needs to be some way for the user to work with or manipulate the data.
2. The application should be a multi-page application using React Router.
3. The use of at least one external API.
4. Use of Styled Components.
5. 100% passing accessibility testing using an accessibility analyzer like A11y or Axe.
6. Keep state based components to a minimum and leverage more functional components.
7. Use a modular architecture for your application file structure.
8. Write tests for React components and some asynchronous functionality.

## Installation

> Clone down this repo into an empty directory on your local machine
>
> Run `npm install` in your teminal to install the project's dependencies
>
> Run `npm start` to run the application in development mode
>
> Visit [http://localhost:3000](http://localhost:3000) to view it in the browser
>
> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Challenges

We all believe that we may have bitten off a bit more than we could chew when we decided to re-create the Hacker News website in just under a week. We decided to reduce our MVP down quite a bit to just displaying top, new, and best stories with a maximum of ten stories per category. One of the most difficult aspects to the project was using the openGraphAPI to fetch images from each article URL to display it as a preview on our HN website. We used this API to give it the URL of the article, and reach out to that URL to locate an image, and bring it back as an object that we could work with. Getting used to this API was difficult, but eventually proved to be very beneficial. Also, the nested asynchronous fetching was very difficult - we didn't want to fetch everything on page-load, so we had to figure out when exactly to fetch a given group of articles. This presented a lot of problems, because when we would save an article, it was saving twice if it was clicked again, because our logic was checking to see if they were the same article, which because they were from separate fetches, they would always be different objects. 

## Looking Ahead

Looking ahead, I know we'd like to have a more robust testing suite with more integration coverage - we ran into some major issues while integration testing on our final day and decided to leave it where it stood. Also, we were on the brink of implementing a light/dark mode toggler to our project, which we'd like to spend some time to finish up. Lastly, we would have loved to have had comments and jobs available on our website as well, but given the fact that we only had a week, we didn't have time to implement this. 

## The NEW Hacker News In Action
