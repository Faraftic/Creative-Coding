let cols = 50;
let rows = 50;
let grid = [];
let running = true;

function setup() {
  createCanvas(500, 500);
  for (let x = 0; x < cols; x++) {
    grid[x] = [];
    for (let y = 0; y < rows; y++) {
      grid[x][y] = floor(random(2));
    }
  }
  frameRate(10); // Set the frame rate to 10 FPS
}

function mousePressed() {
  running = !running;
  if (running) {
    loop();
  } else {
    noLoop();
  }
}

function draw() {
  background(0);
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (grid[x][y] == 1) {
        fill(0, 255, 0);
        square(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
      }
    }
  }
  // Calculate next generation
  let next = [];
  for (let x = 0; x < cols; x++) {
    next[x] = [];
    for (let y = 0; y < rows; y++) {
      let state = grid[x][y];
      let neighbors = countNeighbors(x, y);

      if (state == 0 && neighbors == 3) {
        //implement the rules of the game of life
        // A dead cell with exactly 3 live neighbors becomes alive
        next[x][y] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        // A live cell with fewer than 2 or more than 3 live neighbors dies
        next[x][y] = 0;
      } else {
        next[x][y] = state;
      }
    }
  }
  grid = next; // Update the grid to the next generation
}

function countNeighbors(x, y) {
  let sum = 0; // Zero alive neighbors in the beginning
  for (let dx = -1; dx <= 1; dx++) {
    //Loop over columns, left (-1), same (0), right (+1)
    for (let dy = -1; dy <= 1; dy++) {
      //Loop over rows, above (-1), same (0), below (+1)
      let col = (x + dx + cols) % cols;
      let row = (y + dy + rows) % rows;
      sum += grid[col][row]; // Dead or alive
    }
  }
  sum -= grid[x][y]; // Subtract the cell itself
  return sum;
}
