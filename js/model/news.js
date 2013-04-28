function News(idIn, titleIn, shortTextIn, longTextIn, pictureBase64In) {
	this.id = idIn;
	this.title = titleIn;
	this.shortText = shortTextIn;
	this.longText = longTextIn;
	this.pictureBase64 = pictureBase64In;
}

function NewsReturn(messageIn, newsItemsIn, statusIn) {
	this.message = messageIn;
	this.newsItems = newsItemsIn;
	this.status = statusIn;
}