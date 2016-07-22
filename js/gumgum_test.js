var client_id = 1
var safetyUrl = "http://54.90.218.71:8000/safety?u=" + document.location + "&cid=" + client_id

var safetyJson = $.ajax({
  	type: 'GET',
  	url: safetyUrl,
  	async:false
	});

console.log(safetyJson);
//safetyJson = JSON.parse(safetyJson.responseText);
