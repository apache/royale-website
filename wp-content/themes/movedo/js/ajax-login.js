jQuery(function($){

	"use strict";

	$('.grve-register-form-btn').on('click', function(e) {
		e.preventDefault();
		$('.grve-login-form-item').hide();
		$('.grve-register-form').show();
	});
	$('.grve-login-form-btn').on('click', function(e) {
		e.preventDefault();
		$('.grve-login-form-item').hide();
		$('.grve-login-form').show();
	});
	$('.grve-reset-password-form-btn').on('click', function(e) {
		e.preventDefault();
		$('.grve-login-form-item').hide();
		$('.grve-reset-password-form').show();
	});

	// Post login form
	$('#grve_login_form').on('submit', function(e){

		e.preventDefault();

		$.post(grve_form.ajaxurl, $('#grve_login_form').serialize(), function(data){

			var obj = $.parseJSON(data);

			$('.grve-login-form .grve-form-errors').html(obj.message);

			if(obj.error == false){
				var link = grve_form.redirect_url;
				if ( "" != link ) {
					location.href = link;
				} else {
					window.location.reload(true);
				}
			}

		});

	});


	// Post register form
	$('#grve_registration_form').on('submit', function(e){

		e.preventDefault();

		$.post(grve_form.ajaxurl, $('#grve_registration_form').serialize(), function(data){

			var obj = $.parseJSON(data);

			$('.grve-register-form .grve-form-errors').html(obj.message);

			if(obj.error == false){

			}


		});

	});

	// Reset Password
	$('#grve_reset_password_form').on('submit', function(e){

		e.preventDefault();

		$.post(grve_form.ajaxurl, $('#grve_reset_password_form').serialize(), function(data){

			var obj = $.parseJSON(data);

			$('.grve-reset-password-form .grve-form-errors').html(obj.message);

		});

	});

	$('.grve-login-form-item').hide();
	$('.grve-login-form').show();

});