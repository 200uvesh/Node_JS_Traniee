//Pro-1
// Create Promices
const Promices01 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Task1 is Ongoing")

    } , 1000)

})
// Access The Promices
Promices01.then(()=>{
    console.log("Task1 is Completed ")  //  then is associated  with resolve and catch is associated with reject
    // and not execute "Task is Coplete" because  resolve is not call is Promices
})

 



//Pro-2
const Promices02 = new Promise(function(resolve , reject){
    
    setTimeout(function(){
        resolve()
        console.log("Task2 is Ongoing")
    } , 1000)
})
Promices02.then(()=>{
    console.log("Task2 is Completed ")  
    //  then is associated  with resolve and catch is associated with reject
     
})



//Pro-3
const Promices03 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log("Task3 is Ongoing")
        resolve({
            name : "Uvesh"
            , age : 22
        })

    },1000)

})

Promices03.then((data)=>{
    console.log("Task3 is Complete")
    console.log(data)
})
 




//Pro-4
const Promices04 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let check = false
        if(!check){
            console.log("Task4 is Ongoing")
            resolve({
                name : "Uvesh"
                , age : 22
            })
        }

        reject("Something Went Wrong! ")
        }
            )
    },1000)

 

Promices04
 .then((data)=>{
    console.log("Task4 is Complete")
    console.log(data)
 })
 .catch()
 



// Pro-5
const Promices05 = new Promise(function(resolve , reject){
    setTimeout(()=>{
        let check = true
        if(!check){
            console.log("Task5 is Ongoing")
            resolve({
                name : "Uvesh"
                , age : 22
            })
        }

        reject("Something Went Wrong! ")
        }
            )
    },1000)

 
Promices05
 .then((data)=>{
    console.log("Task5 is Complete")
    console.log(data)
 })
 .catch()
 



