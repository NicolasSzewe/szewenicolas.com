var client_id = 1
var tag_id = 58694023
var country_code = "US"
var region = "CA"
var city = "Pasadena"
var browser_type = 1
var page_url = encodeURIComponent(document.location)

var safetyUrl = "http://54.90.218.71:8000/safety?u=" + page_url + "&cid=" + client_id + "&tid=" + tag_id 
+ "&cc=" + country_code + "&r=" + region + "&c=" + city + "&b=" + browser_type

var safetyJson = $.ajax({
  	type: 'GET',
  	url: safetyUrl,
  	async:false
	});

console.log(safetyJson);
//safetyJson = JSON.parse(safetyJson.responseText);

