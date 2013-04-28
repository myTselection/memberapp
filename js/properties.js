function Properties() {
	this.baseUrl = "https://partners.logica.com/workspace/820311/memberapp";
	this.baseFeedUrl = this.baseUrl + "/_vti_bin/listdata.svc";
	this.newsUrl = this.baseFeedUrl + "/MemberNews";
	this.leadUrl = this.baseFeedUrl + "/MemberLeads";
	//newsUrl = "https://partners.logica.com/workspace/820311/memberapp/_vti_bin/listdata.svc/MemberNews";
	this.loginUrl = "https://partners.logica.com/uniquesig1a2534a1eb56796c8204da5e414295d6/uniquesig0/InternalSite/Validate.asp";
	this.loginData1 = "user_name="
	this.loginData2 = "&password="
	this.loginData3 = "&repository=EXTERNALINFRA&site_name=partnersportal&secure=1&resource_id=7E229277F6B94B65B4CC3E596074362D&login_type=2";
	//this.usrMask = "$$$USER_NAME$$$";
	//this.pwdMask = "$$$PASSWORD$$$";
	//this.loginData = "user_name=" + this.usrMask + "&password=" + this.pwdMask + "&repository=EXTERNALINFRA&site_name=partnersportal&secure=1&resource_id=7E229277F6B94B65B4CC3E596074362D&login_type=2";
	//this.loginData = "user_name=GROUPINFRA%5Cstuyveri&password=Thursday%3F2&repository=EXTERNALINFRA&site_name=partnersportal&secure=1&resource_id=7E229277F6B94B65B4CC3E596074362D&login_type=2";
	//this.requestJsonAcceptHeader = { "Accept" : "application/json" };
	this.jsonContentType = "application/json";
	this.ajaxPost = "POST";
	this.fileName = "CgiMemberAppData.json";
}

var props = new Properties();