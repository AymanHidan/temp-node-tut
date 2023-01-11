// Another useful module is a path module which allows us to interact with file paths easily.
const path = require('path')

// starting by a very simple property, a sperator property that returns a platform specific seperator.
console.log(path.sep) // this is going to return my platform specific seperator.
/*
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
\
PS C:\Users\Dark\Desktop\Tutorial node> 
*/

// Next we're going to see the join method which joins a sequence of path segments using that platform specific sperator as the limiter
// And second thing it does it returns a normalized resulting path.

// And to show you an example we're going to create a new folder content. And inside it we'll create yet another folder, subfolder.
// inside the subfolder is a test.txt file. 
// Now we'll use the path dot join method
const filePath = path.join('/content', 'subfolder', 'test.txt') 
// If we start adding some type of forward slashes (trailing slahes) like this path.join('/content/', 'subfolder', 'test.txt') they'll be removed.
console.log(filePath)
// We get the normalised path
/*
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
\content\subfolder\test.txt
*/

// We can also get the base name, for example we created the previous path but we only want the last portion of it.
const base = path.basename(filePath)
console.log(base)
/* 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
test.txt
*/

// Path.resolve return an absolute path
// once in our application we need to provide that absolue path that's why we need to use this method.
// path.resolves accepts a sequence of paths of path segments and resolves it into an absoute path.
// The __dirname is going to point out to this directory where the app.js is located, it's a global variable.
// And we need to provide the rest of the values
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
/*
PS C:\Users\Dark\Desktop\Tutorial node> node app.js
C:\Users\Dark\Desktop\Tutorial node\content\subfolder\test.txt 
*/
// And if you're wondering why we would ever need this, remember that our application is going to run is different enviromments
// so the path to some kind of ressource is sgoing to be different from computer to computer