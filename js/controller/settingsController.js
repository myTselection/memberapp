
function SettingsController($scope) {
	var localSettingsService = new settingsService();

	
	$("#filesLoadedDone").on('filesLoadedDoneEvent', function() {
		console.log("On filesLoadedDoneEvent called in SettingsController.");
	
		if( variables.Settings != null ) {
			$scope.setting_user = variables.Settings.userName;
			$scope.setting_password = variables.Settings.password;;
		}
	});
	
	$scope.updateSettings = function () {
        console.log("Handler for settingsController.updateSettings called.");
		
		var settings = new Settings($scope.setting_user, $scope.setting_password);
		variables.Settings = settings;
		localSettingsService.writeSettings();

		navigator.notification.alert(
			"Settigns updated!",
			function (buttonIndex) { },              // callback to invoke with index of button pressed
			'Settings',            // title
			'OK'          // buttonLabels
		);
	}
}
