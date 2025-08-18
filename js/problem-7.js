// problem 7 
function findEven(arr) {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log("P7:", findEven([1, 2, 3, 4, 5, 6]));