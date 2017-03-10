/*
* Given the data segment "preview", create functions that satisfy the function
* descriptions. There are a total of 4 functions in this file
*/
var preview = {
	images: [
		{
		source: {
			url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?s=8598544207619a3020f808583e28b4c4",
			width: 256,
			height: 256
		},
		resolutions: [
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=108&amp;s=19f81c159c3852ca87417e2d2edde0b0",
				width: 108,
				height: 108
			},
			{
				url: "https://i.redditmedia.com/4xFezp8qybWigpg6WN5gkAuI39AIPdv4jdHijFU4_ns.jpg?fit=crop&amp;crop=faces%2Centropy&amp;arh=2&amp;w=216&amp;s=2b071d25ede17deadf68cb9b7db13230",
				width: 216,
				height: 216
			}
		],
		variants: { },
		id: "KR8oJeB8ComfEPX0bkCe_p2L73IOmk0sTCsyNlfXSNg"
		}
	],
	enabled: false
}

/*
* Function that retrieves the value from the key "enabled"
*, stores the value in a string called "isEnabled", and returns the created 
* variable
*
* Note 		You must use the method "typeof" to ensure the return value is of type 
* 			string
* Return 	isEnabled (string)
*/
function isItEnabled(data){
	// console.log(data);
	var isEnabled="";
	for (var key in data){
		if(key==="enabled"){
			isEnabled+=data[key];
		}
	}
	return isEnabled;
}
isItEnabled(preview);
/*
* Function that changes the value from the key "enabled" to true, and returns 
* the value from the key "enabled"
*
* Return 	value from key enabled (boolean)
*/ 
function change(data){
	for (var key in data){
		if(key==="enabled"){
			data[key]=true;
		}
	}
}
change(preview);
/*
* Function that retrieves the urls only from the key "resolutions" 
* , stores the values in an array called "urls", and returns the created array
* 
* Return 	urls (array)
*/
function urlThing(data){
	var urls = [];
	for (var key in data){
		if(key==="images"){
			for (var i = 0; i < data[key].length; i++) {
				for (var innerKey in data[key][i]){
					if(Array.isArray(data[key][i][innerKey])){
						for (var n = 0; n < data[key][i][innerKey].length; n++) {
							for (var urlKey in data[key][i][innerKey][n]){
								if(urlKey==="url"){
									urls.push(data[key][i][innerKey][n][urlKey]);
								}
							}
						}
					}
					else{
						for (var urlKey in data[key][i][innerKey]){
							if(urlKey==="url"){
								urls.push(data[key][i][innerKey][urlKey]);
							}
						}
					}
				}
			}
		}
	}
	console.log(urls);
	return urls;
}
urlThing(preview);
/*
* Function that retrieves the first nested key and value pairing
* from the values of "images", stores them in a new object called 
* "allKeyValuePairs", and returns the created object
*
* Format	var allKeyValuePairs = {
*				keys: [],
*				values: []
*			};
*
* Return 	allKeyValuePairs (object)
*/
var allKeyValuePairs = {
	keys:[],
	values: []
};

function pair(data){
	var keysArr, valuesArry = [];
	for (var key in data){
		if(key==="images"){
			for (var i = 0; i < data[key].length; i++) {
				for (var innerKey in data[key][i]){
					keys.push(innerKey);
					values.push(data[key][i][innerKey]);
					}
				}
			}
		}
	}
	allKeyValuePairs.keys = keysArr;
	allKeyValuePairs.values = valuesArr;
}
pair(preview);
console.log(allKeyValuePairs);