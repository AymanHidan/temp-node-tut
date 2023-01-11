// We have an option of interacting with the file system and the name of the module is fs (File system module)
// There are two flavors when it comes to file module, we can do it asynchronously, non-blocking. Or we can do it synchronously which is 
// going to be blocking. For the time being we'll cover both of the steups. And later in the course we'll cover the differnces and 
// why you should prefer one over the other. Now think of them as different methods.
// Now we just want to show you 4 methods.
// I'm going to destruct right away the methods i'm looking for. And in the first video we'll take a look at the synchronous ones 
// That's why we'll destructure readFileSync
const { readFileSync, writeFileSync } = require('fs')
/* This is the same as doing. 
   const fs = require('fs');
   fs.readFileSync()
   fs.writeFileSync()
*/
// Now we're going to set up two variables. We're going to set up two files in the content folder first.txt and second.txt. 
// Let's now look at how we can read from the file system. And since we have readFileSync we know it is a method. And in that
// method we need to provide two parameters. We need to provide a path to that specific file as well as what is the encoding. So the node
// knows how to decode the file. Generally you'll go with utf-8 
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)
/*
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
Hello this is first text file. Hello this is second text file. 
*/

// Now we'll create a new file using writeFileSync. And the way it works we provide two arguments, one is the file name and 
// if the file is not there then node will create that file. And the second argument is the value we want to pass.
// If the file is there node will by default overide all the values that are there.

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first} ${second}`
  )
  // If you just want to upend to the file we need to pass it one more argument
  /* 
  writeFileSync(
    './content/result-sync.txt',
    `\nHere is the result : ${first} ${second}`,
    {flag: 'a'}
  )
  */