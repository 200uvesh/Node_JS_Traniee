
// Inheritance;
class Heros{
    // constructor(name){
    //   this.name=name
    // }
    powers(){
      console.log("Natural Powers")
    }
      
  }
  
  
  
class SuperHeros extends Heros{
    constructor(name){
        super() // For accesing the Property of Parent Class
        this.name=name
    }
    superPowers(){
        console.log("Super Natural poers")
    }

}


const obj = new SuperHeros("Spider-Man")
obj.powers()
obj.superPowers()
