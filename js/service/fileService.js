document.addEventListener("deviceready", onDeviceReadyForFile, false);

function onDeviceReadyForFile() {
	console.log("onDeviceReadyForFile called.");
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
	console.log("gotFS called.");
	variables.FileSystem = fileSystem;
	variables.FileSystem.root.getFile(props.fileName, {create: true, exclusive: false}, gotFileEntry, fail);
}

//Settings file section
function gotFileEntry(fileEntry) {
	console.log("gotFileEntry called.");
	fileEntry.createWriter(gotFileWriter, fail);
	fileEntry.file(gotFile, fail);
}

function gotFileWriter(writer) {
	console.log("gotFileWriter called.");
	variables.FileWriter = writer;
	variables.FileWriter.onerror = fail;
}

function gotFile(file) {
	console.log("gotFile called.");
	var reader = new FileReader();
	reader.onloadend = function(evt) {
		console.log("Read File as text");

		var data = evt.target.result;

		if( data != "" ) {
			var dataObj = angular.fromJson(evt.target.result);
			console.log("data0: " + data);
			console.log("data1: " + angular.toJson(data));
			console.log("data2: " + dataObj.settings);
			//angular.fromJson(settingsString)
			variables.Settings = dataObj.settings;
			console.log("variables.Settings: " + angular.toJson(variables.Settings));
			variables.News = dataObj.news;

			//launch event
			$("#filesLoadedDone").trigger('filesLoadedDoneEvent');
		}
	};
	reader.readAsText(file);
}

function doWrite() {
	console.log("doWrite called");

	var fileData = new FileData(variables.Settings, variables.News);

	variables.FileWriter.truncate(0);
	var data = angular.toJson(fileData)
	console.log("data: " + data);
	variables.FileWriter.write( data );

	console.log("doWrite done");
	//TODO: callback for nice update on screen
}





function fail(evt) {
	//TODO: alert or something like that
    console.log(evt.target.error.code);
}