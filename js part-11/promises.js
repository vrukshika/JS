
//promise=>it takes one funs (1. resolve or success, 2. reject or failure )

//PromiseState->1.fullfilled  2. rejected

"fulfilled"
function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;

        if (netSpeed > 4) {
            resolve("success:data was saved!");
        } else {
            reject("failure:weak internet connection!");
        }
    });
}



//then()=>//execute after success to perfor another task
// & catch()=>execute after failure
//let req = savetoDb("hi there!");//req is promise obj

//req
// savetoDb("hi there!")
    // .then(() => { //execute when success
        // console.log("resolved promise!");
      
    // })
    // .catch(() => {
    // console.log("promise rejected!")
// })

//promise-chaining
savetoDb("hi there!")
    .then((result) => {             //execute when succe
        console.log("data1 saved!");
        console.log("result:", result);
        //if data1 saved then try to save data2
        // savetoDb("hello world!").then(() => {
            // console.log("data2 saved!");
        // });

        //if data1 saved then try to save data2 then return new promise  
        return savetoDb("hello world!");
    })
    .then((result) => {
        console.log("data2 saved!");
        console.log("result:", result);
        return savetoDb("vrukshika");
    })
    .then((result) => {
        console.log("data3 saved!");
        console.log("result:", result);
    })
    //only one catch block to handle all failure cases like try-catch 
    .catch((error) => {
        console.log("promise rejected!")
        console.log("error:",error);
    });
