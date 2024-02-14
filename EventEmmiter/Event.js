const event = require('events')
const emit = new event.EventEmitter()


emit.on('data-sending' , (data)=>{
    console.log(data)
 })


 emit.emit('data-sending'  , "Event Emmit sucesssfully")



 

  

 
 

