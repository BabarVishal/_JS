// print number in N Time i  recursion.....................
function number(){
let cnt = 0
 console.log("1", cnt++);
number();

}

function add(){
    number()
}

// add()

// print name in N time using recursion....................
function name(){
   let myname = "Vishal"
   console.log("1", myname++)
   name();
}

function main(){
  name();
}

// main()

//Print Name 5 time in recurtion;
function nameTwo(){
   let num = 5;
  for(let i = 0; i <= num; i++){
    console.log(i,"Vishal");
  }
  nameTwo()
}
function main(){
    nameTwo();
}
main();