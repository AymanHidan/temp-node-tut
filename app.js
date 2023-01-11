// NPM info
/*
All right at this point we're familiar with two types of modules, our own as well as the nodes built-in ones but just like in any good 
infomercial, i'll say but wait there's more we also have access to the world's biggest code store. And before you seriously start 
questioning my mental state, imagine this scenario you're building an app and of course as any good app it needs to have a slider just 
for funsies now, at this point you generally have two options, build it from the scratch yourself or search on google and copy paste 
someone else's solution. We'll have no issues with either of these options. Keep in mind that someone somewhere has struggled with the 
same issue, the need for the slider and there's a good chance that that person was kind enough to build it and share the whole project 
with us so our only job is to go through the docs and with the help of one command just add it to our project we can do that because when 
we install node we automatically also install npm or node package manager and npm enables us to do three things (1 )reuse our own code in 
other projects (2) use code written by other developers and lastly (3) share our own solutions with other developers as well. The npm 
project is hosted at npmjs.com and here you can find everything starting with useful utility functions to full-blown frameworks and 
libraries and as an example if you're familiar with react you know that react has the create react app package and of course it is hosted 
on the npm, a typical node project will have more than few npm packages installed as dependencies and before we install some cool packages 
let's talk about naming. 

Npm calls the reusable code a package and a package essentially is a folder that contains a javascript code. Another names you'll hear 
are modules and dependencies and honestly at this point all three are used interchangeably when talking about shareable javascript code. 
So don't be surprised if during the course i call them any of these names package dependency or module at the end of the day they all mean 
the same thing. Lastly let me just mention two things first there is no quality control in npm registry anyone can publish anything so 
it's up to you to sniff out the empty and useless packages and yes there are quite a few of those ones out there as well. A good 
indication of the security and usefulness of package is the amount of weekly download. If the number is high, meaning if it's popular it's 
a good chance that it's a battle tested and ready to go. 

And that brings me to my second point remember the slider example we discussed in the beginning, when it comes to npm packages there's a
good chance that if there is a bug someone else has already faced it and as a result it's already fixed in the package or there's a 
working solution. All right so that should do it for intro let's start using node package manager in our own project.

And as a side note if you want to search for some packages just visit npmjs.com and then for example if you're looking for the bootstrap 
you'll find the package and of course you can click on any of them, this will bring you to the docs as well as weekly downloads and rest 
of the stuff 
*/

// NPM Command
/*
once we're familiar with node package manager let's see how we can start using it in our own project, and the good news is that it's much 
simpler than you would expect you see when we install node we also install npm and because of that we have access to npm global command 
and you can check the npm version by running npm --version in your terminal  just keep in mind that the version most likely won't be the 
same as your node version and that is totally okay, so you can either do that in the terminal or of course in the integrated terminal
and you can aslo type npm --v and there it is of course now we have the version for our node package manager, and then we have two flavors:

// npm - global command, comes with node
// npm --version 

we can install package as a local dependency and that just means that we'll only use that package in this particular project that we're
working on, and the command for that one would be npm install or i for short and then whatever is the package (npm i <packageName>)
name so whether that is bootstrap low dash express or whatever.

// local dependency - use it only in this particular project
// npm i <packageName>

Or we can install dependency as a global dependency and that just means that we can use it in any project and the command for that one 
would be again npm i or install whichever method you prefer and then hyphen g so this is going to be the flag and then again the package 
name. Now when you install something globally most likely on a mac they will ask you for the sudo so you'll have to provide the
credentials that's why you'll run sudo npm install and then hyphen g and again package name. 

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

As far as which one you'll use more often that definitely will be a local dependency flavor because even though yes you can install 
packages globally with arrival of npx there's actually less and less need for setting up something globally that's why we'll focus on 
local dependencies first, how to set it up in our project, and then in a few videos when we talk about npx i'll cover why there's less 
need for setting up something globally. Now there's one more thing that we would need to set up in our project as far as dependencies so 
i know i know you're eager to start installing the packages but let's just wait a little bit and next video we'll add that extra thing 
that we're missing right now and then we'll be in good shape and then we'll start installing every package under the sun
*/

