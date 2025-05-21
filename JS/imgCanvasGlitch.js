let img;

function preload() {
  img = loadImage("../Images/lebron01.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
  noLoop();
}

function draw() {
  glitchEffect(img);
}

function glitchEffect(source) {
  let sliceHeight = 5;

  for (let y = 0; y < source.height; y += sliceHeight) {
    let h = sliceHeight;
    let xOffset = random(-20, 20);

    // Extract slice
    let slice = source.get(0, y, source.width, h);

    tint(255, 0, 0); // Red
    image(slice, xOffset, y);

    tint(0, 255, 255); // Cyan
    image(slice, xOffset + random(-5, 5), y);

    tint(255, 255, 255); // Reset color
  }
}
