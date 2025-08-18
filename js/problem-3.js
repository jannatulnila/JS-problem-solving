// problem 3 

function isPalindrome (str) {
    let reversed = reverseStr(str);
   return str === reversed;
}

console.log("p3:" ,isPalindrome("madam"))
console.log("p3:" ,isPalindrome("hello"))