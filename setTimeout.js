


const maxIteration = Math.pow(2,3);
let iteration = 0;
var currentValue = 0;

console.time("setTimeout")

while(iteration < maxIteration){
    setTimeout(()=>{
        currentValue = currentValue + 1;

    },0)
    iteration= iteration + 1;

}

console.timeEnd("setTimeout")