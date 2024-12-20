//Array methods
//syntax: arr.map(fun_def or fun_name)

// let num = [1, 2, 3, 4];
// 
// let x = num.map(function (el) {
    // return el * 2;
// });
// 
//[2, 4, 6, 8]
// 
// let x1 = num.map((el) =>{ 
    // return el * el;
// });
//[1, 4, 9, 16]

let student = [
    {
        name: "a",
        marks: 95,
    },
    {
        name: "b",
        marks: 92,
    },
    {
        name: "c",
        marks: 98,
    },
]

let gpa = student.map((el) => {
    return el.marks / 10;
})


//filter
//filter(fun name or def.)
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
//
// let ans=nums.filter((n) => {
// return n % 2 == 0;
// });
//
// console.log(ans);
//
// let ans1=nums.filter((n) => {
// return n % 2 != 0;
// });
//
// console.log(ans1);



//every ->return true if every el of array gives true
//arr.every(fun def)
    
// [2, 4, 6, 8].every((n) => (n % 2 == 0));
//
// [2, 4, 6, 1, 8].every((n) => (n % 2 == 0));
//
// [2, 4, 6, 1, 8].some((n) => (n % 2 == 0));


//reduce function =>reduce fun reduce array in a single value
//reduce(accumulator,ele),ele used to access all ele of array

//ex-1
// let nums = [1, 2, 3, 4];
// let res = nums.reduce((a, el) => (a + el)); //sum of all ele
// console.log(res);


//ex-2
//max of array
// let arr = [2, 4, 6, 7, 9];
//
// let ans = arr.reduce((max, el) => {
    // if (el>max)
        // return el;
    // else
        // return max;
// });
//
//  console.log(ans);
//




//pr Qns-folder-8

//1. find min in a array

// let arr = [1, 2, 3, 4];
//
// let res = arr.reduce((min, el) => {
    // if (el<min) {
        // return el;
    // } else {
        // return min;
    // }
// });
//
// console.log(res);

//2. check if all nums in array are multiple of 10 or not
//logic: all nums=>use everry fun, if n%10==0 then true

// let arr = [10, 20, 30, 40];
// let res = arr.every((el) => (el % 10 == 0));
// console.log(res);







