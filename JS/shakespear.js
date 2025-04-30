let myData;
let markovChainMap = new Map();

// Load the text and create an array.
function preload() {
  myData = loadStrings("../shakespeare.txt");
}

function setup() {
  let previousWord = null;
  
  for (let i = 0; i < myData.length; i++) {
    let words = myData[i].match(/\w+|[,.:;?]/g); // Split each sentence into words and log it
    for (let j = 0; j < words.length; j++) {
      let word = words[j];

      // If there is a previous word, map it to the current word
      if (previousWord) {
        if (!markovChainMap.has(previousWord)) {
          markovChainMap.set(previousWord, []);
        }
        markovChainMap.get(previousWord).push(word);
      }

      // Update the previous word
      previousWord = word;
    }
  }
}
