var reg_token;

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
    alert('ondevice ready');
	
	
	var pushNotification = window.plugins.pushNotification;
	pushNotification.register(successHandler, errorHandler,{"senderID":"825294821866","ecb":"onNotificationGCM"});
   
	
	
}

// result contains any message sent from the plugin call
function successHandler(result) {
    alert('Callback Success! Result = '+result)
}

function errorHandler(error) {
    alert(error);
}

function onNotificationGCM(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    alert('registration id = '+e.regid);
					 window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
					 reg_token = e.regid;
					
					
                }
            break;
 
            case 'message':
              // this is the actual push notification. its format depends on the data model from the push server
              alert('message = '+e.message+' msgcnt = '+e.msgcnt);
            break;
 
            case 'error':
              alert('GCM error = '+e.msg);
            break;
 
            default:
              alert('An unknown GCM event has occurred');
              break;
        }
    }






function gotFS(fileSystem) {
    alert('gotfs');
    fileSystem.root.getFile("gcmtoken.txt", {create: true, exclusive: false}, gotFileEntry, fail);
}

function gotFileEntry(fileEntry) {
    alert('gotFileEntry');
    fileEntry.createWriter(gotFileWriter, fail);
}

function gotFileWriter(writer) {
    alert('gotFileWriter');

    writer.write(reg_token );
}

function fail(error) {
    console.log(error.code);
}


