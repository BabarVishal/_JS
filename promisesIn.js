let a = 33;
let b = 22;
let result = a + b;

//sync!   on the spot aveleble.  Its a Bocking req.
//asyne      that are return  the Promises. Becouse that result teke time! its non-Blocking req.

async function getData(){
    let resultPromissFromServer = await fetch("https://github.com/BabarVishal/DBconectionInBackend");
console.log(await resultPromissFromServer.json());
}

getData();
console.log(result);


fetch("https://github.com/BabarVishal/DBconectionInBackend")
.then((data)=>{console.log(data)})   // This promise Will be resolve Properly 
.catch((error)=>{console.log(error)})  // They Show me Error
.finally();     // This promise Will be resolve Properly // or // They Show me Error