// First Package 
/*
// package.json - manifest file (stores important info about project/package)'
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

excellent we now know that we have access to the npm global command, we now know that in order to install the local package we will need 
to run npm i and the package name so what are we missing well? we're missing file by the name of package.json and essentially you can 
think of it as a manifest file that stores important information about our project. And there are three ways how you can create 
package.json, first is the manual approach where you just create a package.json in the root, and please do that in the root if that's
something that eventually you decide doing, and then of course you would need to create each property. The last two ways if we want to 
automate this and the first one is running npm init and in there they'll just step by step ask you the questions, and if you want to skip 
it you can just press enter and the third way is running npm init with a y flag and then everything is set up as default. So, Im not going 
to show you the manual approach it's just too time consuming. We'll right away go with npm, init first i'll show you the step by step 
approach and then of course i'll show you how everything is set up by default using the y flag. 

So go to your terminal and just type npm init:

PS C:\Users\Dark\Desktop\Tutorial node> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (tutorial-node)

and there, they tell you that there's going to be a walkthrough of creating a package.json file and the first one is the package name and 
by default of course it is going to use the folder name. Now keep in mind that if you eventually want to publish this package then the 
name has to be unique so you need to make sure that nowhere in the npm you can see the package with the same name. 

And i'm just gonna go with tutorial, and as far as version we'll talk about versions shortly, so i'll just skip this one. And as far as 
description again is just the default. Now as far as the entry point, eventually will change it, but for now it's good enough we're gonna 
go with one.intro.js, and then the test command as well as git repository and keywords and author and license. And we simply type yes and 
we are in good shape. 

PS C:\Users\Dark\Desktop\Tutorial node> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (tutorial-node)
version: (1.0.0)
description:
entry point: (01-intro.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to C:\Users\Dark\Desktop\Tutorial node\package.json:

{
  "name": "tutorial-node",
  "version": "1.0.0",
  "description": "",
  "main": "01-intro.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
PS C:\Users\Dark\Desktop\Tutorial node> 

So now of course we have the package.json file with name, version, description as well as the main property and of course the scripts, 
author and the license. Now i'll remove it i'll say delete and i'll show you that of course you can skip all of those questions by simply 
typing npm init -y . Now you have the same file we created with the previous method.

And as you can guess, yes of course you can come o the package.json later and then just change these values that's why it's definitely 
faster to just type npm in it and then the y flag. So why do we need this package.json? Well because if i would want to install the local 
package, this package is going to be stored as a dependency.

And to show you that, let's just go with npm i and then we're going to go with the package name lodash, and if you're not familiar with
lodash it's just a utility library and i'm just specifically using for installation purposes there's no real reason to have lodash for 
our own project but it's just something pretty interesting that i would want to showcase that's why we're using lodash.

and we run it and notice how we installed the package and check it out:

"dependencies": {
    "lodash": "^4.17.21"
}

Now in the package.json we have dependencies property, and it's an object and inside of that object we have a package by the name of 
lodash. We'll show you in this video or maybe in the next one why it's so important to have this package.json but another thing that 
i would want to showcase once we can see that we have dependencies property is that if you go in your visual studio code and if you click 
on refresh explorer what you'll also noticeis this node modules folder and in that node modules folder is where all the dependencies are 
stored. So if you don't have that folder already npm creates it. 

Now notice something interesting where for the lodash inside the node_modules folder we only have one folder, so we have only one 
dependency. But what we need to keep in mind that of course there's going to be some packages that have other dependencies. And that's why
i first installed lodash just to showcase that yes once you install dependency of course it is going to be in node_modules but if you'll 
try to install a package that is bigger that uses other dependencies you'll notice something pretty cool. 

If i clear to run npm i bootstrap. So once i install and once i refresh check it out, not only i have lodash and bootstrap installed but 
since bootstrap is using jquery as well as the popper.js now these are installed as dependencies and if you take a look at the dependencies 
property you can notice we have the bootstrap as well. 

And again the whole point of this video is to showcase why we would need package.json, so we need it because we need to provide information
about our project And inside package.json is a very important property, which is dependencies, because (1) in there we'll just store the 
dependencies which our project is using, and then some packages are actually going to use more dependencies and they will be automatically 
installed as well, in our case that was bootstrap. 

And just to give you a taste of the package, back in the app.js in order to start using the module, in our case i guess i'm going to go 
with lodash. First i would need to set up the variable and a common convention is calling the variable like so, and we'll set it equal to 
require and now of course we have access to the lodash
*/
const _ = require('lodash')
// now this is the difference between node packages like for example the http or the file module or whatever and the ones that you install 
// (lodash for example) the external ones, the external ones you always have to install first. If you won't install the dependency
// well node won't be able to find it. In our case we did install the dependency the lodash so now of course i can just assign it to the 
// variable and since lodash is utility library, why don't we test out one of their methods? and i'm just going to go with items and i'll 
// create an array of arrays, so items is going to be an array however the items are going to be arrays itself.
const items = [1, [2, [3, [4]]]]
// And lodash has this method the flat and deep method that effectively will just spit this back as a flat array, and the way we set that 
// up we just go with const and i'll call this newItems and then since we have access to everything in the (_) variable above, now i can 
// simply go with underscore here dot and then flattendeep and then we'll pass in the items, and now if we console log newItems. 
const newItems = _.flatMapDeep(items);
console.log(newItems)
/* 
and if i go to my terminal and just type node, and once we run check it out:

PS C:\Users\Dark\Desktop\Tutorial node> node app.js
[ 1, 2, 3, 4 ]

So low dash has the method by the name of flat and deep we have access to it because we install it as dependency and now of course i can 
start using it. Now we're not going to use bootstrap in this project because that would be too time-consuming bootstrap was just used so 
you can see that some dependencies will have more packages, so once we install one dependency there's actually going to be more 
dependencies and hopefully you have a clear understanding of how you would set up package.json, how we would install the package. 
*/






