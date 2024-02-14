// Create a Promices
function getUser(){
return new Promise((resolve , reject)=>{
    setTimeout(  ()=>{
        resolve([
        {
              name : "John " , 
              age : 67
        } , 
        {
            name : "Sinha " , 
              age : 76
        }
    ])
 reject(()=>{
    console.log("error")
 })
    }
 , 2000)
    
       
})}



// Access the Promices
 const users = getUser()
 users.then((data)=>{
    console.log(data)
 })
  users.catch((err)=>{
    console.log(err)
  })