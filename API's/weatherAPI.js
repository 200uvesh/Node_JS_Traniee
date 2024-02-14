
async function  retriveDatas(URL){
var response = await fetch(URL)
var data = await response.json()
   var obj= JSON.stringify(data)
   console.log(obj)
//   var FirstOBJ =  data
//   console.log(FirstOBJ)
// console.log(data)


}
var URL = "https://api.publicapis.org/entries"
retriveDatas(URL);


 

