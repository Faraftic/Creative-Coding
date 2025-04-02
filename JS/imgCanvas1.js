let img;
let img2;

function preload() {
  img2 = loadImage("/Images/lebron02.jpg");
  img = loadImage("/Images/lebron01.jpg");
}

function setup() {
  createCanvas(1200, 600);
  pixelDensity(1);
}

function draw() {
  background(0);
  if (mouseX < 0.5 * windowWidth) {
    image(img, 100, 100, 900, 400);
  } else {
    image(img2, 100, 100, 900, 400);
  }
  img.loadPixels();
  for (let y = 0; y < img.height; y += 2) {
    for (let x = 0; x < img.width; x += 2) {
      let index = (x + y * img.width) * 4;
      img.pixels[index + 0] = mouseX;
      img.pixels[index + 1] = mouseY;
      img.pixels[index + 2] = y;
      img.pixels[index + 3] = 255;
    }
  }
  img.updatePixels();

  img2.loadPixels();
  for (let y = 0; y < img.height; y += 2) {
    for (let x = 0; x < img.width; x += 2) {
      let index = (x + y * img.width) * 4;
      img2.pixels[index + 0] = mouseX;
      img2.pixels[index + 1] = mouseY;
      img2.pixels[index + 2] = y;
      img2.pixels[index + 3] = 255;
    }
  }
  img2.updatePixels();
}
