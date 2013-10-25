chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {

    var hints = getHints();
    for (var idx in hints) {
      details.requestHeaders.push(hints[idx]);
    }

    return {requestHeaders: details.requestHeaders};
  },
  {urls: []},
  ['requestHeaders', 'blocking']
);
