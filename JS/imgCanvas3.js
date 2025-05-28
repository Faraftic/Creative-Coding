let img;
let smallSize = 300;
let largeSize = 600;
let currentSize;
let isLarge = false;

function preload() {
  img = loadImage("../Images/lebron01.jpg");
}

function setup() {
  createCanvas(600, 600);
  currentSize = smallSize;
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(img, width / 2, height / 2, currentSize, currentSize);
}

function mousePressed() {
  isLarge = !isLarge;
  currentSize = isLarge ? largeSize : smallSize;
}
