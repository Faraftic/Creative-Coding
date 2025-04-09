let balls = [];

function setup() {
  createCanvas(400, 400);
  balls.push(createBall());
}

function createBall() {
  return {
    x: random(width),
    y: random(height),
    dx: random(-2, 2),
    dy: random(-2, 2),
    happy: true,
  };
}

function draw() {
  background(255);
  for (let ball of balls) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x < 0 || ball.x > width) {
      ball.dx *= -1;
      balls.push(createBall());
    }

    if (ball.y < 0 || ball.y > height) {
      ball.dy *= -1;
      balls.push(createBall());
    }
    if (random() < 0.01) {
      ball.happy = !ball.happy;
    }

    fill(ball.happy ? "yellow" : "red");
    noStroke();
    ellipse(ball.x, ball.y, 20, 20);
  }
}
