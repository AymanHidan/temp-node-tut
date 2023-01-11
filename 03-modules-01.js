// modules
// At the terminal we just type node app.js 
// And the question is does that mean that all my application needs to be in this file? 
// The answer is yes and no. Yes you'll execute one file but you'll split your code in the modules.

const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
  console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)
/* 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
Hello there susan
Hello there john
Hello there peter
*/
// It would make sense if the names were in seperate files and that's what we'll see in modules