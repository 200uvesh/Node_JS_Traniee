// Handle HTTP requests


const http = require("http")
const data = {
    message: "Aryanagar" , 
    name : "Uvesh"
    , 
}
const app = http.createServer((req , res)=>{
    if(req.url=='/'){
        res.write("<html><body><p>This is home Page.</p></body></html>")
        res.write(JSON.stringify(data))
     
    }
    if(req.url=='/student'){
        res.write("<html><body><p>This is Student Page.</p></body></html>")
        
    if(req.url=='/admin'){
        // res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("<html><body><p>This is Admin Page.</p></body></html>")
         
    }
   

    }
    
});

const PORT = 6555;
app.listen(PORT , ()=>{
    console.log(`Server is created at http://localhost:${PORT}`)
})


