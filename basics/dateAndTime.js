//  Display Current Time and Date 

var date = new Date();
var day = date.getDay();  // it return number of day not string 
var daysName = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday"  , "Friday" , "Saturday"  ];
console.log("Today is " + daysName[day]);

var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()

// Logic for AM / PM 
var zone;
if(hours>=12){
    zone ="PM"
}
else{
    zone="AM"
}

console.log(`Time is ${hours}:${minutes}:${seconds} ${zone}`)
