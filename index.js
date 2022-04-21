console.log("working");
//Q1. function having zero parameter and console statement

const zero = function(){
    console.log("Function having zero parameter and console statement");
}

zero();

//---------------------------------

//Q.2 Function having two parameter
let sum = (a,b) =>{
    
    console.log(`Sum of ${a} and ${b} is ${a+b}` )
}
sum(3,4);


//--------------------------------------

//Q3. create one arrow function
let arrow = () =>{
    
    console.log(`this is arrow function`)
}
arrow();


//----------------------------------------------


//Q4. Print output
var x = 21;
var girl = function (){
    console.log(x);
    var x =20;
};
girl();

//Output:  undefined
 


//------------------------------------------------


//Q5. Print output
var x = 21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x = 20;
};

// // Output:  
// //          undefined
// //          21


// //----------------------------------------------------

 //Q4. Print output
var x = 21;


let a = function(){
    x = 20;
    console.log(x);
};
let b = function(){
    x = 40;
    console.log(x);
};
a();
b();
console.log(a);


// Output:  20
//          40
//     ƒ (){
//            x = 20;
//            console.log(x);
//     }

//----------------------------------------------------------

//Q5. Factorial of a  number 

function factorial(n){
    if(n==0){
        console.log(1);
    }
    else{
        let arr  =  [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
   let arr1 = arr.reduce((accu,curr) => accu * curr);
   console.log(arr1);
    }
}

factorial(9);
