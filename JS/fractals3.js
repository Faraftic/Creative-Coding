var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[-f-f+F-F]-[+f+f-F+F+]",
};

function generate() {
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        nextSentence += rules[j].b;
        found = true;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  treeDraw();
  len *= random(0.4, 0.6);
}

function treeDraw() {
  background(255);
  resetMatrix();
  stroke(0);
  translate(width / 2, height);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "f") {
      translate(0, -len);
    } else if (current == "+") {
      rotate(PI / 3);
    } else if (current == "-") {
      rotate(-PI / 3);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  createCanvas(400, 400);
  background(255);
  treeDraw();
  var button = createButton("Generate");
  button.mousePressed(generate);
}
