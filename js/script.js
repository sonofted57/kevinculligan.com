$(document).ready(function () {

	// JAVASCRIPT COUNT DOWN ===============================================================
	$('.countdown').downCount({
		date: '10/12/2017 12:00:00',
		offset: +10
	});

	//JAVASCRIPT Youtube Video ============================================================
	$('document').ready(function() {
		var options = { videoId: 'eP6l_woHuXE', start: 3 };
			$('#wrapper').tubular(options);
	});

	// Start Javascript for Subscription Form =============================================
	$('.subscriptionForm').submit(function(){
		var email = $('#email').val();
		$.ajax({
		url:'email.php',
		type :'POST',
		dataType:'json',
		data: {'email': email},
			success: function(data){
				if(data.error){
					$('#error').fadeIn();
				}else{
					$('#success').fadeIn();
					$("#error").hide();
				}
			}
		})
		return false;
	});

	$('#email').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});

	$('#email').keydown(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();
	});

	$("#email").click(function() {
        $("#email").val('');
    });

	//Animate Home

	//menu
	$('.home').css('cursor', 'pointer');
	$('.about').css('cursor', 'pointer');
	$('.contact').css('cursor', 'pointer');

	$('.home').click(function() {
		$('#about').addClass('hide');
		$('#contact').addClass('hide');
		$('#home').fadeIn(700);
		$('#home').removeClass('hide');
		$('.about').removeClass('active');
		$('.contact').removeClass('active');
		$('.home').addClass('active');
	});
	$('.about').click(function(){
		$('#home').addClass('hide');
		$('#contact').addClass('hide');
		$('#about').fadeIn(700);
		$('#about').removeClass('hide');
		$('.home').removeClass('active');
		$('.contact').removeClass('active');
		$('.about').addClass('active');

	});
	$('.contact').click(function(){
		$('#home').addClass('hide');
		$('#about').addClass('hide');
		$('#contact').fadeIn(700);
		$('#contact').removeClass('hide');
		$('.home').removeClass('active');
		$('.about').removeClass('active');
		$('.contact').addClass('active');
	});

	//Animate Home background color page

	$('.background-color .home').click(function() {
		$('#about').addClass('hide');
		$('#contact').addClass('hide');
		$('.coming-soon').fadeIn(700);
		$('.coming-soon').removeClass('hide');
		$('.subscibe-form').fadeIn(700);
		$('.subscibe-form').removeClass('hide');
	});
	$('.background-color .about').click(function(){
		$('.coming-soon').addClass('hide');
		$('.subscibe-form').addClass('hide');
		$('#about').fadeIn(700);
		$('#about').removeClass('hide');

	});
	$('.background-color .contact').click(function(){
		$('.coming-soon').addClass('hide');
		$('.subscibe-form').addClass('hide');
		$('#about').addClass('hide');
		$('#contact').fadeIn(700);
		$('#contact').removeClass('hide');
		$('.coming-soon').removeClass('active');
	});

	// placeholdem effect
	Placeholdem( document.querySelectorAll( '[placeholder]' ) );

	//contact form
	$('form #response').hide();

	$('#contactSubmit').click(function(e){
			e.preventDefault();
			var valid = '';
			var required = 'is required';
			var name = $('form #name').val();
			var em = $('form #em').val();
			var message = $('form #message').val();

			if(name = '' || name.length <= 2) {
				valid += '<p>Your name ' + required + '</p>';
			}
			if(em = '' || em.length <= 7) {
				valid += '<p>Your email ' + required + '</p>';
			}
			if(message = '' || message.length <= 5) {
				valid += '<p>A message ' + required + '</p>';
			}

			if(valid != ''){
				$('form #response').html('<b>Fix error below.<b> '+valid).fadeIn('fast');
			}

	});


});
