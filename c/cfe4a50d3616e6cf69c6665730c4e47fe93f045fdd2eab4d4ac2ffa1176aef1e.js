jQuery( document ).ready( function ( $ )
{
	let internal = location.host.replace( "www.", "" );
	internal = new RegExp( internal, "i" );

	let a = document.getElementsByTagName( 'a' ); // then, grab every link on the page
	for ( let i = 0 ; i < a.length ; i++ )
	{
		let href = a[i].host; // set the host of each link

		// make sure the href doesn't contain current site's host
		if ( href && !internal.test( href ) )
			a[i].setAttribute( 'target', '_blank' ); // if it doesn't, set attributes
	}

	let $form_modal = jQuery( '.dotline-user-modal' ),
		$form_login = jQuery( '.dotline-user-dashboard #dotline-core-user-login' ),
		$form_verify = jQuery( '.dotline-user-dashboard #dotline-core-user-verify' ),
		$form_register = jQuery( '.dotline-user-dashboard #dotline-core-user-register' ),
		$form_forgot = jQuery( '.dotline-user-dashboard #dotline-core-user-forgot' ),
		$form_modal_tab = jQuery( '.dotline-user-dashboard .switcher' ),
		$tab_login = $form_modal_tab.children( 'li' ).eq( 0 ).children( 'a' ),
		$tab_register = $form_modal_tab.children( 'li' ).eq( 1 ).children( 'a' ),
		$back_to_forgot_link = $form_login.find( '.dotline-user-modal-back-to-forgot, .dotline-form-bottom-message a' ),
		$back_to_login_link = $form_forgot.find( '.dotline-user-modal-back-to-login, .dotline-form-bottom-message a' ),
		$main_nav = jQuery( '.dotline-user-profile-buttons, .dotline-user-modal-forms' );

	let notify_error_args = {
		delay : 5000,
		verticalAlign : "bottom",
		align : "right",
		background : "#ff5632",
		color : "white",
		animation : true,
		animationType : "drop",
		close : true,
	};

	let notify_success_args = {
		delay : 5000,
		verticalAlign : "bottom",
		align : "right",
		background : "#0cb848",
		color : "white",
		animation : true,
		animationType : "drop",
		close : true,
	};

	function getQueryVariable ( name )
	{
		let query = window.location.search.substring( 1 ),
			params = query.split( '&' );

		for ( let i = 0 ; i < params.length ; i++ )
		{
			let pair = params[i].split( '=' );
			if ( pair[0] === name )
				return pair[1];
		}

		return '';
	}

	function callAjaxLogin ( token = '' )
	{
		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_login',
				'username' : jQuery( '#dotline-login-username' ).val(),
				'password' : jQuery( '#dotline-login-password' ).val(),
				'security' : jQuery( '#dotline-login-security' ).val(),
				'token' : token
			},
			success : function ( data )
			{
				jQuery( '.error-message' ).removeClass( 'is-visible' );
				jQuery( '.has-error' ).removeClass( 'has-error' );
				jQuery( '#dotline-login-button' ).removeClass( 'button--loading' );

				if ( data.status != 'success' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_error_args );
					else
					{
						if ( data.status == 'empty-username' || data.status == 'error' )
						{
							$form_login.find( '#dotline-login-username' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							jQuery( '#dotline-login-username' ).next( 'span' ).html( data.message );
						}

						if ( data.status == 'empty-password' )
						{
							$form_login.find( '#dotline-login-password' ).addClass( 'has-error' ).nextAll().eq( 1 ).addClass( 'is-visible' );
							jQuery( '#dotline-login-password' ).nextAll().eq( 1 ).html( data.message );
						}
					}
				}
				else
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_success_args );
					else
					{
						jQuery( '#dotline-login-button' ).addClass( 'c-badge--success' );
						jQuery( '#dotline-login-button' ).html( '<span>' + data.message + '</span>' );
					}

					let redirectTo = getQueryVariable( 'redirect_to' );

					if ( redirectTo )
						document.location.href = redirectTo;
					else
						document.location.href = ajax_login_object.redirecturl;
				}
			}
		} );
	}

	function callAjaxRegister ( token = '' )
	{
		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_register',
				'username' : jQuery( '#dotline-register-username' ).val(),
				'email' : jQuery( '#dotline-register-email' ).val(),
				'mobile' : jQuery( '#dotline-register-mobile' ).val(),
				'first_name' : jQuery( '#dotline-register-first-name' ).val(),
				'last_name' : jQuery( '#dotline-register-last-name' ).val(),
				'password' : jQuery( '#dotline-register-password' ).val(),
				'privacy' : jQuery( '#dotline-register-privacy' ).val(),
				'security' : jQuery( '#dotline-register-security' ).val(),
				'token' : token
			},
			success : function ( data )
			{
				let status = data.status;

				jQuery( '.error-message' ).removeClass( 'is-visible' );
				jQuery( '.has-error' ).removeClass( 'has-error' );
				jQuery( '#dotline-register-button' ).removeClass( 'button--loading' );

				if ( status == 'errors' )
				{
					let errors = data.errors;

					errors.map( function ( error )
					{
						if ( data.notify == 1 )
							jQuery.notify( error.message, notify_error_args );
						else
						{
							if ( error.status == 'empty-first-name' )
							{
								jQuery( '#dotline-register-first-name' ).next( 'span' ).html( error.message );
								$form_register.find( '#dotline-register-first-name' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							}

							if ( error.status == 'empty-last-name' )
							{
								jQuery( '#dotline-register-last-name' ).next( 'span' ).html( error.message );
								$form_register.find( '#dotline-register-last-name' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							}

							if ( error.status == 'empty-email' || error.status == 'incorrect-email' || error.status == 'duplicate-email' )
							{
								jQuery( '#dotline-register-email' ).next( 'span' ).html( error.message );
								$form_register.find( '#dotline-register-email' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							}

							if ( error.status == 'empty-username' || error.status == 'duplicate-username' )
							{
								jQuery( '#dotline-register-username' ).next( 'span' ).html( error.message );
								$form_register.find( '#dotline-register-username' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							}

							if ( error.status == 'empty-mobile' || error.status == 'incorrect-mobile' || error.status == 'duplicate-mobile' )
							{
								jQuery( '#dotline-register-mobile' ).next( 'span' ).html( error.message );
								$form_register.find( '#dotline-register-mobile' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
							}

							if ( error.status == 'empty-password' || error.status == 'password-is-not-safe' )
							{
								jQuery( '#dotline-register-password' ).nextAll().eq( 1 ).html( error.message );
								$form_register.find( '#dotline-register-password' ).addClass( 'has-error' ).nextAll().eq( 1 ).addClass( 'is-visible' );
							}
						}
					} );
				}
				else if ( status == 'error' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_error_args );
					else
						jQuery( '.register-error-message' ).html( data.message ).addClass( 'is-visible' );
				}
				else
				{
					jQuery( '#dotline-register-button' ).removeClass( 'button--loading' );

					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_success_args );
					else
					{
						jQuery( '#dotline-register-button' ).addClass( 'c-badge--success' );
						jQuery( '#dotline-register-button' ).html( '<span>' + data.message + '</span>' );
					}

					let redirectTo = getQueryVariable( 'redirect_to' );

					if ( redirectTo )
						document.location.href = redirectTo;
					else
						document.location.href = ajax_login_object.redirecturl;
				}
			}
		} );
	}

	function callAjaxForgot ( token = '' )
	{
		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_forgot',
				'username' : jQuery( '#dotline-forgot-username' ).val(),
				'security' : jQuery( '#dotline-forgot-security' ).val(),
				'token' : token
			},
			success : function ( data )
			{
				jQuery( '.error-message' ).removeClass( 'is-visible' );
				jQuery( '.has-error' ).removeClass( 'has-error' );
				jQuery( '#dotline-forgot-button' ).removeClass( 'button--loading' );

				if ( data.status == 'invalid-user' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_error_args );
					else
					{
						jQuery( '#dotline-forgot-username' ).next( 'span' ).html( data.message );
						$form_forgot.find( '#dotline-forgot-username' ).addClass( 'has-error' ).next( 'span' ).addClass( 'is-visible' );
					}
				}

				if ( data.status == 'success' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_success_args );
					else
						jQuery( '#dotline-core-user-forgot .dotline-form-message' ).html( data.message );
				}

				if ( data.status == 'fail' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_error_args );
					else
						jQuery( '#dotline-core-user-forgot .dotline-form-message' ).html( data.message );
				}
			}
		} );
	}

	function callVerifyAjaxForgot ( token = '' )
	{
		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_verify',
				'code' : jQuery( '#dotline-verify-form #code' ).val(),
				'security' : jQuery( '#dotline-verify-form #dotline-verify-security' ).val(),
				'token' : token
			},
			success : function ( data )
			{
				jQuery( '.error-message' ).removeClass( 'is-visible' );
				jQuery( '.has-error' ).removeClass( 'has-error' );
				jQuery( '#dotline-verify-button' ).removeClass( 'button--loading' );

				if ( data.status == 'empty-code' || data.status == 'invalid-code' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_error_args );
					else
					{
						jQuery( '#code' ).next( 'span' ).html( data.message );
						$form_verify.find( '#code' ).toggleClass( 'has-error' ).next( 'span' ).toggleClass( 'is-visible' );
					}
				}
				if ( data.status == 'success' )
				{
					if ( data.notify == 1 )
						jQuery.notify( data.message, notify_success_args );
					else
					{
						jQuery( '#dotline-verify-button' ).addClass( 'c-badge--success' );
						jQuery( '#dotline-verify-button' ).html( '<span>' + data.message + '</span>' );
					}

					let redirectTo = getQueryVariable( 'redirect_to' );

					if ( redirectTo )
						document.location.href = redirectTo;
					else
						document.location.href = ajax_login_object.redirecturl;
				}
			}
		} );
	}

	// ajax login
	jQuery( '#dotline-login-button' ).on( 'click', function ( e )
	{
		e.preventDefault();

		jQuery( this ).toggleClass( 'button--loading' );

		if (typeof ajax_login_object.recaptcha_site_key !== 'undefined')
			grecaptcha.ready(function() {
				grecaptcha.execute(ajax_login_object.recaptcha_site_key, {action: 'login'}).then(function(token) {
					callAjaxLogin(token);
				});
			});
		else
			callAjaxLogin();
	} );

	// ajax register
	jQuery( '#dotline-register-button' ).on( 'click', function ( e )
	{
		e.preventDefault();
		let notify = jQuery( this ).data( 'notify' );
		jQuery( this ).toggleClass( 'button--loading' );

		if ( jQuery( '#dotline-register-privacy' ).length && !jQuery( '#dotline-register-privacy' ).is( ':checked' ) )
		{
			jQuery( '#dotline-register-button' ).removeClass( 'button--loading' );

			if ( notify == 1 )
				jQuery.notify( 'شما باید قوانین و شرایط ثبت نام را بپذیرید!', notify_error_args );
			else
			{
				$form_register.find( '#dotline-register-privacy' ).toggleClass( 'has-error' ).next( 'span' ).toggleClass( 'is-visible' );
				jQuery( '#dotline-register-privacy' ).next( 'span' ).html( 'شما باید قوانین و شرایط ثبت نام را بپذیرید!' );
			}
		}
		else
		{
			if ( typeof ajax_login_object.recaptcha_site_key !== 'undefined' )
				grecaptcha.ready( function () {
					grecaptcha.execute( ajax_login_object.recaptcha_site_key, { action : 'signup' } ).then( function ( token ) {
						callAjaxRegister( token );
					} );
				} );
			else
				callAjaxRegister();
		}
	} );

	// Ajax forgot password
	jQuery( document ).on( 'click', '#dotline-forgot-button', function ( e )
	{
		e.preventDefault();
		jQuery( this ).toggleClass( 'button--loading' );

		if ( typeof ajax_login_object.recaptcha_site_key !== 'undefined' )
			grecaptcha.ready( function () {
				grecaptcha.execute( ajax_login_object.recaptcha_site_key, { action : 'forgot' } ).then( function ( token ) {
					callAjaxForgot( token );
				} );
			} );
		else
			callAjaxForgot();
	} );

	// ajax verify
	jQuery( '#dotline-verify-button' ).on( 'click', function ( e )
	{
		e.preventDefault();
		jQuery( this ).toggleClass( 'button--loading' );

		if ( typeof ajax_login_object.recaptcha_site_key !== 'undefined' )
			grecaptcha.ready( function () {
				grecaptcha.execute( ajax_login_object.recaptcha_site_key, { action : 'verify-forgot' } ).then( function ( token ) {
					callVerifyAjaxForgot( token );
				} );
			} );
		else
			callVerifyAjaxForgot();
	} );

	jQuery( document ).on( 'click', '#dotline-resend-button', function ( e )
	{
		e.preventDefault();

		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_resend_sms',
			},
			success : function ( data )
			{
				if ( data.notify == 1 )
					jQuery.notify( data.message, data.status == 'success' ? notify_success_args : notify_error_args );
				else
					jQuery( '#dotline-resend-button' ).html( '<span>' + data.message + '</span>' );
			}
		} );

		resend_sms_countdown_timer();
	} );

	resend_sms_countdown_timer();

	jQuery( document ).on( 'click', '#dotline-resend-email', function ( e )
	{
		e.preventDefault();

		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_resend_email',
			},
			success : function ( data )
			{
				if ( data.notify == 1 )
				{
					jQuery.notify( data.message, notify_success_args );
				}
				else
					jQuery( '.resend-email-button-fieldset' ).html( '<span class="color-success">' + data.message + '</span>' );

				jQuery( this ).toggleClass( 'button--loading' );
			}
		} );
	} );

	// Hide error message
	jQuery( '.dotline-form #dotline-login-password, .dotline-form #dotline-register-password' ).on( 'click', function ()
	{
		if ( jQuery( this ).hasClass( "has-error" ) )
			jQuery( this ).removeClass( 'has-error' ).nextAll().eq( 1 ).removeClass( 'is-visible' );
	} );

	jQuery( '.dotline-form .username, .dotline-form .first-name, .dotline-form .last-name, .dotline-form .email, .dotline-form .password, .dotline-form input' ).on( 'click', function ()
	{
		if ( jQuery( this ).hasClass( "has-error" ) )
			jQuery( this ).removeClass( 'has-error' ).next( 'span' ).removeClass( 'is-visible' );
	} );

	// forgot password link
	jQuery( '.forgot-link' ).on( 'click', function ( e )
	{
		e.preventDefault();
		jQuery( '#dotline-login-form' ).addClass( 'hide-form' );
		jQuery( '#dotline-forgot-form' ).removeClass( 'hide-form' );
	} );

	jQuery( '.back-to-login-link' ).on( 'click', function ( e )
	{
		e.preventDefault();
		jQuery( '#dotline-login-form' ).removeClass( 'hide-form' );
		jQuery( '#dotline-forgot-form' ).addClass( 'hide-form' );
	} );

	jQuery( document ).on( 'click', '#dotline-reset-password-button', function ( e )
	{
		let button = jQuery( this );

		button.toggleClass( 'button--loading' );

		jQuery.ajax( {
			type : 'POST',
			dataType : 'json',
			url : ajax_login_object.ajaxurl,
			data : {
				'action' : 'dotline_ajax_reset_password',
				'security' : jQuery( '#dotline-reset-password-security' ).val(),
				'user_key' : jQuery( '#dotline-user-key' ).val(),
				'user_login' : jQuery( '#dotline-user-login' ).val(),
				'new_password' : jQuery( '#dotline-new-password' ).val(),
				'confirm_new_password' : jQuery( '#dotline-confirm-new-password' ).val(),
			},
			success : function ( data )
			{
				button.removeClass( 'button--loading' );

				if ( data.notify == 1 )
					jQuery.notify( data.message, data.status == 'success' ? notify_success_args : notify_error_args );
				else
					button.parents('#reset-password').find( '.dotline-error-message' ).html( '<span>' + data.message + '</span>' );

				if ( data.status == 'success' )
					document.location.href = ajax_login_object.redirecturl;
			}
		} );

		e.preventDefault();
	} );

	//open modal
	$main_nav.on( 'click', function ( event )
	{
		// on mobile close submenu
		$main_nav.children( 'ul' ).removeClass( 'is-visible' );
		//show modal layer
		$form_modal.addClass( 'is-visible' );
		//show the selected form
		( jQuery( event.target ).is( '.register' ) ) ? register_selected() : login_selected();
	} );

	// close modal
	$form_modal.on( 'click', function ( event )
	{
		if ( jQuery( event.target ).is( $form_modal ) || jQuery( event.target ).is( '.close-form' ) )
			$form_modal.removeClass( 'is-visible' );
	} );

	// close modal when clicking the esc keyboard button
	jQuery( document ).keyup( function ( event )
	{
		if ( event.which == '27' )
			$form_modal.removeClass( 'is-visible' );
	} );

	//switch from a tab to another
	$form_modal_tab.on( 'click', function ( event )
	{
		event.preventDefault();
		( jQuery( event.target ).is( $tab_login ) ) ? login_selected() : register_selected();
	} );

	//hide or show password
	jQuery( '.hide-password' ).on( 'click', function ()
	{
		let $this = jQuery( this ),
			$password_field = $this.prev( 'input' );

		( 'password' == $password_field.attr( 'type' ) ) ? $password_field.attr( 'type', 'text' ) : $password_field.attr( 'type', 'password' );
		( 'نمایش' == $this.text() ) ? $this.text( 'مخفی' ) : $this.text( 'نمایش' );

		//focus and move cursor to the end of input field
		$password_field.putCursorAtEnd();
	} );

	//show forgot form
	$back_to_forgot_link.on( 'click', function ( event )
	{
		event.preventDefault();
		forgot_selected();
	} );

	//back to login from the forgot form
	$back_to_login_link.on( 'click', function ( event )
	{
		event.preventDefault();
		login_selected();
	} );

	function login_selected ()
	{
		$form_login.addClass( 'is-selected' );
		$form_register.removeClass( 'is-selected' );
		$form_forgot.removeClass( 'is-selected' );
		$tab_login.addClass( 'selected' );
		$tab_register.removeClass( 'selected' );
	}

	function register_selected ()
	{
		$form_login.removeClass( 'is-selected' );
		$form_register.addClass( 'is-selected' );
		$form_forgot.removeClass( 'is-selected' );
		$tab_login.removeClass( 'selected' );
		$tab_register.addClass( 'selected' );
	}

	function(){}