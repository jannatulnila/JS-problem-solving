// problem 6 
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum
}
console.log("p6", sumArray([1,2,3,4]))