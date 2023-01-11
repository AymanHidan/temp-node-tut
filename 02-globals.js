/*
When we work with Vanilla JavaScript we know that we have access to the window object. And in the window object we can get a bunch of useful things.
For example we cam get a query selector so I can select a node, I can get buil-in fetch.
But in node there is no window because there is no browser. So there is no window object

But there are globals. There is this concept of global variables. 
These globals can be accessed no matter where you are in your application no matter how complex or nested the application gets.
The examples below are just some of the variables. There are of course more.
*/

// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000) 