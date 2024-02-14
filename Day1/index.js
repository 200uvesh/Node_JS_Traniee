 
 

// On Click
var temp;

 document.getElementById("btn-start").addEventListener('click' , ()=>{
    function handler() {  
        console.log("HIs")
        text.innerText= Math.floor(Math.random()*16)
        console.log("strt-btn is ok")
     
    
    }

     temp= setInterval(handler , 1000)
})



// On Stop 
 document.getElementById("stop-btn").addEventListener('click'  , ()=>{
    console.log(temp)
        clearInterval(temp)
    })
     

 
 
 

 
 
 

 
 
 
 