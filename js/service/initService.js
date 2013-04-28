document.addEventListener("deviceready", onDeviceReadyForInit, false);

function onDeviceReadyForInit() {
	console.log("onDeviceReadyForInit called.");
	
	$("div[data-role='page']").bind("swipeleft", function() {
		changePage($(this), "data-next");
	});
	
	$("div[data-role='page']").bind("swiperight", function() {
		changePage($(this), "data-prev");
	});

	console.log("onDeviceReadyForInit Done.");
}	

function changePage(theDiv, attrName) {
	var strPage =  theDiv.attr(attrName);
	if( strPage != "null" ) {
		var page = $("#" +  strPage);
		$.mobile.changePage(page);
	}
}