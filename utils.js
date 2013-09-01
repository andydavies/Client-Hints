// Cache client-hint string globally, backed by LocalStorage

var key = 'ClientHints.value';

var clientHint = undefined;

// Listen to new values being written to localstorage
// Used for caching and to keep background process in sync
window.addEventListener('storage', onStorageEvent, false);

function onStorageEvent(event) {
	if(event.key == key) {
		clientHint = event.newValue;
	}
	console.log(clientHint);
}

function getCH() {
	if(clientHint === undefined) {
		clientHint = localStorage.getItem(key);
	}
	if(clientHint === null) {
		var thisDevice = getDeviceHints();
		clientHint = serialize(thisDevice.ch);
		setCH(clientHint);
	}
	return clientHint;
}

function setCH(ch) {
	localStorage.setItem(key, ch);
}

function serialize(obj) {
   var str = [];
   for(var p in obj){
       if (obj.hasOwnProperty(p)) {
           str.push(p + '=' + obj[p]);
       }
   }
   return str.join(', ');
}

function getDeviceHints() {
	return({
		title: 'This device',
		ch: {
			dh: screen.height,
			dw: screen.width,
			dpr: window.devicePixelRatio
		}
	});
}

