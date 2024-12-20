//arrow functions

// let sum = (a, b) => {
    // return a + b;
// }
// console.log(sum);
// console.log(sum(3, 4));
//
//cube
//
// let cube = n => {
    // return n * n * n;
// }
//
// console.log(cube);
// console.log(cube(3));
//
//a^b
//
// let pow = (a, b) =>{
    // return (a ** b);
// }
// console.log(pow);
// console.log(pow(2,3));

//arrow fun:
//  Implicit return -> when fun return only single value then use it

// let sum1 = (a, b) => (a + b);
// console.log(sum1);
// console.log(sum1(3, 4));
//


//set-TimeOut->run specific code after some sec
//syntax: setTimeout(fun_def or fun_name,time in ns)

// console.log("hello");
// setTimeout(() => {
    // console.log("my home!");
// }, 2000);
// console.log("welcome to");
//after 2 sec my home! will print

//set interval
//syntax: setInterval(fun_def or fun_name,interval in ns)
//continuesly print msg after interval

    // let id=setInterval(() => {
        // console.log("welcome to college");
    // }, 2000);

// console.log(id);
// clearInterval(id); //used to clear interval on console

//   let id1=setInterval(() => {
    //   console.log("hey hi!");
//   }, 3000);
// console.log(id1);


//practice-qns:

//qn-1:write an arrrow fun that return square of a num n;
// let square = n => (n * n);
// 
// console.log(square(5));

//qn:2->w.a fun to print "hello world" 5 times at interval of 2s each
let id=setInterval(() => {
    console.log("Hello world");
}, 2000);

//2000*5 times=10ns
setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);
