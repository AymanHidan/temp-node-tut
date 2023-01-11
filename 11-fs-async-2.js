// all right and just to give you an early taste of the differences between the asynchronous or non-blocking and synchronous which is a 
// blocking code why don't we set up few console logs 

const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} ${second}`,
    {flag: 'a'}
  )
  
console.log('done with this task')
console.log('starting next one')

/* 
why don't we set up a console log in few places let's say before we're accessing the file so i'm going to go with log and we'll say 
start then we're going to go right after writeFileSync we're going to say i'm done with the task and then we're going to go with
starting the next one starting the next one meaning the next task

so that should do it. I run it 

PS C:\Users\Dark\Desktop\Tutorial node> node 11-fs-async-2.js
start
Hello this is first text file. Hello this is second text file.
done with this task
starting next one

What we need to imagine is this task of getting those files as well as the second one of setting up that file might be very time 
consuming right. And imagine that if we have even 10 users and they're all the time using our application and if for example this one 
user does this one task or both of them and they take really long time what means that node is not going to be able to serve
other users and trust me it is a really big deal and notice how javascript is reading this code synchronously it just goes line by line
so we start with this task then we read these files and then we write the result and again if this is something that takes really 
long time then pretty much your application is down so no other user can do anything with that application because one of the users is 
for example reading these two files and then writing one again 
*/
