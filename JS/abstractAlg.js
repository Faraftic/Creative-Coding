let allCircles = [];

// Maximum number of failed attempts before stopping
let maxFails = 1000;

function setup() {
  createCanvas(600, 600);
  noLoop(); //Only draw once
  noFill();
  stroke(0);

  let failedTries = 0;

  // Keep trying to add circles until we fail too many times
  while (failedTries < maxFails) {
    let newCircle = tryToMakeCircle();

    if (newCircle !== null) {
      allCircles.push(newCircle);
    } else {
      failedTries++;
    }
  }

  //Draw all the circles on screen
  for (let c of allCircles) {
    ellipse(c.x, c.y, c.radius * 2);
  }
}

// This function tries to make a new valid circle
function tryToMakeCircle() {
  let newX = random(width);
  let newY = random(height);

  // Check if this point is already inside any existing circle
  for (let existing of allCircles) {
    let distance = dist(newX, newY, existing.x, existing.y);
    if (distance < existing.radius) {
      return null; // Too close, skip this point
    }
  }

  let maxAllowedRadius = 50;
  let minAllowedRadius = 2;
  let closestDistance = maxAllowedRadius;

  for (let other of allCircles) {
    let distance = dist(newX, newY, other.x, other.y);
    let spaceToEdge = distance - other.radius;

    if (spaceToEdge < closestDistance) {
      closestDistance = spaceToEdge;
    }
  }

  // Shrink to fit
  let finalRadius = constrain(
    closestDistance,
    minAllowedRadius,
    maxAllowedRadius
  );

  if (finalRadius < minAllowedRadius) {
    return null; // Too small to be worth drawing
  }

  // Return a new circle
  return {
    x: newX,
    y: newY,
    radius: finalRadius,
  };
}
