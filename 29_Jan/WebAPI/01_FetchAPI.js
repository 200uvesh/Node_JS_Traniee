const url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
// fetch(url)
//  .then((x)=>{
//     x.text()
//  })
//  .then((y)=>{
//     document.getElementById("ide").innerHTML=y
//  })

 const data = fetch(url)
  const datas = JSON.parse(data)  // Parse is used for convert string to JSON formate 
  console.log(datas)
  