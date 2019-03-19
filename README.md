# Vigin Pulse Frontend Project

## About
Welcome to the VP frontend project. The purpose of this project is to gauge your ability to work with angularJS.  
Upon completion, please either zip your solution and email it to James Downing, or create a private repo and invite Jay DeLuca as a collaborator.

There are screenshots of example solutions, but feel free to be as creative as you'd like with your solutions.


## Setup

First clone this repo and `cd` into the directory in your terminal.

Next install the dependencies with npm
```
npm install
```

Lastly, run the build and start the server
```
npm start
```

You can now access the project via [http://localhost:8080](http://localhost:8080) in your browser.

---

## Resources
- [AngularJS](https://angularjs.org/)
- [Chart.js](https://www.chartjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [Random User API](https://randomuser.me)


---

## Instructions

#### Task 1: Home Page
- Create a bar graph showing a users steps for a week using Chart.js
  - The dependencies have already been taken care of for you, so you only need to generate fake data and generate the chart itself.
  - The colors/styles don't matter
  - **Extra Credit:** Show two values per day - last weeks value and this weeks value
  - Hint: The home page uses the 'AppCtrl' controller

Example Solution:
![alt text](/docs/vp-frontend-example-bar-graph.png)


#### Task 2: Leaderboard
- Sort the leaderboard by steps in descending order
- Add rank number and profile image to each user in the leaderboard
- **Extra Credit:** add a search input field that filters the list of members on the leaderboards by the input string

Example Solution:
![alt text](/docs/vp-frontend-example-leaderboard.png)


#### Task 3: New Page
- Create a new 'Friends' page
  - Be sure to include it in the navigation
  - Generate 4 cards with random data (pull from an api or create your own data) to represent other members that the user can request to be friends
  - Include a profile image, name, and 'Send Friend Request' button
  - **Extra credit:** Add a separate row for some fake members that the user is already friends with
    - Style them differently
  - **Extra credit 2:** Dynamically change the style of the card and disable the button when 'Send Friend Request' is clicked

Example Solution:
![alt text](/docs/vp-frontend-example-friends.png)


#### Extra Credit Task
- Abstract all the api calls to a service module `UsersService`
- Abstract all controllers into their own modules in separate files