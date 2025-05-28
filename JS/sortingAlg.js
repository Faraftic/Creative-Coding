let values = [];
let i = 0;
let j = 0;
let sorting = true;
let stepsPerFrame = 1;

function setup() {
  createCanvas(800, 400);
  values = new Array(width).fill(0).map(() => random(height));
  frameRate(60);

  // Speed Up Button
  let speedUpBtn = createButton("Speed Up");
  speedUpBtn.position(10, height + 60);
  speedUpBtn.mousePressed(() => (stepsPerFrame = 50));

  // Normal Speed Button
  let normalSpeedBtn = createButton("Normal Speed");
  normalSpeedBtn.position(10, height + 10);
  normalSpeedBtn.mousePressed(() => (stepsPerFrame = 1));

  let ultraSpeedUpBtn = createButton("Ultra Speed");
  ultraSpeedUpBtn.position(10, height + 110);
  ultraSpeedUpBtn.mousePressed(() => (stepsPerFrame = 300));
}

function draw() {
  background(0);

  // Draw bars
  for (let k = 0; k < values.length; k++) {
    stroke(255);
    fill(k === j || k === j + 1 ? "red" : 255);
    rect(k, height - values[k], 1, values[k]);
  }

  // Sorting logic — do multiple steps per frame
  if (sorting) {
    for (let s = 0; s < stepsPerFrame; s++) {
      if (i < values.length) {
        if (j < values.length - i - 1) {
          if (values[j] > values[j + 1]) {
            swap(values, j, j + 1);
          }
          j++;
        } else {
          j = 0;
          i++;
        }
      } else {
        sorting = false;
        break;
      }
    }
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
