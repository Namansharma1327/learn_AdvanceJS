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

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve({
//             userName: "naman",
//             age: 22
//         })
//     },2000);
// }).then(function(user){
//     console.log(user);
// })

//********************** chaining of promises ********************* */


// const promiseFour = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({
//                 username: "naman", pass: "123"})
//         }else{
//             reject("ERROR: something went wrong");
//         }
//     },1000)
// })
// promiseFour.then((user)=>{
//     console.log(user);
//     return (user.username);
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

 

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({
//             username: "javascript", pass: "123"})
//         }else{
//             reject("ERROR: JS went wrong");
//         }
//     },1000)

// });
// async function consumePromiseFive(){
//    try{
//     const response = await promiseFive;
//    } catch(error){
//     console.log(error);
//    }
// }
// consumePromiseFive();

//********************* GETTING ACTUAL DATA FROM API ************** */

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch(error){
//         console.log("E:", error);

//     }
// };
// getAllUsers();

//Same work with then and catch//

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E:",error);
})
