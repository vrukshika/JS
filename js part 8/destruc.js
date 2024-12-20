//Spread=>expands iterable ex arrays,Strings into multiple values
//define using (...arr_name)

//array
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(...arr); //1 2 3 4 5 spread all array eles
//
//string
// console.log(..."Hello");   //H e l l o
//
// let min = Math.min(...arr);
// console.log(min);
//
//
//spread with Array Litereals

// let arr = [1, 2, 3, 4];
// let newArr = [...arr];
// console.log(newArr);
//
// let charArr = [..."hello"];
// console.log(charArr); //['h', 'e', 'l', 'l', 'o']
//
// let odd = [1, 3, 5];
// let even = [2, 4, 6];

// let array = [...odd, ...even];
// console.log(array);



//Spread with object literals

// let stu = {
    // name: "xyz",
    // age: 20,
// };
//
// console.log(stu);
//let datacopy = { ...stu };  //copy of stu obj
// let datacopy = { ...stu, id:123 };
// console.log(datacopy);


// let arr = [1, 2, 3, 4]; //values
//
// let obj1 = { ...arr }; //key:values using spread
// console.log(obj1);  //{0: 1, 1: 2, 2: 3, 3: 4}
//
// let obj2 = { ..."hello" };
// console.log(obj2); //{0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}


//Rest-> similar syntax as spread
//rest->takes infinite args and bundle them in array

//the args which we gave that are store in form of array
//so to access args we can use idx
// function sum(...args) {
    // for (let i = 0; i < args.length; i++) {
        // console.log("argumen is:", args[i]);
    // }
// }
//argumen is: 1
// argumen is: 2
// argumen is: 3
//  argumen is: 4


// function min(a, b, c, d) {
    // console.log(arguments);
// }

// function min() {
    // console.log(arguments);
    // console.log(arguments.length);
// }

// console.log(min(1, 2, 3));

// console.log(min(2, 3, 4, 5, 6));



// function sum(...args) {
    // return args.reduce((res, el) => res + el);
// }
//
//
// function min(msg, ...args) {
    // console.log(msg);
    // return args.reduce((minans, el) => {
        // if (el < minans)
            // return el;
        // else
            // return minans;
    // });
// }
//
//hello
//-2


//Destructuring->storing values of array in multiple variables

// it assigns first values of array to the variable
// let players = ["a", "b", "c", "d", "e","f"];
// let [winner, runnerup,secondRunnerup,...other] = players;
// console.log(winner, runnerup, secondRunnerup);  // a b
// console.log(winner);
// console.log(other);


//destructuring of objecs
// 
// let student = {
    // name: "vrukshika",
    // age: 20,
    // sub: ["math", "eng", "sci"],
    // username: "abc",
    // password: "123",
    // 
// };

// let username = student.username;
// let password = student.password;

// let { username, password}=student;

//let { username:user, password:security, city="pune"}=student;


//JS PART-8 QNS

//Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

//square & sum
// let arr = [1, 2, 3, 4];

// let res=arr.reduce((sum, el) => {
    // return sum + (el * el);
// });

// console.log(res);

// let avg = res / (arr.length);
// console.log(avg);

//Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
// let arr1 = [1, 2, 3, 4, 5];
// 
// let res1 = arr1.map((el) => (el + 5));
// 
// console.log(res1); // [6, 7, 8, 9, 10]

//Qs3. Create a new array whose elements are in uppercase of words present in the original array.
let strings = ["abcv", "cbdj", "chjbhj", "ncnv"];
console.log(strings.map((el) => (el.toUpperCase())));

//Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
//variable number of arguments. The function should return a new array with the -original array values and all of the additional arguments doubled.

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
// 
// let obj1 = {
    // name: "vrukshika",
    // age: 20,
// };
// 
// let obj2 = {
    // username: "abc",
    // password: "123",
// };

// const mergeObjects=(obj1, obj2) => ({ ...obj1, ...obj2});
// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
// 

