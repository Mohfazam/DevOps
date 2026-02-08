const num = 100000000000;

let sum = 0; 

const startTime = performance.now();

for(let i = 0; i < num; i++){
    sum += i;
}

const endTime = performance.now();

const timeTaken = endTime - startTime;
const timeInMinutes = (timeTaken / 60000).toFixed(2);
console.log("The Number is: "+ num);
console.log("Total time: " + timeTaken + " ms (" + timeInMinutes + " minutes)");
console.log(sum);