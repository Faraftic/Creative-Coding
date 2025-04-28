var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = [];

function randomGeneration() {
  //Generate a (random number)
  let randomNumber = random(["F", "f"]);

  //Generate b (random transformation)
  const transformations = ["F", "f", "+", "-", "["];

  let randomRule = "";
  let openBrackets = 0;

  for (var i = 0; i < 20; i++) {
    if (openBrackets > 0 && random(1) < 0.3) {
      // Close an open bracket with "]"
      randomRule += "]";
      openBrackets--;
    } else {
      let nextChar = transformations[floor(random(transformations.length))];
      if (nextChar === "[") {
        openBrackets++;
      }
      randomRule += nextChar;
    }
  }

  while (openBrackets > 0) {
    randomRule += "]";
    openBrackets--;
  }

  rules[0] = {
    a: randomNumber,
    b: randomRule,
  };

}

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
      //F
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "f") {
      //f
      translate(0, -len);
    } else if (current == "+") {
      //+
      rotate(PI / 3);
    } else if (current == "-") {
      //-
      rotate(-PI / 3);
    } else if (current == "[") {
      //[
      push();
    } else if (current == "]") {
      //]
      pop();
    }
  }
}

function setup() {
  createCanvas(400, 400);
  background(255);

  randomGeneration();
  treeDraw();

  const button = createButton("Generate");
  button.mousePressed(generate);

  const regenerateButton = createButton("Regenerate Rule");
  regenerateButton.mousePressed(() => {
    randomGeneration();
    treeDraw();
  });
}
