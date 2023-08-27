


require('./constants.js');
let iteration = 0;
var currentValue = 0;

console.time("just async")
const incr = (async function t(){
    currentValue = currentValue + 1;
})
while(iteration < maxIterations){
    incr()
    iteration= iteration + 1;
}

console.timeEnd("just async")