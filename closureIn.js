// A Closure is the combination of a function bundeled together 
// with the references to its surrounding state

//Q1.........................
function init(){  //surrounding State.

    let name = "Vishal";

    function sayMyName(){  //Inner State
        console.log(name);
    }
    sayMyName();

}
init();

//Q2............................
function name(name){

    function Fullname(fistName){
      console.log(name + fistName);
    }
    return Fullname;

}

const fn = name("Babar");
fn("Vishal");

//Q3.................
function count(num){
    function add(b){
        console.log(num + b);
    }

    return add;
}

 const add1 = count(5);
 add1(5);


//Q4.............................
 function makeCount(){
    let count = 1;

    function increment(){
        console.log(count++)
    }

    return increment;
 }

const counter = makeCount()
counter();
counter();
