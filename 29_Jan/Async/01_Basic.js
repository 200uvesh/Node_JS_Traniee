 // SetTimeout
 const id = document.getElementById("index")
function callback(){
     id.innerText="Hi  I come here after 3 second"
}
function click(){
    setTimeout( callback , 3000);

}  
 
click();

function fun(){
     var date = new Date();
     date.getDate();
     date.getDay()
}

function  displayDate(){
    setInterval(fun , 3000)
}

