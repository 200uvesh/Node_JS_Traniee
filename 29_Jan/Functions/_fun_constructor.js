const name = new Function( "a" , "b" , "return a+b");
console.log(name(5,4))   //Constructor Function

const  multi = new Function("a" , "b" , "return(a*b)")
console.log(multi(4,10))  // But not a Good Practice 

