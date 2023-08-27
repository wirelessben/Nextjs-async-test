


require('./constants.js');
let iteration = 0;
var currentValue = 0;

console.time("setImmediate")

while(iteration < maxIterations){
    setImmediate(()=>{
        currentValue = currentValue + 1;

    })
    iteration= iteration + 1;

}

console.timeEnd("setImmediate")