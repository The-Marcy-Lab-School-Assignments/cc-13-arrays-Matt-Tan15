//write your code here
function averageInArray(arr) {
    let average = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        average += arr[i];
    }
    return average / arr.length;
}

console.log(averageInArray([2,4,5,7,8])); //returns 5.2
console.log(averageInArray([2,2,5,10])); //returns 4.75
console.log(averageInArray([2,2,2,2,2])); //returns 2