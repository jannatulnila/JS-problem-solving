// problem 1 
const str ='hello';

function reverseStr (str){
    let output = '';
    for(let i = str.length -1; i >= 0; i--){
        output = output + str[i]
    }
    return output
}

 console.log(reverseStr(str))

// problem 3

function isPalindrome (str) {
    let reversed = reverseStr(str);
   return str === reversed;
}

console.log("p3:" ,isPalindrome("madam")) 
console.log("p3:" ,isPalindrome("hello"))