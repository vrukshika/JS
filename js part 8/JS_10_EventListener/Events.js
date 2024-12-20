//DOM Events
/*1. onclick->when an eleme is click its triggered
2. onmouseenter->when mouse enters an element */

//select one btn only
// let btn = document.querySelector("button");

// btn.onclick = function () {
    // console.log("button was clicked!");
// }

//select all btns
// let btns = document.querySelectorAll("button");
// 
// function hello() {
    // console.log("btn was clicked!");
    //alert("hello!");
// }
// 
// for (btn of btns) {
    // btn.onclick = hello;
    // btn.onmouseenter = function () {
        // console.log("you entered a button!");
    // };
// }

//onmouseenter
let btn = document.querySelector("button");
 
btn.onmouseenter = function () {
    console.log("you entered a button!");
};