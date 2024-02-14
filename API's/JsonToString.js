var data = [
    {
        fname : "Uvesh" , 
        lname : "ahmed",
        mno:  905080 , 

    } ,
    {
        fname : "Ashab" , 
        lname: "ahmed" , 
        mno : 805090,

    }
]

// console.log(data)
// console.log(data[1].fname)


// converting the data JSON form to String

var rawData = JSON.stringify(data)
// console.log(rawData)

// convert String data into JSON formate but the string is in standard way

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
console.log(text[2])

var jsonData = JSON.parse(text) 
console.log(jsonData.name)



// Accesing the value from key of a JSON data

















