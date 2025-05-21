let img;
let dithered;

function preload() {
  img = loadImage("../Images/lebron01.jpg");
}

function setup() {
  createCanvas(1920, 1080); // You can change the canvas size as needed
  img.loadPixels();

  // Create a new graphics object to store dithered image
  dithered = createImage(img.width, img.height);
  dithered.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

      let brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      let rand = random(1, 256);
      let val = rand > brightness ? 255 : 0;

      dithered.pixels[index] = val;
      dithered.pixels[index + 1] = val;
      dithered.pixels[index + 2] = val;
      dithered.pixels[index + 3] = 255;
    }
  }

  dithered.updatePixels();
  noLoop();
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(dithered, width / 2, height / 2);
}
