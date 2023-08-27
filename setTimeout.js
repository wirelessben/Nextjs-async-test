


require('./constants.js');
let iteration = 0;
var currentValue = 0;

console.time("setTimeout")

while(iteration < maxIterations){
    setTimeout(() => {
        currentValue = currentValue + 1;

    },0)
    iteration= iteration + 1;

}

console.timeEnd("setTimeout")