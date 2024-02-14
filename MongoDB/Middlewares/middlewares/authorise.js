const isVerify =  function  (req , res , next) {
    const age = req.query.age;
    if(!age){
        res.send(`Please enter  your "age" First`)
    }
    else{
        if(age<18){
             
            res.send("You Are Underage , Permission Denied")
        }
        else{
            next()
        }
    }   
 }

module.exports=isVerify
 