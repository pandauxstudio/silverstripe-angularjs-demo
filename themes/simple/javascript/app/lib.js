define(['jquery'], function ($) {
	return {

		getIEVersion: function() {
			var ua = window.navigator.userAgent;
			var msie = ua.indexOf("MSIE ");

			// If Internet Explorer, return version number
			if (msie > 0) {
				return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
			}
			return false;
		},

		/* getParam
		 * ========
		 * @param sParam Parameter to retreive.
		 * Source: http://stackoverflow.com/questions/19491336/get-url-parameter-jquery */

		getParam: function (sParam) {
			var sPageURL = window.location.search.substring(1);
			var sURLVariables = sPageURL.split('&');
			for (var i = 0; i < sURLVariables.length; i++) {
				var sParameterName = sURLVariables[i].split('=');
				if (sParameterName[0] == sParam) {
					if ( sParameterName[1] == '1%20Hour' ) {
						return sParameterName[1];
					} else {
						return sParameterName[1].replace(/%20/g, " ");
					}
				}
			}
			return '';
		},

		/*
		 * matchFinder
		 * ===========
		 * Returns matching item in array.
		 *
		 */

		matchFinder: function (matchString, array, property){
			return $.grep(array, function(n, i){
			  return n.property == matchString;
			});
		},

		/* loadAccordion
		 * =============
		 * Loads jQuery accordion plugin.
		 * @param string accordionID ID of accordion container. */
		loadAccordion: function(accordionID) {

			var accordion = $(accordionID);
			try {
				if ( typeof accordion != 'undefined' ) {
					$(accordionID).accordion({
						active: false,
						collapsible: true,
						animated: 'slide',
						autoHeight: false
					});
					$(accordionID).removeClass('hidden');
				}
			} catch(e) {}

		}

	}

});