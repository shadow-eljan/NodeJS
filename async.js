function sum(num1, num2, callBackFunction){
    let result =0;
    setTimeout(()=>{
        result = num1 + num2;
        callBackFunction(result);
    }, 2000);
}

sum(2,3, (r)=>{
    console.log(r);
})