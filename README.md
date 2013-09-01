Client-Hints
============

**Work In Progress**

Chrome plugin to add Client-Hints HTTP header, for more on Client-Hints see http://tools.ietf.org/html/draft-grigorik-http-client-hints-00

Client-Hints is a proposed way for the browser to inform the server about certain client properties, for now device height, device width and device pixel ratio, with the aim that the server can deliver appropriate assets.

No browser currently supports the CH: header, so this plugin enables the header to be set in Chrome so I can experiment with it.


#Installation

Clone the respository and  from Chrome's Extension Page, choose *Load Unpacked Extension*.

- The hint values can be changed by editing defaults.js
- [Example nginx server config](https://gist.github.com/igrigorik/6372614) to serve images based on DPR hint in CH


#TODO

- Should extension also resize the browser to the appropriate dimensions (obviously can't do anything about display density)?
- Clean up storage / caching code
- Check the values in defaults.js
- Update icon

#Credits

Icon used comes form the Entypo icon font set http://www.entypo.com/ and is licensed under Creative Commons

