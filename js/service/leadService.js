function LeadService() {

	this.addLead = function (lead) {
        console.log("Handler for LeadService.addLead called.");
		var addLeadReturn;
		var body = angular.toJson(lead);
		
		console.log("LeadService body: " + body);
		
		if( variables.LoginDone ) {
			// Ajax call
			return $.ajax({
				type: props.ajaxPost,
				contentType: props.jsonContentType,
				url: props.leadUrl,
				data: body
			})
			.fail( function ( xhr, status, error ) {
				console.log("LeadService error: " + error);
				console.log("LeadService status: " + status);

				addLeadReturn = new AddLeadReturn( "Lead creation failed: " + error, AJAX_STATUS.ERROR );
			})
			.done( function ( data, status, xhr ) {
			
				console.log("LeadService.addLead success.");
			
				addLeadReturn = new AddLeadReturn( "Lead creation successfull! ", AJAX_STATUS.SUCCESS );
			})
			.pipe( function ( ) {
				console.log("LeadService.addLead pipe called.");
				return addLeadReturn;
			});
		} else {
			var deferred = $.Deferred();
			return deferred.resolve( new AddLeadReturn( "Login not done", null, AJAX_STATUS.ERROR ) );
		}
	};
}