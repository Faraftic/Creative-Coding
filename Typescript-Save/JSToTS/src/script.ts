const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

context.font = "bold 30px sans-serif";

let scrollCounter: number;
let cameraY: number;
let current: number;
let mode: "bounce" | "fall" | "gameOver";
let xSpeed: number;
const ySpeed = 5;
const height = 50;

interface Box {
  x: number;
  y: number;
  width: number;
}

let boxes: Box[] = [];
boxes[0] = {
  x: 300,
  y: 300,
  width: 200,
};

let debris: Box = {
  x: 0,
  y: 0,
  width: 0,
};

function newBox(): void {
  boxes[current] = {
    x: 0,
    y: (current + 10) * height,
    width: boxes[current - 1].width,
  };
}

function gameOver(): void {
  mode = "gameOver";
  context.fillText("Game over. Click to play again!", 50, 50);
}

function animate(): void {
  if (mode !== "gameOver") {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText("Score: " + (current - 1).toString(), 100, 200);

    for (let n = 0; n < boxes.length; n++) {
      const box = boxes[n];
      context.fillStyle = `rgb(${n * 16},${n * 16},${n * 16})`;
      context.fillRect(box.x, 600 - box.y + cameraY, box.width, height);
    }

    context.fillStyle = "red";
    context.fillRect(debris.x, 600 - debris.y + cameraY, debris.width, height);

    if (mode === "bounce") {
      boxes[current].x += xSpeed;
      if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas.width)
        xSpeed = -xSpeed;
      if (xSpeed < 0 && boxes[current].x < 0) xSpeed = -xSpeed;
    }

    if (mode === "fall") {
      boxes[current].y -= ySpeed;
      if (boxes[current].y === boxes[current - 1].y + height) {
        mode = "bounce";
        let difference = boxes[current].x - boxes[current - 1].x;

        if (Math.abs(difference) >= boxes[current].width) {
          gameOver();
        }

        debris = {
          y: boxes[current].y,
          width: Math.abs(difference),
          x: 0,
        };

        if (boxes[current].x > boxes[current - 1].x) {
          boxes[current].width -= difference;
          debris.x = boxes[current].x + boxes[current].width;
        } else {
          debris.x = boxes[current].x - difference;
          boxes[current].width += difference;
          boxes[current].x = boxes[current - 1].x;
        }

        xSpeed += xSpeed > 0 ? 1 : -1;
        current++;
        scrollCounter = height;
        newBox();
      }
    }
    debris.y -= ySpeed;

    if (scrollCounter) {
      cameraY++;
      scrollCounter--;
    }
  }
  window.requestAnimationFrame(animate);
}

function restart(): void {
  boxes.splice(1);
  mode = "bounce";
  cameraY = 0;
  scrollCounter = 0;
  xSpeed = 2;
  current = 1;
  newBox();
  debris.y = 0;
}

canvas.onpointerdown = function () {
  if (mode === "gameOver") {
    restart();
  } else if (mode === "bounce") {
    mode = "fall";
  }
};

restart();
animate();
