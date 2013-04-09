﻿
function LeadController($scope) {

	var leadService = new LeadService();
	
	$scope.addLead = function () {
        console.log("Handler for LeadController.addLead called.");
		var lead = new Lead($scope.lead.title, $scope.lead.col1);

		leadService.addLead(lead)
		.done( function ( addLeadReturn ) {
			console.log("Handler for addLead.done called: " + addLeadReturn.status);
		
			$scope.$apply( function( scope ) {
				scope.lead.title = "";
				scope.lead.col1 = "";
			});

			navigator.notification.alert(
				addLeadReturn.message,  // message
				function (buttonIndex) { },              // callback to invoke with index of button pressed
				'Leads',            // title
				'OK'          // buttonLabels
			);
		});
	}
}
