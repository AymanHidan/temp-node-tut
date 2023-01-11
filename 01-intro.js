/* 
How do we get node to evaluate our project? 

In JavaScript in was easy we create an index.html and so on... And we let the browser do the rest.
In nodejs we have two options a RPEL (read eval print loop) and CLI executable which means running our code in node.
RPEL is for playing around and CLI is for everything else.

To use the RPEL just go to the terminal and type node

C:\Users\Dark>node
Welcome to Node.js v14.20.1.
Type ".help" for more information.
> const name = "Ayman"
undefined
> name
'Ayman'
>

In order to close the REPL we do Ctrl+C two times.
*/

// 13:38  how do we get node to evaluate our code in a serious application:

const amount = 12

if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`Hey it's my first node app!`)

/* 
We run the file on the terminal with node app.js and we get

C:\Users\Dark\Desktop\Tutorial node>node app.js
large number
Hey it's my first node app!
*/