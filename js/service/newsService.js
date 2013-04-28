function NewsService() {

	this.getNews = function () {
        console.log("Handler for NewsService.GetNews called." + variables.LoginDone);
		var newsReturn;
		
		if( variables.LoginDone ) {
			console.log("props.newsUrl: " + props.newsUrl);
			//console.log("props.requestJsonAcceptHeader: " + props.requestJsonAcceptHeader);

			return $.ajax({
				url: props.newsUrl,
				headers: { "Accept" : "application/json" }
			})
			.fail( function ( xhr, status, error ) {
				console.log("GetNews error: " + error);
				console.log("GetNews status: " + status);

				newsReturn = new NewsReturn( "New retrieving failed" + error, null, AJAX_STATUS.ERROR );
			})
			.done( function ( data, status, xhr ) {
				var newsItems = [];

				console.log("Handler for ProcessNews called.");
				console.log("status: " + status);
				console.log("data.d: " + data.d.results.length);

				$(data.d.results).each(function (index, news) {
					var news = new News(news.Id, news.Title, news.ShortText, news.LongText, news.PictureBase64);
					newsItems.push(news);
				});

				console.log("newsItems.length: " + newsItems.length);
				//TODO: save data to file
			
				newsReturn = new NewsReturn( "New retrieving successfull", newsItems, AJAX_STATUS.SUCCESS );
			})
			.pipe( function ( ) {
				console.log("pipe called.");
				return newsReturn;
			});
		} else {
			//TODO: get data from file

			var deferred = $.Deferred();
			return deferred.resolve( new NewsReturn( "Login not done", null, AJAX_STATUS.ERROR ) );
		}
	};
}
