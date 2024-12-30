let btns = document.querySelectorAll("button");

function Sayname() {
    console.log("vrukshika")
}

function sayhello() {
    console.log("hello!");
}

for (btn of btns) {
    // btn.addEventListener("click", Sayname);
    // btn.addEventListener("click", sayhello);

    //doubleClick
    btn.addEventListener("dblclick", function () {
        console.log("you double clicked!");
     });
   
}