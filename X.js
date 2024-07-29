let counter = 0;

for(var i = 0; i <= 10; i++){
    counter += i;
}

console.log(counter);
console.log(i);

// The for loop starts with i = 0 and runs until i is 10 (inclusive).
// On each iteration, i is added to counter.
// Let's manually go through the loop:

// When i = 0, counter = 0 + 0 = 0
// When i = 1, counter = 0 + 1 = 1
// When i = 2, counter = 1 + 2 = 3
// When i = 3, counter = 3 + 3 = 6
// When i = 4, counter = 6 + 4 = 10
// When i = 5, counter = 10 + 5 = 15
// When i = 6, counter = 15 + 6 = 21
// When i = 7, counter = 21 + 7 = 28
// When i = 8, counter = 28 + 8 = 36
// When i = 9, counter = 36 + 9 = 45
// When i = 10, counter = 45 + 10 = 55
// After the loop, counter is 55.

// Since var is used to declare i, it has function scope or global scope (not block scope). Therefore, i is still accessible outside the loop, and its value will be 11 after the loop completes.