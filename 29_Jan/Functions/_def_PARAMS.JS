function add (a, b , last =10 ){
//  console.log(a + b + last );
}

add(4,5 , 20)

// Rest Operator 
var copy=0;;
function addAll(a , b   , ...all){
    console.log(a + b+  all.forEach((i)=>{
        copy +=i;

    }))
}

addAll(2,1,4,6,7)


// forEach-Looop

const arr = [1,2,3,4,5,6,7,8,9]
let sum =0;
const returns = arr.forEach((emlem)=>{   // It does not return anything
       sum +=emlem
     
})

// console.log(sum)
 

