fbHelper = {

	/**
	 * fb login
	 */
	login: function (permissions, fields, callback) {
		FB.login(function(response) {
			if (response.authResponse) {
				var auth_response = response.authResponse;

				// check connection
				FB.api('/me', {fields: fields}, function(api_response) {

					// check response for errors
					if (!api_response || api_response.error) {

						// log error
						console.log('fb api call did not succeed. response object: '+ $.param(api_response));
						
						// alert error
						alert('Facebook error');
					} else {
						// execute callback
						if (typeof callback == 'function') callback(auth_response, api_response);
					}
				});
			}
		}, {
			scope: permissions
		});
	},

	/**
	 * Open graph action
	 */
	action: function (og_url) {
		FB.api(
			'/me/quitsmoker:quit',
			'post',
			{ smoking: og_url },
			function(response) {
				if (!response || response.error) {
					alert('test');
				}
			}
		);
	}

	/**
	 * FB share
	 */
	share = function ($el, callback, options) {

		// default options
		var _options = {
			method:			'feed',
			name:			$el.data('fb_share_name'),
			description:	$el.data('fb_share_description'),
			link:			$el.data('fb_share_link'),
			caption:		$el.data('fb_share_caption'),
			picture:		$el.data('fb_share_picture')
		};

		// check for options
		if (typeof options == 'object') {
			for (var property in options) {
				_options.property = options.property;
			}
		}
	 
	 	// share popup
		FB.ui(_options, function(response) {
			if (response && response.post_id) {
				if (typeof callback == 'function') callback(response);
			} else {
				return false;
			}
		});
	}

};