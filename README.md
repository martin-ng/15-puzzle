# Hopscotch Code Test

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

## Technologies

1. HTML/CSS/JS: Vanilla JS was utilized as utilizing frontend frameworks was unnecessary. I also made the assumption that the extra performance from a library such as React was not necessary for this project.

## Extras

Modularity and extensibility was an importance, hence a lot of the UI is rendered through JavaScript. The game's board is created by using a 2D array allowing for a dynamically sized grid. Event delegation was also implemented to avoid iterating through the grid and adding an event handler to each element. 

A shuffling element was added to the app. There were two approaches in mind to create this feature. The first approach involves randomizing the entire board and utilizing a solver function to determine the board's solvability. The second approach involves randomizing the board by moving adjacent tiles starting from the empty space. This ensures the board is solvable as the shuffling function is making valid moves every iteration. Ultimately, I made the decision to implement the second approach as edge cases were easily covered and required less time to implement.

## Additional Thoughts

# Modularity

If time was not a constraint, there are a few things I would have considered and implemented. To make the code-base more concise and structured, I would refactor the game's logic to utilize JavaScript's prototypal paradigm via ES6+ class syntax. Currently, this app does have a few global variables which could potentially conflict with other variables if this project was extended. By utilizing class-syntax, those variables would be encapsulated and restricted to that class. In addition, the grid make up arrays of tile objects containing information necessary to render the board's UI. This tile object would also be created through a tile class allowing for further modularity.

# CSS

There are a few approaches I would consider in making the puzzle more immersive to the user. Currently, this app features all the basic requirements with simple animations to improve the experience. Another approach to this was utilizing CSS to allowing for sliding animations to display the user's ability to move an entire row/column. The tile components could render itself through pixel translations.

As I put a lot of focus on the game's logic, there are a few CSS components that do not completely respond to the user's device. For instance, the tile's numbers does not shift as intended if the app is displayed on a much smaller resolution. If given more time, I would tweak the CSS so that it responds as intended to a dynamically changing resolution.

# Solver

Although it is not a requirement, I attempted to write an algorithm that would solve the puzzle from its current state and return the number of additional moves required to solve. The approch I considered was a memoized BFS approach as the puzzle it is dependent on moving tiles adjacent to empty spaces. Although there are solutions to implementing this solver on the internet, this was purely done for my own enjoyment and practice.

# Tests

I would write unit tests to test the game's function. Writing tests would facilitate with certain features such as the randomizing feature and the shifting rows/columns function.

# TypeScript

Although TypeScript requires more time to write, I believe TypeScript's type definition is extremely valuable especially in a team setting. I have caught bugs and errors using TypeScript from my personal projects that otherwise would have taken hours to search.# 15-puzzle
