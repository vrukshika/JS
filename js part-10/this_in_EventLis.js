// let p = document.querySelector("p");
// 
// p.addEventListener("click", function () {
    // console.log("para was clicked!");
// });
// 
// let box = document.querySelector(".box");
// 
//mousesenter=> when mouse is enter in box it fires
// box.addEventListener("mouseenter", function () {
    // console.log("mouse entered in box!");
// });

//this in EventListeners
//this in calling fun denotes obj associated with that fun
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "yellow";
}

// btn.addEventListener("click", function () {
    // console.log(this); //denotes btn obj of button
    // console.log(this.innerText);
    // console.dir(this);
    // console.dir(this.innerText);
    // this.style.backgroundColor = "yellow"; //btn.style.bgcolor
// 
// })

btn.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);




