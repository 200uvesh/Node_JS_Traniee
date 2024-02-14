// Elements
const container1= document.getElementById("container1");
const container2 = document.getElementById("container2");


function convert() {
         
 

    let jsonData = [
       {
          name: "Uvesh",
          age: "22",
          city: "Muradnagar" , 
          add: "xyz" , 
          pho: 99058015786,
          Group : "B"
       
         
       }
    ];
    

    col = Object.keys(jsonData[0])
    col.forEach(element => {
        let index = document.createElement("p")
        index.innerHTML=element
        container1.appendChild(index)
    });

    col = Object.values(jsonData[0])
    col.forEach(element => {
        let index = document.createElement("p")
        index.innerHTML=element
        container2.appendChild(index)
    });
}
     
 