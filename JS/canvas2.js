function setup() {
  createCanvas(600, 600);
  stroke(0, 0, 0);
  strokeWeight(1);

  generatePattern();
}

function generatePattern() {
  background(255);
  for (let y = 0; y <= height; y += 60) {
    for (let x = 0; x <= width; x += 60) {
      const d = random();
      if (d > 0.5) {
        line(x, y, x + 60, y + 60);
      } else {
        line(x + 60, y, x, y + 60);
      }
    }
  }
}

function mousePressed() {
  generatePattern();
}
