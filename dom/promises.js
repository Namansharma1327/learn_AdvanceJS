//************ (CREARTING PROMISE) WAY 1  (by storing in a variable)  ********************/

// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve()
//     },2000);
// })

// promiseOne.then(function(){
//     setTimeout(function(){
//         console.log("promise is comsumed");
//     },3000);
    
// });


//************ (CREARTING PROMISE) WAY 2  (by not storing in a variable)  ********************/


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve()
//     },2000);
// }).then(function(){
//     console.log("promise is comsumed");
// })

//************ (CREARTING PROMISE & PASSING DATA IN RESOLVE() )    ********************/

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task is completed");
        resolve({
            userName: "naman",
            age: 22
        })
    },2000);
}).then(function(user){
    console.log(user);
})