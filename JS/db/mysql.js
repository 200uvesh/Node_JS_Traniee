// create mysql collection

const mysql = require('mysql2')  
const db = mysql.CreateConnection( 
    {

     host : 'localhost', 
     port : 5000 ,  
     username : "uvesh" , 
     password : "@1233" , 
     databasae : "myDB"
    }
)

db.connect((err)=>{
    if(err){
        console.error('Something went wrong'  ,  err)
    }
    console.log("Connected to DB sucessfully")

})

// To cLose the mysql DB connection
db.end();



