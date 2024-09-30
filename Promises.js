// This Is Sync Code That are Work Line by Line!
let a = 22;
let b = 33;

let rusult = a + b;


// Async That are return The Promises! That Take Time To Print!

//1. Create a function that are Async 

async function getDeta() {
    let myResult = await fetch("https://github.com/");
    console.log(myResult);
}

getDeta();

console.log(rusult);


//Second Type Of Promises!

fetch("https://github.com/")
.then((data) => {
console.log(data);
})
.catch((err) => {
 console.log(err);
})

