function NewsController($scope) {
	var newsService = new NewsService();
	var localSettingsService = new settingsService();
	$scope.news = {
		items : [],
		selectedItem : null
	}

	//$scope.$on("LOGIN_DONE", function(event, message){
	//	console.log("Handler for loginDone.loginDone called. " + message);
	//	$('#btnGet').click();
	//});

	$("#filesLoadedDone").on('filesLoadedDoneEvent', function() {
		console.log("On filesLoadedDoneEventNews called.");
	
		$scope.$apply( function( scope ) {
			scope.news.items = variables.News;
		});
	});
	
	$scope.getNews = function () {
        console.log("Handler for GetNews called.");

		newsService.getNews()
		.done( function ( newsReturn ) {
			console.log("Handler for ProcessNews called.");
			
			$scope.$apply( function( scope ) {
				if( newsReturn.status == AJAX_STATUS.SUCCESS ) {
					scope.news.items = newsReturn.newsItems;
					variables.News = newsReturn.newsItems;

					localSettingsService.writeSettings();
				}
			});

			navigator.notification.alert(
				newsReturn.message,
				function (buttonIndex) { },              // callback to invoke with index of button pressed
				'Get news',            // title
				'OK'          // buttonLabels
			);
		});
	}
	
	$scope.getDetail = function (id) {
        console.log("Handler for NewsController.getDetail called. Id: " + id);

		var newsItem = null;
		$($scope.news.items).each(function (index, news) {
			if( news.id == id ) {
				newsItem = news;
			}
		});
        console.log("selected item: " + newsItem.id);

		//$("#newsDetailPic").attr("src", "data:image/jpg;base64," + newsItem.pictureBase64);
		$("#newsDetailTitle").html(newsItem.title);
		$("#newsDetailShortText").html(newsItem.shortText);
		$("#newsDetailLongText").html(newsItem.longText);

		//$scope.$apply( function( scope ) {
		//	console.log("selected item on scope: ");
			$scope.news.selectedItem = newsItem;
		//	console.log("selected item on scope: " + scope.news.selectedItem.id);
		//});

		$scope.$apply( function( scope ) {
			console.log("i'm in $apply");
		});
        console.log("selected item on $scope: " + $scope.news.selectedItem.id);

		//window.location = "#newsItem";
		$.mobile.changePage( $("#newsItem") );
	}
}