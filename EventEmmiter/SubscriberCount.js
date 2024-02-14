// Subscriber Count 
function eventTrigrred(){
const events = require('events')
const Events = new events.EventEmitter()
     
    Events.on('subscribe' , (count)=>{

         
        console.log("Subscriber count is  : " + count)
    })
  
 
 Events.emit('subscribe' , 1)
 
}

eventTrigrred()