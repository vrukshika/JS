//document.getElementsByid("idname");-> returns object

// returns html collections
// let smallImg = document.getElementsByClassName("oldImg");
//9
// for (let i = 0; i < smallImg.length; i++){
    // console.dir(smallImg[i]);
    //console.dir(smallImg[i].src);
    //change all small images in spiderrman-3 imgs
    // smallImg[i].src = "spider-man3.jpg";
// }

//document.getElementsByTagName("htmltag_name"); -> returns html collections
//ex:
//document.getElementsByTagName("p");
//access through idx
//document.getElementsByTagName("p")[0];
//change inner-text
//document.getElementsByTagName("p")[0].innerText="abxvhj";

//querySelector->selects single-first query
// console.dir(document.querySelector("p")); //select query using tag
// console.dir(document.querySelector("#desc")); //select query using id
// console.dir(document.querySelector(".oldImg")); //select query using class
//
// console.dir(document.querySelectorAll("p"));  //selects all p eles.
//
// console.dir(document.querySelectorAll("div a"));


// let para = document.querySelector("p");
// console.log(para.innerText);  //webpage text view
// console.log(para.textContent); //html file text view
// console.log(para.innerHTML); //html file text with tags

//console
// para.innerText = "abc";
// para.innerText = "hello i am <b>vrukshika</b>"; //print mormal text without tags
//
// para.innerHTML = "hello i am <b>vrukshika</b>";

//CHANGING HEADING TEXT WITH JS
// let heading = document.querySelector("h1");
// console.log(heading.innerText);
// heading.innerHTML = `<u>${heading.innerText}</u>`;
//

//innerText: gives webpage text
//textContent: gives html file text
//innerHTML: gives text with  html tags like <a>,<b>

//get and setAttributes

let img1 = document.querySelector("img"); //selects img tag
console.log(img1); //gives id of img tag->mainImg

img1.getAttribute('id');

//when we change id or class style doesn't apply or prev style removes
img1.setAttribute('id', 'spiderman');


