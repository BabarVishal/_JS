function name(){
    let name = "Vishal Babar";

    function giveMeName(){
        console.log(name);
    }

    giveMeName();
}

name();


// A Closure is the combination of function bundles together(encoded) with reference to its surrounding state(Lexical enviroment).

function name_two(name){
    function givemename(){
      console.log(name);
    }
    return givemename;
}

let Name = name_two("Vishal");

Name();


function counter(){

    let count = 1;

    function addCounter(){
      console.log(count++)
    }

    return addCounter;
}

let Inc = counter();

Inc();
Inc();
Inc();