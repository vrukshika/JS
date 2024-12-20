//try-catch

// console.log("hello world");
// try {
    // console.log(a);
// } catch(e) {
    // console.log("a is not define!");
    // console.log(e);
// }
// console.log("hello world");


//normal Functions

// syntax:
// const var_name = function (arg1, arg2) {
    //return something
// }
//

//ex: sum of 2 nums
// const sum = function (a, b) {
    // return a + b;
// }
//
// console.log(`sum is:${sum(2, 3)}`);


 

//higher order function-> takes multiple functions as an arguments & return a function
// function mulGreet(fun, count) {  //higher order function
    // for (let i = 1; i <= count; i++){
        // greet();
    // }
// }
//
// let greet=function() {
    // console.log("hello");
// }

// mulGreet(greet, 5);
//mulGreet(function () { console.log("kjsxsbcjd") }, 10);



//factory function->returns func definition based on given req

// function oddEventest(req) {  //factory fun=oddEventest()
    // if (req == "even") {
        // let even = function (n) {
            // console.log(n % 2 == 0);
        // }
        // return even;
    // } else if (req == "odd") {
        // let odd = function (n) {
            // console.log(!(n % 2 == 0));
        // }
        // return odd;
    // } else {
        // console.log("wrong requst!");
    // }
// }
//
// let req = "odd";
// let fun = oddEventest(req);  //return odd
// fun(3); //return true

// let req = "even";
// let fun = oddEventest(req);  //return even
// fun(4); //return true;



//Methods-> funs which are define inside obj are called methods

//obj-> it is a key: value pair

//obj calc
const calc = {
    num:45,
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
};

console.log(calc.add);
console.log(calc.add(4, 5));
console.log(calc.sub(8, 5));
console.log(calc.mul(4, 5));








// const student = {
    // name:"vrukshika",
    // age:21,
    // eng:83,
    // math:90,
    // phy:92,
// 
// 
    // getAvg() {
        // console.log("this keyword of student object value is:")
        // console.log(this);
// 
        // let avg = (this.eng + this.math + this.phy) / 3;
        // console.log(avg);
        // console.log(`${this.name} got avg marks=${avg}`);
    // }
    // 
// };
// 
