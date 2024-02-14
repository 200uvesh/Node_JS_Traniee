// class CheckStatic{
//     constructor(){
//     }
//     static display(){
//         console.log("I am from Static ")
//     }
// }
//  // make obj of Class 

//  const obj = new CheckStatic();
//  obj.display() //   Error : Obj i s not defianed

//  // to access the static object 

 class UnlockStatic{
    constructor(name){
        this.name= name
    }
     static displays(x){
        console.log("I ma from static function"+ x.name)

     }
 }


 const obj2= new UnlockStatic("Uvesh")
 UnlockStatic.displays(obj2)  // this method to access the static values also 
  