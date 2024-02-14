     // fetch is nod defined => soln is to update the Version of nodeJS
 var url = "https://api.example.com/data";
 fetch(url)
    .then(Response=>{
        if(!Response){
            console.log("Some Problem in fetching the data")
        }
    })
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log("Something went Wrong ")
    })
 


        

 
    

    

   


