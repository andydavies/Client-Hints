chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {

  	var ch = getCH();

  	var header = {
  		name: 'CH', 
  		value: ch
  	}
    details.requestHeaders.push(header);

    return {requestHeaders: details.requestHeaders};
  },
  {urls: []},
  ['requestHeaders', 'blocking']
);
