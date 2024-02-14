// obj are passed by refrence

var a=9;
var b=10;
function add(a , b){
    a=20
    return a+b
}
console.log(add(5,10))
console.log(a) // a will not be changed


makes ={
    name : "Uvesh" ,
     age : 23
}

function asobj(makes){
    makes.name="Ahmad"
    makes.age=22
}
asobj(makes);
console.log(makes.name)


