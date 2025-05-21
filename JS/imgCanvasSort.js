let img;

function preload() {
  img = loadImage("../Images/lebron01.jpg");
}

function setup() {
  createCanvas(975, 600);
  pixelDensity(1);
}

function draw() {
  background(0);
  image(img, 100, 100, 750, 400);
  img.loadPixels();

  const pixelsArray = [];
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const idx = (x + y * img.width) * 4;
      const r = img.pixels[idx];
      const g = img.pixels[idx + 1];
      const b = img.pixels[idx + 2];
      img.pixels[idx + 3] = 255;
      pixelsArray.push([r, g, b]);
    }
  }

  pixelsArray.sort((colA, colB) => hue(colA) - hue(colB));

  let arrIdx = 0;
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      const idx = (x + y * img.width) * 4;
      img.pixels[idx] = pixelsArray[arrIdx][0];
      img.pixels[idx + 1] = pixelsArray[arrIdx][1];
      img.pixels[idx + 2] = pixelsArray[arrIdx][2];
      arrIdx++;
    }
  }

  img.updatePixels();
}
