let centerX, centerY;
let mouseAttraction = 0.05;
let amountOfFormPoints = 4; // 4 points for a square
let stepSize = 10;
let x = [];
let y = [];

function setup() {
  createCanvas(600, 600);
  noFill();
  centerX = width / 2;
  centerY = height / 2;

  // Initialize points as a square
  let size = 100;
  x[0] = -size / 2;
  y[0] = -size / 2; // top-left
  x[1] = size / 2;
  y[1] = -size / 2; // top-right
  x[2] = size / 2;
  y[2] = size / 2; // bottom-right
  x[3] = -size / 2;
  y[3] = size / 2; // bottom-left
}

function draw() {
  // background(255); // Remove this line to keep trails

  // float towards mouse position
  centerX += (mouseX - centerX) * mouseAttraction;
  centerY += (mouseY - centerY) * mouseAttraction;

  // calculate new points
  for (let i = 0; i < amountOfFormPoints; i++) {
    x[i] += random(-stepSize, stepSize);
    y[i] += random(-stepSize, stepSize);
    ellipse(x[i] + centerX, y[i] + centerY, 5, 5); // show points
  }

  beginShape();
  // first controlPoint
  curveVertex(x[0] + centerX, y[0] + centerY);

  // only these points are drawn
  for (let i = 0; i < amountOfFormPoints; i++) {
    curveVertex(x[i] + centerX, y[i] + centerY);
  }

  // connect to the first point again
  curveVertex(x[0] + centerX, y[0] + centerY);

  // end controlPoint
  curveVertex(
    x[amountOfFormPoints - 1] + centerX,
    y[amountOfFormPoints - 1] + centerY
  );
  endShape();
}
