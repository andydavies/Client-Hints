document.addEventListener('DOMContentLoaded', function () {
  initialize();

  var elements = document.querySelectorAll('.menu-item');
  for(var n = 0; n < elements.length; n++) {
    elements[n].addEventListener('click', onClick);
  }
});

function onClick(event) {
  // Clear currently selected entry
  var selected = document.querySelector('.selected');
  if(selected !== null) {
    selected.classList.remove('selected');
  }

  // Set CH based on selected node
  var element = event.currentTarget;
  element.classList.add('selected');

  var title = element.querySelector('.title').innerText;
  setCH(defaults.filter(function(v) {
    return v.title === title;
  })[0]);
}

function serialize(obj) {
  var description =  '';
  for (var hint in obj) {
    description += (hint + ": " + obj[hint]);
  }

  return description;
}

function initialize() {
  // Add current device to list of possible CHs
  defaults.push(getDeviceHints());

  // Get current CH choice
  var currentCH = getCH();

  // Build the menu
  var menu = document.getElementById('menu');
  if(menu !== undefined) {
    for (var idx in defaults) {
      element = defaults[idx];

      var node = document.createElement('div');
      node.classList.add('menu-item');

      if (element.title == currentCH.title) {
        node.classList.add('selected');
      };

      var html = '<div class="settings">' + serialize(element.ch) + '</div>' +
                 '<div class="title">' + element.title + '</div>';

      node.innerHTML = html;
      menu.appendChild(node);
    }
  }
}
