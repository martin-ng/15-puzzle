# 15 Puzzle

15 puzzle is a sliding puzzle with 16 squares in total, leaving one square unoccupied. 
The goal of this project is to build a UI where the user is allowed to move the squares.

## Instructions

As this project utilizes ES6 modules, it is subject to same-origin policy. For this reason, this project can not be accessed locally via file:// protocol and must utilize a local web server.
I personally use a VSC extension Live Server ( https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer ).

Some alternatives that I am aware are as follows:
Static Server - https://www.npmjs.com/package/static-server#getting-started
Live Server - https://www.npmjs.com/package/live-server/v/0.8.0

## Requirements

1. The user will see a UI with the ability to move squares to an empty space.

2. The app must have the capabilities to allow the user to move an entire row and/or column with a single event.


## Extras

Modularity and extensibility was an importance, hence a lot of the UI is rendered through JavaScript. The game's board is created by using a 2D array allowing for a dynamically sized grid. Event delegation was also implemented to avoid iterating through the grid and adding an event handler to each element. 

A shuffling element was added to the app. There were two approaches in mind to create this feature. The first approach involves randomizing the entire board and utilizing a solver function to determine the board's solvability. The second approach involves randomizing the board by moving adjacent tiles starting from the empty space. This ensures the board is solvable as the shuffling function is making valid moves every iteration. Ultimately, I made the decision to implement the second approach as edge cases were easily covered and required less time to implement.

