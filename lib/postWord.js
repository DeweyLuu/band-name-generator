'use strict'

module.exports = function postWord(word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "we already have that word: ";
  } else {
    wordObject[word] = true;
    msg = "we saved the word: ";
  }
  return {message: msg, confirm: word}
};
