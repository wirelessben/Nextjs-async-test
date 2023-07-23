# NEXTJSISDOGWATER

## A simple demonstration about settimeout vs setimmeadiate  //note the misspelling is to taunt them about "briliant" . Yes, it's setImmediate.  


## The Code in question
https://github.com/vercel/next.js/blob/2b497413087c56dedb3e04f77ea0deebb5d12d0b/packages/next/src/server/stream-utils/node-web-streams-helper.ts#L114


### How to run.

Open up the existing code space and 
```bash
@EnderKilledYou ➜ /workspaces/NEXTJSISDOGWATER (main) $ node setTimeout.js 
setTimeout: 0.418ms
@EnderKilledYou ➜ /workspaces/NEXTJSISDOGWATER (main) $ node setImmediate.js 
setImmediate: 0.23ms
```
