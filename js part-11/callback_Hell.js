h1 = document.querySelector("h1");


function changeColor(color, delay, nextColor) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColor) nextColor();
    }, delay);  
}

//changeColor("blue", 1000);

//callback hell=> nesting callbacks in any func.
changeColor("red", 1000, () => {
    changeColor("yellow", 1000, () => {
        changeColor("blue", 1000);
    });
});


