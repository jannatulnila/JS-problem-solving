// problem 2 

function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("P2:", countVowels("programming"));