function GetFromSharePoint(url) {
	return $.ajax({
		url: url,
		headers: { "Accept" : "application/json" }
	});
}