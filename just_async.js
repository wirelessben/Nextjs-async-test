


require('./constants.js');
let iteration = 0;
var currentValue = 0;

console.time("just async")

while(iteration < maxIterations){
    (async function t(){
        currentValue = currentValue + 1;

    })()
    iteration= iteration + 1;

}

console.timeEnd("just async")