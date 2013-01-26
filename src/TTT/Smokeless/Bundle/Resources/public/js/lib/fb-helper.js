fbHelper = {

	login: function (permissions, fields, callback) {
		FB.login(function(response) {
			if (response.authResponse) {
				var auth_response = response.authResponse;

				// check connection
				FB.api('/me', {fields: fields}, function(api_response) {

					// check response for errors
					if (!api_response || api_response.error) {

						// log error
						console.log('Facebook API call did not succeed. Response object: '+ $.param(api_response));
						
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

	action: function (og_url, type) {
		FB.api(
			'/me/quitsmoker:'+ type,
			'post',
			{ smoking: og_url },
			function(response) {
				if (!response || response.error) {
					alert('Error posting open graph action');
				}
			}
		);
	},

	share: function ($el, callback, options) {

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
	},

	fb_status: function(fields, callback) {
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {
						
				// get user credentials
				return this.fb_user(response.authResponse, fields, callback);

			} else if (response.status === 'not_authorized') {
				return false;
			} else {
				return false;
			}
		});
	},

	fb_get_friends: function(access_token, callback, fields) {
		FB.api('/me/friends?'+ access_token + '&fields='+ fields, function(response) {
			var friends = [];
			if(response.data) {

			// get all friends
			$.each(response.data, function(index,friend) {
				friends.push(friend);
			});

			// run call back
			if (typeof callback == 'function') 
				callback(friends);
			} else {
				console.log(response);
			}
		});
	}

};