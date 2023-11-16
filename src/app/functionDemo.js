
//1.In javascript class already we learned this approach

/* function declaration */

/* ternary operator */

var number = 10;
var isTrue = number % 2 == 0 ;
console.log(isTrue);


function getName(name){
   return name;
}

/* function calling */
getName("John");



/* 2 Approcah
Functions declaration with variable */

var getName = (value) => {
  console.log("You have entered the " , value);
}

/* function is calling by variable */
getName(10);

// So where you can see this kind of syntaxes in earlier class 

var evennumbers = [1,2,3,4];

function numberHandling(value){
     return number % 2 == 0;
}

numbers.filter(numberHandling(value))













