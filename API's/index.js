 var url = "https://jsonplaceholder.typicode.com/todos/1"
let promice = fetch(url)
  .then(()=>{
    console.log("Error")
  })
  .catch(()=>{
    console.log("Someting went wrong")
  })
var obj = JSON.parse(data);
console.log(obj)

//The sessionStorage Object
// window.localStorage


