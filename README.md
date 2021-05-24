# Frontend Mentor - GitHub Jobs API

![Design preview for the GitHub Jobs API coding challenge](./preview.jpg)

## What is Front End Mentor

To learn more about front end mentor, visit this link => https://www.frontendmentor.io/

## The challenge

The goal is to make responsive pixel perfect copy of an already established design. 
Built with React, the app will fetch and filter data from the Github Jobs API then share it accross multiple components with it's own reducer context. 
Each job card is clickable and will show it's detailed description. 
Dark and light theme is based on computer's preferences and is toggleable. 

This project is still under construction!

##  Stack used

Html & Sass

##  What did i learned

1. Due to various nested components (ex: filter & filter modal ) that had to share state accross the app, i had to make my own reducer and context.
2. In order to make async data fetching from my reducer i mimicked a redux thunk like function.
3. I used React Portal to pop the filter modal outside of the root div of React.
4. Fetching Data's from github jobs API is slow, so i used a skeleton.
5. In order to implement the Load More button from the design, i had to create an index of job to print them 12 by 12 or fetch the next page if out of bond.

##  Final result

See final result here => https://githubjobapi.netlify.app/
