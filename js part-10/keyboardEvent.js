//keyboard events=>when we press someting on keyboard this events are triggered
//ex of keyboard events: "keyup","keydown","keypress"

let inp = document.querySelector("input");
let btn = document.querySelector("button");

//for input
//keydown=>when any key has been presses it prints
inp.addEventListener("keydown", function (event) {
    //console.log(event); //KeyboardEvent { key: 'a', code: 'KeyA'
    console.log("key=", event.key);
     console.log("code=",event.code);
    //console.log("key was pressed!");
})

//keyup
// inp.addEventListener("keyup", function () {
    // console.log("key was pressed!");
// })

//keypress
// inp.addEventListener("keyup", function () {
    // console.log("key was pressed!");
// })

