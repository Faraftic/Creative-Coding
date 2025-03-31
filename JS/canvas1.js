

function setup() {
  createCanvas(600, 600);
  stroke(0, 0, 0);
  strokeWeight(1);
}

function draw() {
    background(255, 255, 255, 70);
    for (let i = 0; i < 10; i++) {
        noFill();
        square(random(400), random(400), random(50, 200));    
    }
 
}