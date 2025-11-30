// function sum(num1, num2, callBackFunction){
//     let result =0;
//     setTimeout(()=>{
//         result = num1 + num2;
//         callBackFunction(result);
//     }, 2000);
// }

// const { reject } = require("async");

// sum(2,3, (r)=>{
//     console.log(r);
// })


//CALLBACK
// function area(l, b, callBack){
//     setTimeout(() =>{
//         if(l<0 || b<0){
//         let error = new Error("Number cannot be negative")
//         callBack(error, null)
//     }else{
//         let cal = l * b;
//         callBack(null, cal);
//     }
//     }, 1000)
// };

// area(5,-5, (error, cal)=>{
//     if(error){
//         console.log(error.message);
//     }else{
//         console.log(cal);
//     }
// })


//PROMISE
function area(l, b) {
  return new Promise((resolve, reject) => {
    if (l < 0 || b < 0) {
      let err = new Error("Length and Breadth must be positive numbers");
      reject(err);
    } else {
      let result = l * b;
      resolve(result);
    }
  });
}

// area(2, 5)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//ASYNC AWAIT
async function getArea(){
    try{
        let result = await area(2, 3);
        console.log(result)
    }
    catch(err){
        console.log(err.message)
    }
}
getArea();