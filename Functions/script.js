function hello(){
    console.log("Hello, My name is Riya Pandey");
}
// hello();

// reusable functions
function greet (name){
    console.log("Hello" +" "+ name);
}
// greet("Riya");
// greet("Shreya");
function add (a, b){
    let addition = a+b;
    console.log(addition);
}
// add(20, 50);
function multi (a, b){
    let multiply = a*b;
    console.log(multiply);
}
// multi(20, 10);
// multi(400, 8);

function square (x){
    let result = x*x;
    return result;
}

let value = square(4);
// console.log(value);

function eligibleToVote(age){
    if(age < 0){
        console.log("Invalid Input");
    }
    else if (age < 18){
        console.log("CanNot Vote");
    }
    else{
        console.log("can vote");
    };
}
// eligibleToVote(-3);
// eligibleToVote(2);
// eligibleToVote(30);

// to check if a num is even or odd

function numIsEvenOrOdd (num){
    if (num % 2 ==0){
        console.log("The Given Number Is Even");
    }
    else {
        console.log("The Given Number is Odd");
    }
}
// numIsEvenOrOdd(35);
// numIsEvenOrOdd(30);