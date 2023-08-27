# Nextjs Async Test

## A simple demonstration about setTimeout vs setImmediate  vs an async callback


## The Code in question
https://github.com/vercel/next.js/blob/2b497413087c56dedb3e04f77ea0deebb5d12d0b/packages/next/src/server/stream-utils/node-web-streams-helper.ts#L114


### How to run

Clone the project, and run each test:
```
➜  Nextjs-async-test git:(main) ✗ node setTimeout.js  
setTimeout: 1.943ms
➜  Nextjs-async-test git:(main) ✗ node setImmediate.js 
setImmediate: 1ms
➜  Nextjs-async-test git:(main) ✗ node just_async.js 
just async: 0.442ms

```
