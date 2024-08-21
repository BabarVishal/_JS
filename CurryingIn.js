function add(a, b, c, d){
    return a + b + c + d;
}

const addNum = add(2,4,5,5);
console.log(addNum);

//..................................

function Add(a){
 return function(b){
    return function(c){
        return a + b + c;
    };
 };
}

console.log(Add(2)(4)(5));

//..........................................

function sendEmail(to){
    return function(Subject){
        return function(body){
            console.log(`Sending Email to : ${to} \n The Subject is : ${Subject}\n the Main body is :${body}`)
        }
    }
}

const step1 = sendEmail("Vishalbabar7351@gamil.com");
const step2 = step1("For ID of College!");
const step3 = step2("Hy Sir I Whant Id Of College For my Prsnal Work In Home toun Plese Proved Me a Id Card Imgeatly!");

// or...

const sendAutoEmail = (to) => (Subject) => (body) =>
`Sending Email to : ${to}  The Subject is : ${Subject} the Main body is :${body}`;

const step4 = sendAutoEmail("Vishalbabar7351@gamil.com");
const step5 = step1("For ID of College!");
console.log(step5("Hy Sir I Whant Id Of College For my Prsnal Work In Home toun Plese Proved Me a Id Card Imgeatly!"));