// Share Code 2:02:52
/*
Awesome we have package.json we installed few dependencies, and now i want to cover why having package.json is so crucial when we start 
sharing our project with other developers. And for this example i'm going to use github as well as few basic git commands and my
assumption is that since this is somewhat of a advanced course you're already familiar with git and github and you have the account. If you 
don't please stop the video create the account and just use your favorite search engine to learn about the basics of setting up the github 
repository as well as basic git commands, so our task is to push this up to the github. And now million-dollar question are we just pushing 
everything up including the node_modules which for the most projects is going to be somewhat big?

You can probably already guess that since i'm implying that the size is too big, that we'll have to push this up to the github without the 
node_modules. And we'll start by creating a dummy repo on github. I'll just create a temp repo. And i'm looking for these three commands:

…or push an existing repository from the command line
git remote add origin https://github.com/AymanHidan/temp-node-tut.git
git branch -M main
git push -u origin main

Essentially, i would want to get the remote url so i know where to push it. And before we set it up as github repo first i would want to 
create a .gitignore file in the editor. What i would want is to place the node modules in a .gitignore file, because that way they will be 
ignored by my source control and i won't be pushing up this giant, folder to the github because you'll see in a second that there is no 
need for it. 

So inside the gitignore, we're going to go with forward slash and then node_modules. 

Then I'll just initialize this as an empty git repo:

PS C:\Users\Dark\Desktop\Tutorial node> git init
Initialized empty Git repository in C:/Users/Dark/Desktop/Tutorial node/.git/

And then we'll add everything:



so git add git commit we'll just say first commit
first commit and then i'll copy and paste those three commands in order to set up that url the
remote url and once i have this in place should be able to go back to my
github and there it is this is my repo now probably your next question is okay
so we pushed it up to the github but i can clearly see that in my app.js
well technically i'm using the load as dependency right but we didn't push up the node modules
folder so how the person who is going to get this repo will be able to run the code in the
app.js since there's no node modules and you told us previously that we can only run
it if the dependency is there well let's check it out i'm going gonna go with clone option so
i'll just get the url i'll navigate back here
and i'll do that in messed up again it doesn't really matter we're just gonna go with desktop and
then git clone now i copy and paste the url i'll open
up a new instance of my text error copy and
paste and this is where the magic happens if we have package json we simply need to run
npm install and what is going to happen the npm will check for dependencies that
we have in the package json and automatically set up that node modules folder
so if i go here first of all i can see that there has been some changes that is already good news that just
means that i have my node modules and if i refresh check it out
so now of course i have my node modules folder and if you have been using react
applications you're probably already familiar with this one where again when you are setting up the
code you're not sharing the node modules folder and i can showcase that
by taking a look at my react projects and that's not what i wanted i didn't want to look at my awesome
picture what i wanted is react and then let's go with project and you'll see that in that repo
we have bunch and bunch of folders and each folder has two more folders
final and setup and now check it out none of them have the node models because imagine the size
of this sucker if i would push for every project for every folder
the node modules instead i have package json so when you get the repo when you clone
the repo or download or whatever then of course you get the package json and in here
these are the dependencies and you just run npm install and they are being installed okay
hopefully it is clear that why it is so crucial to have the package.json because we can just share the code without
dragging the massive node modules folder with us we can simply
just provide what packages our project is using and then once we get the repo
then we just run npm install that is the command and then npm will install all the
packages that are in the dependencies awesome we're familiar with npm we're familiar with
package.json now let's finally install the dependency that we'll use for the remainder of the
course and that is no other than the nodemon and of course if you
want to get more info you can visit the npm and you can search for the package
but as far as the general setup is just going to watch our files and then restart
our app for us so that way we don't have to each and every time type node and then
whatever the file name and we can install it as a simple dependency that is
definitely an option but since i also would want to cover depth dependencies we'll install that
as a depth dependency and the command for depth dependencies is following
where we go with npm and then i or install whatever and then we go with nodemon so
that is the package name and then you can either do hyphen d so that just signals that that is a
dependency or you'll see this save and dev so again whichever method you choose
that is really up to you but just remember that both of them will save it as a div dependency
so let's install it and then i'll talk about it why we would want to set up as a div dependency and the reason for that
is because if we think about it do we really need nodemon in production
and the answer is no when we push it up to digitalocean or heroku or whatever
we'll of course use something more serious than nodemon to restart our application pm2 comes to mind
but while we're developing yeah that is an option so in this case we'll add right away
nodemon to the dependencies now what else what kind of packages we would add to
dev dependencies for example testing packages for example linting for example
formatting and that sort of thing again nothing stops you from jamming this in dependencies but if you think about
it it makes way more sense if we add this as dev dependency so we use it while we are creating the
app but then once it's in production then we just share the dependencies that
actually the app is using not the ones that we used while we developed
the app hopefully that is clear and once we have the package we're almost there
now we just need to understand how the scripts work in a package.json and at the moment
as you can see we have the test one we won't use that one and inside of the scripts object
we just set up the commands and as a side note we can set up the command right now even
without the node mod for example i could go with start and that command will be equal
to npm and or i'm sorry node and then for example app.js
so that is my command and once i save my package json instead of running this node app.js
i can simply run npm and start and there it is as you can see same
functionality i run app.js and i get back the array as well as the hello world again we
still exit the application so it's not like we're out of the woods but i'm just showcasing that yes
we can set up the commands and then in the command we just provide a value and in this case of course it is node
and app.js now for some commands you can simply type npm start as you can see but for some of
them you'll have to provide the full value and that is going to be npm run and in order to showcase that i'm
going to go with dev and that one will be equal and in here we're going gonna go with a node
mod and then app.js so instead of running node like we're doing in the start now i'm
setting up a dev command and in order to run this one i'll have to go with npm run and then whatever here's the
command name again some of them you'll be able to use the shortcut where you go to start and some of them you'll have to
go the full route with npm run and then whatever is the command and as a side note
yes you can still run npm run start um this is also gonna invoke the command but in
our case we have dev and in here i have nodemon and then app.js so let's try it out
let's say first the package json and you should notice something pretty cool
where if i go with npm run and dev now i'm spinning up the node one
and it tells me that nodemon is watching my application and since i know that of
course we can test it out where i'm gonna go with console.log and then instead of the hello world
which i have after new items i'm gonna go with hello people and you should see
something interesting where once i change the text yep nodemon restarts
my app and now of course my value is hello people awesome so now i don't have to
type every time the node and then whatever file name nodemon automatically just restarts my
app and i simply set it up as a script now if you want to change this around if
you don't want to run npm around dev you can simply say nodemon
and then app.js and just remove the dev1 completely and a side note again if you have worked
with react project you are familiar with the setup because for react again we run
npm start and then there's a value that spins up the whole react dev server
where we can see our application not bad not bad well we're still on a roll let's cover how we can
uninstall the package as well and as a side note if you want to stop
the nodemon just press again ctrl and c and notice how we're of course stopping
the nodemon and again if we want to spin it up we'll just go with npm start
and as far as uninstalling the package we have the command for that and the name is uninstall
so i'll stop the nodemon and in the terminal i'll type npm uninstall and then of course the
package name which in my case is going to be a bootstrap now this is one of the approaches how we
can do that and there's also a nuclear approach now why i'm calling this a nuclear approach because that way
we remove the whole node modules folder and don't worry once you run the npm install then of
course you set everything back up from the scratch as well as you would remove this package like json and don't worry
i will cover the package.json file a bit later and the way that is going to
look like well we can first clear the terminal i'll install the bootstrap from the scratch again so say bootstrap
here and by the way probably need to add npm i and now again as you can see i have it
as my dependency and then like i said the nuclear approach is removing the node modules yep and then
removing the package log and then just running npm
install now of course in the package json if i want to remove the bootstrap for example in this case i
can simply remove it from my dependencies so i just remove it in the package.json then clear
everything and then we go with npm and then install and now we'll get from
the scratch the node modules since we're the ones who removed it and also will get that package hyphen
lock json now why am i showing you that nuclear approach because if you have used gatsby you know
that cats be somewhat notorious for sometimes just being a little bit
annoying where you do need to remove the cache folder you do need to remove the node modules as well as package lock
and then once you start up everything from scratch then as a magic the gatsby app starts
working and check it out if we take a look at the node modules now yes there's a bunch of modules that
is using right but there's no bootstrap and i can clearly see that because
there's nothing under the letter of b so we can clearly see that we removed bootstrap from our dependencies all
right and now let's take a look at how we can install package globally and what would
be some of the use cases and first let's start with command let's
jog our memory command was npm install and then dash g and the package name and in mac
they might ask you for permissions so you'll have to start with sudo and then again same spiel
npm install blah blah blah and first i want to showcase that i haven't installed nodemon globally
and the easiest way for me to showcase that is by running nodemon and app js
so we'll try to install nodeman package globally why well because then i can use
nodemon in any of my projects at the moment i have it as a local package
and of course i can spin it up by running and pm start but let's imagine scenario where i have i
don't know 20 nodal applications and i'm constantly working on node applications so to make my life easier
i will install node 1 globally and then i won't get this error because
at the moment you can see command not found normal all right so how do we do that well we can install it
in our terminal or we can do it in the integrated thermal it doesn't really matter when it comes
to global packages you can install it from anywhere so in my case i'm just going to navigate back to my
terminal just so you don't think that i'm cheating and i'll zoom in and we'll simply run and by the way i
need to start with sudo and then npm install and hyphen g
and of course we're looking for nodemon so now of course i'm prompted to enter my password
and once i enter my password of course i'm going to install nodemon globally
and now in any of my projects i can simply go with command of nodemon and then
whatever is the file name now to show you some of the use cases
if you work with gatsby you know that they have the global gatsby cli2 and that was one of
the reasons why you installed something globally is because well you used one of the frameworks for
example react or gatsby in this case and then of course in order to set up the gatsby
project or react project you needed to install this globally now things have changed though with
arrival of npx and i'll talk about the npx at the end of the video
but notice if you navigate to your react docs and if you look for create react app which again was
something that you needed to install globally now they suggest this npx route
where essentially you go with npx and then again whatever is the command name for example
for create react app that would be create react app for strappy the headless cms that would
be create strappy app and hopefully you get the gist where for every resource that of course would
be different and with that command you don't have to install that tool globally for example again in our case
we're installing nodemon but normally prior to npx you would install
this create react app globally and then you can spin up those react projects now i'm going to go
back to my terminal as you can see i was successful so what's going to happen if i go back
to my project and if i run nodemon and app.js since i have installed that package
globally there it is i spin up my app.js and if you don't believe me i
can change it back to hello world and i have no issues hello world
and there it is now of course i have hello world in the console so hopefully it is clear
that yes we can install packages globally and yes one of the biggest use cases was working
with some type of front-end library but with an arrival of npx things have
shifted where now those libraries suggest using the npx route instead as far as my personal
preference since i'm recording a lot of courses and since some of the global packages
usually introduce some kind of bugs to the students now not for all the students but
there's always this one student who just has a lot of issues with the global package
personally i avoid them as much as possible so i always either use the npx
or i just set it up as a local dependency again it's not a rule you can do whatever you
would want but i'm just telling you what is my preferred option as far as what is npx it stands for
execute and official name is the package runner it is a feature that was introduced in
npm 5.2 and again the main idea is following where you can run that
cli tool for example in this case create react app without installing these globally so as long as
you have npm with a version of 5.2 or greater instead of doing this whole
spiel of setting up the cli tool globally you just go with npx and then whatever here is the tool name
and of course the last one is the folder name as far as the package log json
why do we need it well if we take a look at our dependencies we can see that they have versions and if you remember
some of the dependencies have dependencies on their own and of course we need to
keep in mind that those dependencies have versions as well
and for example the person who gets your project you probably want them to have the same
exact setup because keep in mind as these versions change well so
does some of the functionality correct so for example you set up to your whole project you use
some kind of dependency that uses some other package and that version changes not for example for the
bootstrap but for the jquery and then pretty much your project is obsolete meaning
it might get some bugs because the version of the jquery changed so that's why you have this
package log json and in there you have those specific versions for all
the packages not only for dependencies but also for the packages
that the dependency is using now as far as this version we have three
values and you can think of it as a contract between us the people who are using the package and
the person who is creating and first number is a major change
so when this changes that means that there are some breaking changes now the second one is a minor one so
that means that it is backward compatible so for example if this changes to 18 i shouldn't expect any breaking
changes and the last one is just a patch for the bug fix so that's also something to keep in mind
when you decide to publish your own package but of course that's why you
have here this version now lastly i would just want to mention that if you're
interested in more info about the package.json i would suggest this resource so i
simply went with package.json then keep on scrolling keep on scrolling and you're looking
for i guess this blog post right so the name is the basics of package.json and in here
you literally find everything explained to the smallest detail whether that is a
name version and rest of the fields that you can find in a package.json beautiful we now know
how to utilize npm and for starters as a result for the manner of the course
instead of frantically typing node.js in the terminal we'll simply spin up nodemon
and it will watch for the changes and restart the app for us now what before we move on to creating
servers with express.js there are a few important node topics i would like to cover first
and those topics are following event loop async patterns in node.js events emitter and streams in node.js
while these topics are extremely important please keep in mind that our goal is to only understand the general ideas
behind these concepts and i only introduce them so you have an overall understanding of how things work
in node.js before we build our first node.js app if you're not satisfied with
my explanations or simply want to do more research by yourself just type any of these terms in your
favorite search engine and i can guarantee you'll find plenty of useful resources within a matter of seconds like blog
posts youtube videos and conference talks with that said it's my strong opinion
that it might be easier to understand those concepts more deeply so not just a general understanding but
understanding them more deeply once you have one or few working node apps
under your developer's belt let me also mention that in order not to waste your time with time consuming setup
in few upcoming videos i will run some pre-built code let me be very clear though i'm only
going to do that in a few videos and for the remainder of the course we will type out
everything together all right and let's kick things off by discussing the event loop now event loop
in node.js is one of those topics where i could spend the entire course discussing it and it still wouldn't be
enough so let's try to avoid that and instead just understand the journal concepts
while there are tons of useful event loop explanations out there the one that i probably like the most
is this one the event loop is what allows node.js to perform non-blocking
i o so input and output operations despite the fact that javascript is
single threaded by offloading operations to the system kernel
whenever possible and as you can see i'm reading straight from the node docs
now don't beat yourself up if this sounds like a lot of gibberish there's a reason why one can dedicate
the entire course just for event loop it is a pretty complex topic
but one word i do want you to remember is this offloading and you'll see why in
a second also don't worry i have prepared more examples as well as some slides to get my point
across but just in case you're not happy with my examples or you just want to explore the note
event loop in greater detail here are a few external resources i find
particularly useful when it comes to blog posts just go to your favorite search engine
and type node.js event loop and the one that i find really useful
is this one and the resource is nodejs and not.org
but it is dot dev and then follow the link and here they cover event loop
in great detail with a lot of cool examples and pictures and slides and all
that good stuff and when it comes to videos i would suggest going to youtube
and then just type event loop and the first video that's going to pop up is going to be the event loop bot in
browser javascript and i'll talk about it in a second and the node.js specific event loop video
is this one i believe it's 15 minutes long and you can see the name over here so this
is a very very useful video where the speaker covers a lot of useful details about
node.js loop in great detail and the reason why i'm suggesting the
first one as well well what is the language that we use in node that of course is javascript
right and even though there are some differences between the event loop the one that we use in the browser and
the one that is in the node.js if you understand the concepts behind
the event loop that we use in a browser trust me you're already halfway there to
understanding how the nodejs event loop works since it's such an important topic like
promised i have prepared some of my own resources as well we'll start with the slides and
move on to the closed examples in next video as a side note i made all
the course slides available on course api.com again their website
name is coors api.com and once you click on the slides link you'll see all the
slides and i would want to start our discussion by taking a look at what it means that javascript is
synchronous and single threaded and effectively it's just a fancy way of saying that
just repeat everything line by line so for example if i have console log with
first task then i have a for loop that takes some time in this case two seconds but that could
be 10 seconds that could be 20 or whatever and then i have another console log of
next task javascript will just start reading everything and it will read it line by
line and if this takes a long time it will only run the next test once it's done
performing this time consuming one so hopefully that is clear that
javascript just reads everything line by line and now let's take a look
at our second slide and in here we can see the solution
if we would want to offload something to the browser so when we're building
browser javascript apps we have this option of offloading to the
browser now of course it doesn't mean that we can offload the for loop that's not going to work this
effectively is still going to be the blocking code but browser nicely provides the api
where we can offload those tasks to the browser and only when the task is done then we
execute the callback and probably the example we have done the most is the fetch essentially when we make
the network request but we can also do that for example with a set timeout so i still have
console log with first task but then even though my set timeout function
has the second argument of zero so essentially i have set timeout function
i provide the callback function that's going to be executed in certain amount of time even if this
is zero meaning you would expect this one to run right away it only runs after the
next task so once javascript is done executing the immediate code
only then it executes the callback so in this case we have the set timeout
the api that is provided from the browser and we just said that we would want to execute that
e in zero seconds so effectively there is no wait time however javascript will first execute this code
and only then will execute the callback so that way we can offload those time consuming
operations to the browser again it doesn't mean that we can offload for loops it means that browser does provide some
apis where we don't have to write the blocking code now let me be very clear though when i
say we cannot offload for loops what i mean is that we can still
write blocking code in javascript but the browser does provide some nice
apis where we can offload those time consuming tasks and that brings us to
our main friend the node.js event loop again before i go over the
example let me stress something event loop is somewhat complex and this is just to give you a general
understanding so let's imagine this scenario i have an app and just like
any cool app i have subscribers or users or however you would want to call them
and in this case since my app is so so popular i have eight of them and
what do the users do well they're probably being annoying and they're requesting something from the application and as
the requests are coming in the event loop is responsible
for avoiding this type of scenario so let's imagine this i have all these
users the requests are coming in but larry the little decides that
in his request there's going to be some kind of time consuming i don't know database
crawl or something like that so effectively he's requesting something and behind the scenes in my code that
means that i need to perform something that takes a long time so in this case the event loop
just registers the callback so it registers what needs to be done when the task is complete because if the
event loop wouldn't do that then we would have this scenario where the requests are coming in and
because larry is requesting something that takes a long time the rest of the users would
have to wait and essentially it's not that the actual operation takes a long time it's just the fact
that we're wasting our time on waiting for that operation
to be done and only then we can serve the other users but what the event loop does
it registers the callback and only when the operation is complete it executes it now keep in
mind that again we're not executing this right away when we can effectively it's
the same scenario where we run our immediate code first
and only then when we have the time we execute the callback so for example in this scenario
if i would have hundred console logs after the next task i would run them first and only then the
second task would appear here regardless of what is the time set
in here because again we're running our immediate tasks first and only then we run the callbacks so the same thing
happens here where the requests are coming in let's say that the operation is complete we first
registered the callback operation is complete and instead of executing that callback right away it effectively gets
put at the end of the line and then when there is no immediate code to run then we execute
the callback hopefully that is clear event loop is our best friend because
with the help of event loop we can offload some time consuming operations and
effectively just keep all our users happy all right and once we have looked at the
event loop in theory to hammer this home let's also take a look at
some code examples where we can see event loop in action as a side note all code
examples are located in the event loop example directory so if you need to take a look just grab
the repo and you can find it there and you should be familiar with our first example since it's a
async version of read file method so we import read file from the
fs module and then we have console.log started our task first
then we have read file method where we pass the path we pass the
encoding and then of course we have the callback and then in the callback i can't log the
first result and then of course i have completed the first task and then right after the read file i have
starting next task and something really interesting in a console i can see that we first
cancel log started the first task then i right away have starting the next task and then of
course once i'm done once i get back my result then of course i have hello
this is first text file and of course completed first task and again the reason why is
this happening because read file is a synchronous and we already know that event loop will
offload this in this case to a file system so we start reading the file node is like
okay run this line of code then offload this one and only when i
get back to the result then run the callback so when
the file system responds with error or the data then we invoke this one all right so we
offload this task and we just keep on reading the code that's why we have started the first task starting the next
one so right away go to the next test and this one this asynchronous one while
we're just offloading and then once the response comes back whether it's an error whether it's a
success only then we invoke the callback hopefully that is clear
now as far as this comment i only added this one because we need to keep in mind that of
course i'm just grabbing this code from the file but the file is sitting
in the folder so if you were to run nodemon and then directly the filename
which is of course going to be in the event loop the path won't match so this path only
*/