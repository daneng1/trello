# Dan's Trello Clone

## Description

- this is a project task app that can help users manage their tasks in a way that is simple and easy to use.
- utilizes Material UI for component UI and styling.
- uses Redux for simple state management across all components.

### Challenges and Future Features

1. Getting the cards to conditionally render left and right arrows based on the number of columns and which column the card was current in.
    1. I solved this by first looping through the column store and gathering all of the column ids into an array.
    1. Next I had to identify the index of the current column in the new array.
    1. Then I added a few conditional statements that look for:
        - if the new array length is 1, then don't render any arrows
        - if the column position is 0 and the new array length is greater than 1, then render just a right arrow
        - if the column position is the same as the length of the array minus 1 and the length of the array is greater than 1, then render just a left arrow
        - otherwise, render both right and left arrows

1. Future features
    1. Add signin and signup so that data can persist for a user.
    1. Connect to a server and DB to store data.
    1. Add drag and drop functionality of cards between columns.
    1. Add the ability to create multiple boards and invite other users to use the same board.
    1. Add documents to boards, columns or cards.
    1. Add scope, time estimates and assign cards.

### Versions and Release Notes

- v1.0 - Initial build released on 10.09.21
  - allow users to add columns and add cards to each column.
  - Once cards are created they can easily be moved across the board using arrow buttons at the bottom of each card.
  - Cards and columns can also be deleted by clicking on the X button in the top right corner of the column.
  - Currently the app is not attached to a database, so on refresh all cards are reset to the initial state.
  - Currently there is no login so cards can not be saved to a users board.

### Links

[Deployed Site](https://main.d2uifutv0igqjs.amplifyapp.com)

[GitHub Repo](https://github.com/daneng1/trello)

### Starting App Locally

1. Download the package from GitHub to your local machine.
    1. If you have SSH enabled, use `git clone git@github.com:daneng1/trello.git`
    1. If you don't have SSH enabled, use `git clone https://github.com/daneng1/trello.git`
1. In terminal, navigate to the project folder.
1. Type `npm install` to install all dependencies.
1. Type `npm run start` to run it on your browser.
