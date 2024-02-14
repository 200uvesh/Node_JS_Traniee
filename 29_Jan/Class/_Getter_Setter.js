class ITcompany {
    constructor(name){
        this.name=name
    }
     get companyName(){
        this.name
     }
     set companyName(_setname){
        this.name= this._setname
     }

}

const obj = new ITcompany("Quy-Tech")
 