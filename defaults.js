// Not convinced the values in here are correct see
// http://tools.ietf.org/html/draft-grigorik-http-client-hints-00

var defaults = [ 
	{
		title: 'iPhone 4S (landscape)',
		ch: {
			dh: 960,
			dw: 640,
			dpr: 2
		}
	},
	{
		title: 'iPhone 4S (portrait)',
		ch: {
			dh: 640,
			dw: 960,
			dpr: 2
		}
	},
	{
		title: 'iPad 2 (landscape)',
		ch: {
			dh: 1024,
			dw: 768,
			dpr: 1
		}
	},
	{
		title: 'iPad 2 (portrait)',
		ch: {
			dh: 768,
			dw: 1024,
			dpr: 1
		}
	},	
	{
		title: 'Nexus 4 (portrait)',
		ch: {
			dh: 1280,
			dw: 768,
			dpr: 2
		}
	},
];