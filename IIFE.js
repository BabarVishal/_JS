//Immediately Invoked function Expression!

(function add(a, b){
    console.log(a + b);
})(2, 3);

(function name(){
    console.log("hy");
})();

(() => console.log("Hy I Am Es6"))();

const value = (() => 100)();
console.log(value);

// const data = (async () => await fetch())();

const atm = (function(initalbalance){
  let balance = initalbalance;

  function withdraw(amt){
    if(amt > balance){
        return "Are you Kidding!";
    }else{
        balance -= amt;
        return balance;
    }
  }

  return {withdraw}

})

const vishal = atm(1000);
console.log(vishal.withdraw(100));