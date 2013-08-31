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

	var settings = element.querySelector('.settings');
    var ch = settings.innerText;
    setCH(ch);
}

function initialize()
{
// Add current device to list of possible CHs
	var thisDevice = getDeviceHints();
	defaults.push(thisDevice);

// Get current CH choice 
	var currentCH = getCH();

// Build the menu
	var menu = document.getElementById('menu');

	if(menu !== undefined) {

		for(n = 0; n < defaults.length; n++) {
			
			element = defaults[n];

			var node = document.createElement('div');
			node.classList.add('menu-item'); 

			var ch = serialize(element.ch);
			if (ch === currentCH) {
				node.classList.add('selected');
			};

			var html = 	'<div class="settings">' + ch + '</div>' +
						'<div class="title">' + element.title + '</div>';
					
			node.innerHTML = html;

			menu.appendChild(node);
		}
	}
}