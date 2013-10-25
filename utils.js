// Cache client-hint string globally, backed by LocalStorage
var key = 'ClientHints.value';
var clientHint = undefined;

// Listen to new values being written to localstorage
// Used for caching and to keep background process in sync
window.addEventListener('storage', onStorageEvent, false);

function onStorageEvent(event) {
  if(event.key == key) {
    clientHint = JSON.parse(event.newValue);
  }
  console.dir('saved new CH value: ' + clientHint);
}

function getHints() {
  if(clientHint === undefined) {
    clientHint = getCH();
  }

  if(clientHint === null) {
    setCH(getDeviceHints());
  }

  var hints = [];
  for (var hint in clientHint['ch']) {
    hints.push({
       name: 'CH-' + hint.toUpperCase(),
      value: clientHint['ch'][hint]
    })
  }

  return hints;
}

function getCH() {
  return JSON.parse(localStorage.getItem(key));
}

function setCH(obj) {
  clientHint = obj;
  localStorage.setItem(key, JSON.stringify(obj));
}

function getDeviceHints() {
  return({
    title: 'This device',
    ch: {
      dpr: window.devicePixelRatio.toPrecision(2)
    }
  });
}
