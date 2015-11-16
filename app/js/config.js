/* set environment variables for browser */
var browserConfig = {
	envType: "dev"
};

/* configure requirejs */
require.config({
	baseUrl : "/app/js/",
	paths   : {
		// vendor libraries
		"knockout"              : "vendor/knockout-3.3.0",            // http://knockoutjs.com/downloads/
		"jqueryHistoryManager"  : "vendor/jquery.history",            // https://github.com/browserstate/history.js
		"pager"       			: "vendor/pager",                     // https://github.com/finnsson/pagerjs
		"text"                  : "vendor/text",                      // http://requirejs.org/docs/download.html
		"i18n"                  : "vendor/i18n",                      // http://requirejs.org/docs/download.html
		"jquery"                : "vendor/jquery-1.11.3.min",         // https://jquery.com/download/
		"jquery.mockjax"        : "vendor/jquery.mockjax",            // https://github.com/jakerella/jquery-mockjax
		"bootstrap"             : "vendor/bootstrap.min",             // http://getbootstrap.com/getting-started/

		// core view module(s)
		"viewLogin"             : "view/login"
	},
	shim    : {
		"pager": {
			deps : [ "knockout", "jqueryHistoryManager" ]
		}
	},
	urlArgs: "v=1.0.0&cachebust=" +  ( new Date() ).getTime()
});

/* callback based on environment variables */
(function(w) {
	var ls = w.localStorage;
	ls.env = JSON.stringify(browserConfig || {});
	function getProp(p) { return JSON.parse(ls.env)[p] };
	function setProp(p, v) { ls.env[p] = JSON.stringify(v) };

	if(getProp('envType') !== 'dev') {
		window.console.log = function() {};
		window.console.info = function() {};
	}
	
})(window);
