const events = require('events')
const  Events = new events.EventEmitter()

Events.on('start' , ()=>{
    console.log("Event is Trigered")
})


Events.emit('start')
 