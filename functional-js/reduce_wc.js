
function countWords(inputWords) {
    // SOLUTION GOES HERE
    var res = inputWords.reduce(function (words, word) { 
        if (word in words) {
          words[word]++;
        }
        else {
          words[word] = 1;
        }
        return words;
      }, {});
    return res;
}

  module.exports = countWords