let img;
let img2;
function preload() {
  img2 = loadImage("../Images/bomboclat.jpeg");
  // img2 = loadImage("../Images/lebron02.jpg");
  img = loadImage("../Images/lebron01.jpg");
  // img2 = loadImage("../Images/bombardino.jpeg");
  // img1 = loadImage("../Images/tralalero.jpeg");
}
function setup() {
  createCanvas(1200, 600);
  // pixelDensity(1);

  img2.loadPixels();
  img.loadPixels();

  newImg = createImage(img.width, img.height);
  newImg.loadPixels();

  for (let i = 0; i <= img.pixels.length; i += 8) {
    newImg.pixels[i] = img2.pixels[i];
    newImg.pixels[i + 1] = img2.pixels[i + 1];
    newImg.pixels[i + 2] = img2.pixels[i + 2];
    newImg.pixels[i + 3] = img2.pixels[i + 3];

    newImg.pixels[i + 4] = img.pixels[i + 4];
    newImg.pixels[i + 5] = img.pixels[i + 5];
    newImg.pixels[i + 6] = img.pixels[i + 6];
    newImg.pixels[i + 7] = img.pixels[i + 7];
  }
  newImg.updatePixels();
  image(newImg, 100, 100, 900, 400);
}

/*

let img;
let img2;
function preload() {
  img2 = loadImage("../Images/lebron02.jpg");
  img = loadImage("../Images/lebron01.jpg");
}
function setup() {
  createCanvas(1200, 600);
  pixelDensity(1);

  img2.loadPixels();
  img.loadPixels();

  newImg = createImage(img.width, img.height);
  newImg.loadPixels();

  for (let i = 0; i <= img.pixels.length; i += 4) {
    let pixelIndex = i / 4;
    if (pixelIndex % 2 == 0) {
      newImg.pixels[i] = img2.pixels[i];
      newImg.pixels[i + 1] = img2.pixels[i + 1];
      newImg.pixels[i + 2] = img2.pixels[i + 2];
      newImg.pixels[i + 3] = img2.pixels[i + 3];
    } else {
      newImg.pixels[i] = img.pixels[i];
      newImg.pixels[i + 1] = img.pixels[i + 1];
      newImg.pixels[i + 2] = img.pixels[i + 2];
      newImg.pixels[i + 3] = img.pixels[i + 3];
    }
  }
  newImg.updatePixels();
  image(newImg, 100, 100, 900, 400);
}
*/
