let array = [1, 2, 3, 4 ,5, 6];
let average = (array) =>array.reduce((a,b) => a + b) /array.length;

console.log(average(array));