var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-f-f-f-F]-[-F+F-F]-[-F+F+F-f-f-f+F]",
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
  // createP(sentence);
  treeDraw();
  len *= 0.5;
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
    } else if (current == "+") {
      rotate(PI / 6);
    } else if (current == "-") {
      rotate(-PI / 6);
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
  // createP(axiom);
  treeDraw();
  var button = createButton("Generate");
  button.mousePressed(generate);
}
