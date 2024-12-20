let h2 = document.querySelector("h2");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let randomColor = getranColGnr();
    h2.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
    console.log("color updated!");
});

// Generate random color using rgb (0-255)
function getranColGnr() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    // Return rgb(r,g,b) string->most imp to return in rgb() format
    let color = `rgb(${red},${green},${blue})`;
    return color;
}
