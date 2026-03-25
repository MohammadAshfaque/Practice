// setTimeout
// console.log("start");
// setTimeout(()=> {
//     console.log("Run after 3 second");
// },3000);

// console.log("End");

//setInterval
// let  count =0 ;

// let  id = setInterval(() => {
//     count++;
//     console.log(count);
//     if(count  === 3){
//         clearInterval(id); //stop  it 
//     }
// }, 1000);

//Fetch api
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err=> console.log(err));

//Axios
// axios.get("https://jsonplaceholder.typicode.com/posts/1")
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));

//Promise
// let  promise = new Promise((resolve, reject)  =>{
//     let success = true;

//     if(success){
//         resolve ("Done!");
//     }else{
//         reject("Error!");
//     }
// });

// promise
// .then (res  => console.log(res))
// .catch(err => console.log(err));

//callback
// function  greet(name , callback){
//     console.log("Hello" + name );
//     callback;
// }
// function bye(){
//     console.log("Goodbye");
// }
// greet("Ashfaque" ,  bye);

//asyncAwait
// async function getData() {
//     try{
//         let res = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
//         let  data  =  await res.json();
//         console.log(data);
//     }catch (err) {
//         console.log(err);
//     }
// }

// getData();

//eventloop
// console.log("start");
// setTimeout(() => console.log("Timeout") , 0);
// console.log("End");

// callback vs promise vs async await 
//callback
// getData(function(data) {
//   console.log(data);
// });
// //proimise
// getData()
//   .then(data => console.log(data));
// //asyncawait
// let data = await getData();
// console.log(data);

//generators
// function* gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let g  = gen();
// console.log(g.next().value);
// console.log(g.next().value);

//eror handling in async await 
// async function test() {
//   try {
//     let res = await fetch("wrong-url");
//     let data = await res.json();
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

//web workers
// let worker =  new Worker("worker.js");
// worker.postMessage(10);

// worker.onmessage = function(e) {
//     console.log("Result" , e.data);
// };

//Ajax
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload=  function(){
    console.log(JSON.parse(xhr.responseText));
};
xhr.send();``