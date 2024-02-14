//Grasp asynchronous concepts in Node.js, such as callbacks, Promises, and async/await.

//CREATE A aSYNCHRONUS fUNCTION 
 

//Prime Number Logic 
 const Prime= function printPrime(lowerNumber , higherNumber){
console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
}

 
//Display Function
function Display(){
    console.log("Hiii I am in between")
}
setTimeout(()=>{
    Prime(1,1000)
}, 1000);
Display();








