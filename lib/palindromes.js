function isPalindrome(s) {
  var joinedWord = s.replace(/[^\w]|_/g, "").split('').join('');

  var stringReverse = s.replace(/[^\w]|_/g, "").split('').reverse().join('');
  if (joinedWord === stringReverse) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
