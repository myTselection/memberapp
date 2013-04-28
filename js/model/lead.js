function Lead(titleIn, clientIn, industryIn, contactIn, descriptionIn, leadTypeIn, creatorUserNameIn) {
	this.Title = titleIn;
	this.Client = clientIn;
	this.Industry = industryIn;
	this.Contact = contactIn;
	this.Description = descriptionIn;
	this.LeadType = leadTypeIn;
	this.CreatorUserName = creatorUserNameIn;
}

function AddLeadReturn(messageIn, statusIn) {
	this.message = messageIn;
	this.status = statusIn;
}