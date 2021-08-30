import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


function Entry(journalEntry) {
  this.entry = journalEntry;
}

Entry.prototype.wordCount = function() {
  const wordArray = this.entry.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(word) {
    if (!Number(word)) {
      wordCount++;
    }
  });
  this.numberOfWords = wordCount;
  return wordCount;
}

Entry.prototype.vowelFinder =  function() {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  let vowelCount = 0;
  let consonantCount = 0;
  for (let i=0; i < this.entry.length; i++) {
    for (let n=0; n < vowels.length; n++) {
      if (this.entry.toLowerCase()[i] === vowels[n]) {
        vowelCount++;
      }
    }
    for (let j=0; j < consonants.length; j++) {
      if (this.entry.toLowerCase()[i] === consonants[j]) {
        consonantCount++;
      }
    }
  }
  return [vowelCount, consonantCount];
}

// Entry.prototype.consFinder = function() {
//   const consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
//   let consCount = 0;
//   for (let i=0; i < this.entry.length; i++) {
//     for (let n=0; n < consonants.length; n++) {
//       if (this.entry.toLowerCase()[i] === consonants[n]) {
//         consCount++;
//       }
//     }
//   }
//   return consCount;
// }

