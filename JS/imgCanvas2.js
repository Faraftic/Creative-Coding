let img;
let img2;

function preload() {
  img2 = loadImage("/Images/lebron02.jpg");
  img = loadImage("/Images/lebron01.jpg");
}

function setup() {
  createCanvas(1200, 600);
  pixelDensity(1);
  image(img, 100, 100, 900, 400);

  for (let i = 0; i <= 900; i++) {
    if (true) {
      img.loadPixels();
      for (let y = 0; y < img.height; y += 2) {
        for (let x = 0; x < img.width; x += 2) {
          let index = (x + y * img.width) * 4;
        }
      }
      img.updatePixels();
    } else {
    }
  }

  function draw() {}
}
