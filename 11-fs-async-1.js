// Now we'll take a look at the asynchronous ones
// So i'm not looking anymore for the read file sync I'm actually looking for a method by the name of read file so this is going to be 
// the asynchronous one and the same goes with write file now

const { readFile, writeFile } = require('fs')
// The way the synchronous (he meant asynchronous) method works is we need to provide a callback. 
// And callback means is that we run that callback when we're done. When whetever funtionality we're doing is complete then we run 
// that callback. Just like we would do with add event listener on a button.
// Remember we go with addEventListener and add the event with the button that would be a click event and then pass in the callback
// function which will run everytime we click on a button.
// This is the same thing where we have the readfile function and we can simply use it, then we need to provide a path and the second 
// agrument which is the callback function. Inside of the callback we provide two agrument err and result. And inside the body I would
// want to check if there is an error and then I just return null or whatever you want and you can console log the error (err) as well.
// Then if everything is correct I'll have access to my data which has the parameter name of result.
// And since I would simply want to console log the result, I would want to go with console log and the result.
/*
readFile('./content/first.txt', (err, result) => {
  if (err) {
    console.log(err)
    return 
  }
  console.log(result)
})
*/
// but keep in mind that in my place of "console.log(result)" you would want to set up the functionality. 
/* 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
<Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e>
PS C:\Users\Dark\Desktop\Tutorial node> 
*/ 
// Something really interesting happened. Where we don't get the text we're getting this buffer. That's because we didn't provide 
// the uft coding
/*
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(result)
})
*/
/* 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
Hello this is first text file.
PS C:\Users\Dark\Desktop\Tutorial node> 
*/

// so if you're familiar with callbacks you know that of course we would need to set up that functionality inside of this callback where 
// function we created where we're getting this result (console.log(result)) otherwise there's going to be an error because the only way 
// for us to access this result if we're setting this as a callback is of course inside of this function and this is what i was
// saying before where yes eventually i'll show you a different approach because inevitably we'll set up a callback hell 
// and you'll see that in a second 
// so what I would want to do right now when i get back my first text file?
// well now of course i would want to assign it to some kind of variable 
// and then i would want to read that second file and then eventually 
// once i've read the second file then of course i would want to create that new file

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})


// The reason why i have access to the variables first and second inside writeFile function is
// because of course i'm looking in the outside scope of this callback function and then again
// we have a callback function in the writeFile. i know there's tons of callback functions that's why we'll have to set
// up a better setup when we're handling these callbacks but we'll do that a little bit later so
// for now let's just add a comment here where we have first parameter second parameter and then
// third parameter and of course this is going to be again our callback where we have error
// and result and then inside of this callback finally we can take a look at the value
// and of course the value will be in the last result 
// so save it here and two things we need to watch out for maybe there's an error and second one we
// should create a new file by the name result and then async dxt
// i'll run node app.js and then the result will be undefined okay that's fine like i said in this
// case we're not expecting anything back but what's really cool that in the result async we should
// have our text here is the result hello this is first text and then the second text so hopefully it
// is clear this is how we would use the async pattern.
