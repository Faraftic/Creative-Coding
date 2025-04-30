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
  console.log(map);
}
