//progression 1
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.slice(1, 4);
document.write(modifiedFood);

//progression 2
const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const modifiedFood = foods.splice(2, 0, "noodels", "icecream");
document.write(modifiedFood);

//progression 3
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(x => x % 2 == 0);
console.log(isEven);

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const isPrime = numberArray.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true
});

//progession 4
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const nonPrime = numberArray.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return true;
    }
    return false
});

//progession 5
var numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
var isEven = numberArray.filter(x => x % 2 == 0);
console.log(isEven);

//progression 6

const myArray = [11, 34, 20, 5, 53, 16];
const findSquareOfNumbers = myArray.map(function(x) {
    return x * x;
});
console.log(findSquareOfNumbers);

//progression 7
const myArray = [2, 3, 5, 10];
const multiply = myArray.reduce((a, b) => a * b);
console.log(multiply);