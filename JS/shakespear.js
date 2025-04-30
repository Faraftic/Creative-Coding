let myData;
const map = new Map();

function preload() {
  myData = loadStrings("../shakespeare.txt");
}

function setup() {
  for (let i = 0; i < myData.length; i++) {
    if (myData[i] && myData[i].trim().length > 0) {
      // Check for non-empty lines
      let words = myData[i].match(/\w+|[.,;:?]/g);
      if (words) {
        // Ensure words is not null
        for (let j = 0; j < words.length - 1; j++) {
          let currentWord = words[j];
          let nextWord = words[j + 1];
          if (!map.has(currentWord)) {
            map.set(currentWord, []);
          }
          map.get(currentWord).push(nextWord);
        }
      }
    }
  }

  // Randomize the first word
  let keys = Array.from(map.keys());
  let randomStartWord = random(keys); // Randomly pick a starting word
  let generatedText = generateText(randomStartWord, 50); // Generate 50 words
  createP(generatedText); // Display the generated text
  console.log(map);
}

function generateText(startWord, numWords) {
  let currentWord = startWord;
  let result = [currentWord];

  for (let i = 0; i < numWords - 1; i++) {
    let nextWords = map.get(currentWord);
    if (!nextWords || nextWords.length === 0) {
      break; // Stop if no next words are available
    }
    currentWord = random(nextWords); // Pick a random next word
    result.push(currentWord);
  }

  return result.join(" ");
}
