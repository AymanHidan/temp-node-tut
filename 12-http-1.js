/*
Now, we have http module but, we purposely won't spend too much time on explaining every single http method we're going to use in great 
detail because starting from next section all of our work meaning code in some shape or form will revolve around "server setup" 
aka "http module" so that point of course we will cover every last bit of syntax in great detail. But at this point we think it's 
just a waste of our time so if you're confused about something http related don't sweat it we will return to that subject shortly and 
cover it in far greater detail now if you're wondering why we bother with http module at this point at all since we're going to use it 
later anyway. You see with the help of http module we can show you some core features of node in action and give you somewhat of a visual 
representation of them otherwise we would have to base everything on slides and i don't think it's the best approach so long story short
if you're iffy about something http related just please be patient and i'll answer all your questions in the next course section nice 
i think we've got a good initial understanding of how the file system module works in node

Now we want cover the last initial module the built-in module and that is going to be the http module which is going to allow us to set up
a web server now please keep in mind one thing we'll just cover the basics because the large part of this course is going to be creating 
your own server and setting up the api now granted we will use an abstraction on top of the http module and that is going to be the package 
by the name of express but the whole point is going to be exactly the same that's why again we're not going to cover everything in greatest 
detail at the moment because i don't see the point of repeating myself 
*/

// let's grab the http module and we'll assign it some kind of variable as always let's go with require and we're looking for http
// that's the module name 
const http = require('http')
/* 
and the method we would want to use is create server again we'll assign this to some kind of variable and in this case the variable name 
will be server. this create server method is looking for the callback and in that callback function we have two parameters and both of 
those parameters are objects and since they're parameters you can call it whatever you would want but a common practice is calling them 
rec and res 

Now the first parameter req represents the incoming request so imagine a client is requesting from the web browser your webpage so you'll 
have information about the method and all kinds of useful stuff in that request object and the response is what we're sending back 
*/ 
const server = http.createServer((req, res) => {
    res.write('Welcome to our home page')
    res.end()
})
/*
now we're not done of course we'll set up more code here but before we do anything we also would need to specifically say what port our 
server is going to be listening to and that's why we'll go with server.listen() so that's another method and again this is arbitrary but 
i'm going to go with 5000. 
*/
server.listen(5000)
// again if this looks like a lot of gibberish where we have the request response as well as the ports don't worry later in the course 
// i'll cover that in more detail as well as show you some useful slides and all that good stuff 

/*
and as far as the response well we have a few methods. We have write so we go with a res and again this is the object and notice here
how i'm not using the req yet so i'm not checking for anything i'm just concerned about my response and the method name is write and 
inside the write we just come up with some kind of text and i'll say welcome to our homepage homepage, and once we have sent back the 
response i also would wanna end my request so i'm going to go with res.end and once we're done setting up the code inside of the callback 
function now of course i would want to open up my terminal and write node app.js
 
PS C:\Users\Dark\Desktop\Tutorial node> node app.js

You can now visit http://localhost:5000/ and see the website. But notice something interesting notice how we're not exiting. Previously every 
time we ran the file everytime we ran node and then whatever the file name we exited from the file. But in this case since we have a web server 
what do web servers do they keep on listening for requests and actually you want your server to always be up. And of course if i go to my web 
browser and then we go with localhost and of course in this case we have 5000. There it is, we have welcome to our homepage, so now of course we 
have effectively created our first website, now granted it's very basic but at least we have something on screen. 
*/