// const module = require("module")
// const result = require("result");
//  console.log(result(4,9))
 
// Concept of Class and methods
class Car {
    constructor(Model , Price){  // msut
        this.Model=Model
        this.Price=Price;
        
        console.log("Hii I am from constructor")
    }

   features(){
    console.log("I am in class method")
   }
 }

 var audi = new Car("audi" , 200000 ); // Params 
console.log( audi.Model
    ) 
    console.log(audi.Price)
    audi.features()

    console.log(result(2,5))
