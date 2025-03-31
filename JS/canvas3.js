function setup() {
  createCanvas(600, 600);
  stroke(0, 0, 0);
  strokeWeight(1);
  frameRate(10);
}

function draw() {
  let r = 255;
  let g = 255;
  let b = 255;

  background(r, g, b);
  for (let y = 0; y <= height; y += 60) {
    for (let x = 0; x <= width; x += 60) {
        
      circle(y, x, random(50));
    }
  }

  //circlePattern();
}

function circlePattern() {}
