const { readFile, writeFile } = require('fs')

console.log('start')
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
console.log('starting next task')


/*
as an alternative let's take a look at the async approach so here again we'll set up some simple console logs and again
we'll cover this in a bigger detail a bit later for time being let's just set up console logs
and you'll see the biggest difference where i'm gonna go with log and let's say start so i'm gonna do that before i read this file 
and then i would want to go inside of the write file, the last one and instead of console logging result 
which of course is undefined since in this case we are not getting anything back now i want to go with done with this task and 
then right after my first read file i'm going to go with log and starting next task


if we run it, notice something cool where i have my start and then i right away have this starting next task and eventually i have this 
done with this task so what this means is that since we have this asynchronous approach the moment we start this task we just offload 
we just offload this task and we continue with our code, so that way when user number one for example comes here and wants to get this 
functionality, yeah sure here node just offload this task and then your application can keep on serving other users, again it seems a bit 
trivial at the moment because we have a basic approach but hopefully you get the idea where in one case we have everything happening line 
by line so only when we're done with the task we're starting a next one and with this approach we start a task and we just offload that 
task and then we start a next task right away 

now as far as the implementation as far as the callbacks yes this is a bit messy right notice how we only want to accomplish few tasks 
and it's already somewhat of a pain now alternatives are using promises as well as async await now again
hopefully you understand that when we talk about reading the file as well as the writing the file i use this as an example of some 
kind of task that would take a long time 

now for the remainder of the course mostly it's going to be reading from the database writing to the database
and that sort of thing but this is a very good illustration of how some tasks would take some time so of cours s far as the callbacks 
yes you can use them but the code is going to get messy somewhat quickly that's why a bit later in the course
we'll take a look at the alternatives which are promises and a sync weight and i have to tell you
honestly for the remainder of the course we'll use async await because in my opinion it is just easier to work with 
*/