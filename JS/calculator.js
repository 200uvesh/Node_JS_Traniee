var FirstNumber = document.getElementById("first-number")
var SecondNumber = document.getElementById("second-number")
 var value = document.getElementById("value")
function multiply(){
    var first = FirstNumber.value
    var Second = SecondNumber.value
   var resultMultiply = (first)*(Second);
    console.log(resultMultiply)
    value.innerHTML=resultMultiply
}


function divide(){
    var first = FirstNumber.value;
    var second = SecondNumber.value;
   var resultDivide= (first)/(second);
    console.log(resultDivide)
    value.innerHTML=resultDivide;
}



