// Let's take a look at the os module which provides many useful properties and methods for interacting with operating systems
// as well as the sever. 
// and the general set up for the built-in modules or the external ones that we're going to cover a bit later is going to be similar
// where we're going to go with some kind of variable os (for operating system) and then with require in which we have to pass in the name.
// And since this is a built-in module we don't have to install anything (install only of you're working with external ones)
const os = require('os')
// We're not doing dot and the forward slash ./ so that way node knows
// Once we set this up se then have multiple options, either you can access these methods by running the variable os
// or if we want a specific one we can destructere it
/// So here I have access to all the methods and properties that this module provides.
// For example we could get a useful info about the current user which of course is me.

// info about current user
const user = os.userInfo()
console.log(user);
/*
PS C:\Users\Dark\Desktop\Tutorial node> node app.js 
{
  uid: -1,
  gid: -1,
  username: 'Dark',
  homedir: 'C:\\Users\\Dark',
  shell: null
}
*/ 

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
/*
The System Uptime is 1173048 seconds
*/
// We're going to see an object that has a few methods and then we'll move to another module
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)
/*
{
  name: 'Windows_NT',   
  release: '10.0.19044',
  totalMem: 4179918848, 
  freeMem: 665702400
}
*/