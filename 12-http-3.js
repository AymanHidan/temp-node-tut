/* 
and before we discuss the external modules and actually set up a module that nicely watches our code and does the restarts
for us i also want to showcase what we have in the request object now this is going to be a giant object so i'm not going to 
cover each and every property however i would want to showcase a property that gets us the url, and what would be the url? 
well that would be an address and if you're worked with reactor or dom you know that for example for the home page we used 
forward slash and then if the client wants to go to for example to the about page he or she would enter forward slash and 
then about now in our case notice how we're still serving the same content. 
*/
const http = require('http')

const server = http.createServer((req, res) => {
// so in here we can set up the if statement where i say if request url is equal to the home page then of course this is what i would 
// like to send back, and just to speed this up i can tell you that we can cheat a little bit where we can just place everything in the 
// end and in my case i'll just cut out my string from res.write so we have res dot end so now we simply send the text     
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
// and now of course i also would want to check for the about (page) or contact or whatever so in here let's go with if and then request 
// an url and if that one is equal to about, then of course i can send a different text and as far as the text i'm just going to say 
// "here is our short history"     
    if (req.url === '/about') {
        res.end('Here is our short history')
    }
// and then lastly well what happens if the user is trying to access a resource that doesn't exist on our server, so we'll 
// have the about page, we'll have the home page but what about if the user is asking for a contact page that we don't have 
// here we'll simply set up a default response we'll say res.end and just to make it interesting i'll set up the template
// string and i'll show you that if we really want to we can also pass indirectly html and i'll say oops, please understand 
// this is just a basic scenario of course that's not how we'll be setting up our apis or nothing like that but just to give 
// you a quick intro. At the very end i would want to set up a link that allows the user to navigate back we do need to stop 
// the server and we need to go with node and then app.js refresh one more     
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)
