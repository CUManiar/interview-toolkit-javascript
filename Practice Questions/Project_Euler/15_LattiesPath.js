/*
 * @author Chiragkumar Maniyar
 * @2019 all rights are reserved
 */

/**
 * Problem Statement: Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * 
 * How many such routes are there through a 20×20 grid?
 * 
 */

const getRoutes = gridSize => {
    let paths = 1;
    for (let i = 0; i < gridSize; i++) {
        paths *= (2 * gridSize) - i;
        paths /= i + 1;
    }
    console.log(paths);
    return paths;
}

getRoutes(20);