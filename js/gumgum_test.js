var client_id = 1234567
var safetyUrl = "http://10.16.236.188:8000/safety?u=" + document.location + "&cid=" + client_id

var safetyJson = $.ajax({
  	type: 'GET',
  	url: safetyUrl,
  	async:false
	});

console.log(safetyJson);
//safetyJson = JSON.parse(safetyJson.responseText);
