// JSON data formate
var data ={ 
	"results": [ 
		{ 
			"gender": "female", 
			"name": { 
				"title": "Miss", 
				"first": "Nina", 
				"last": "Simmmons"
			}, 
			"location": { 
				"street": { 
					"number": 970, 
					"name": "Eason Rd"
				}, 
				"city": "Fullerton", 
				"state": "Wyoming", 
				"country": "United States", 
				"postcode": 57089, 
				"coordinates": { 
					"latitude": "83.1807", 
					"longitude": "104.7170"
				}, 
				"timezone": { 
					"offset": "+8:00", 
					"description": 
		"Beijing, Perth, Singapore, Hong Kong"
				} 
			}, 
			"email": "nina.simmmons@example.com", 
			"login": { 
				"uuid": "bd0d135f-84df-4102-aa4f-5baaa41baf5c", 
				"username": "yellowfrog722", 
				"password": "dawg", 
				"salt": "q28gdiyN", 
				"md5": "291987daea22bb91775226574925b271", 
				"sha1": "a0463a26ea5c2ff4f3ad498fd01c5994926e5021", 
				"sha256": 
                          "6583eb74ca08bfac50b3b29aa52c9f02ea5d9d017fef0e5a5a6fae4f5225f928"
			}, 
			"dob": { 
				"date": "1980-11-01T23:10:05.403Z", 
				"age": 40 
			}, 
			"registered": { 
				"date": "2013-04-02T02:26:52.904Z", 
				"age": 7 
			}, 
			"phone": "(216)-693-7015", 
			"cell": "(501)-534-9413", 
			"id": { 
				"name": "SSN", 
				"value": "847-09-2973"
			}, 
			"picture": { 
				"large": 
"https://randomuser.me/api/portraits/women/60.jpg", 
				"medium": 
"https://randomuser.me/api/portraits/med/women/60.jpg", 
				"thumbnail": 
"https://randomuser.me/api/portraits/thumb/women/60.jpg"
			}, 
			"nat": "US"
		} 
	] , 
	"resultse": [ 
		{ 
			"gender": "female", 
			"name": { 
				"title": "Miss", 
				"first": "Nina", 
				"last": "Simmmons"
			}, 
			"location": { 
				"street": { 
					"number": 970, 
					"name": "Eason Rd"
				}, 
				"city": "Fullerton", 
				"state": "Wyoming", 
				"country": "United States", 
				"postcode": 57089, 
				"coordinates": { 
					"latitude": "83.1807", 
					"longitude": "104.7170"
				}, 
				"timezone": { 
					"offset": "+8:00", 
					"description": 
		"Beijing, Perth, Singapore, Hong Kong"
				} 
			}, 
			"email": "nina.simmmons@example.com", 
			"login": { 
				"uuid": "bd0d135f-84df-4102-aa4f-5baaa41baf5c", 
				"username": "yellowfrog722", 
				"password": "dawg", 
				"salt": "q28gdiyN", 
				"md5": "291987daea22bb91775226574925b271", 
				"sha1": "a0463a26ea5c2ff4f3ad498fd01c5994926e5021", 
				"sha256": 
                          "6583eb74ca08bfac50b3b29aa52c9f02ea5d9d017fef0e5a5a6fae4f5225f928"
			}, 
			"dob": { 
				"date": "1980-11-01T23:10:05.403Z", 
				"age": 40 
			}, 
			"registered": { 
				"date": "2013-04-02T02:26:52.904Z", 
				"age": 7 
			}, 
			"phone": "(216)-693-7015", 
			"cell": "(501)-534-9413", 
			"id": { 
				"name": "SSN", 
				"value": "847-09-2973"
			}, 
			"picture": { 
				"large": 
"https://randomuser.me/api/portraits/women/60.jpg", 
				"medium": 
"https://randomuser.me/api/portraits/med/women/60.jpg", 
				"thumbnail": 
"https://randomuser.me/api/portraits/thumb/women/60.jpg"
			}, 
			"nat": "US"
		}
	]
 }

console.log(data.resultse[0].name.last)      // accesing the data from  JSON object Data . 
var jsonDatas = JSON.stringify(data)
console.log(jsonDatas)

var details = {
    "employees": [
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ] , 
    "company":[
        {"firstName":"John2", "lastName":"Doe2"},
        {"firstName":"Anna2", "lastName":"Smith2"},
        {"firstName":"Peter2", "lastName":"Jones2"}
    ]
    }

console.log(details.employees[0].firstName)    
// Accesing the data From jsonOBJect 



