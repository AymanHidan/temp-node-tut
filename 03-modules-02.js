// CommonJS, every file is module (by default)
// (node use commonJS under the hood)
// Modules - Encapsulated Code (only share minimum). We're only sharing want we want.
// The way the modules work we just simply need to create a file 04-names.js
// We took the 3 or 2 variables we had in 03-modules-01.js and sent them to 04-names.js
// We took the sayHi functin we had in 03-modules-01.js and sent them to 05-utils.j
const names = require('./04-names') // require allows me to access the variables I just exported 
// If we comment out all that is bellow and we console log name, like this:
// console.log(names)
// we get the object:
/* 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
{ john: 'john', peter: 'peter' }
*/
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor') 
require('./07-mind-grenade')
// When we're setting up everyting, if we have a function inside of the module that we invoke (like 07-mind-grenade) yes that code will run
// even though we didn't assign it to a variable and we didn't invoke that variable
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)