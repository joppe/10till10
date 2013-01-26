fbHelper = {

	/**
	 * fb login
	 *
	 * @param string, permissions
	 * @param string, fields
	 * @param function, callback
	 */
	fb_login: function (permissions, fields, callback) {
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
	}

	/**
	 * Open graph action
	 */
	og_action: function (og_url) {
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

};