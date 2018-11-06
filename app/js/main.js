$(document).ready(function(){

	console.log("Hello from jQuery!");

	$('#btn-open-form').click(function(e){
		e.preventDefault();
		console.log('Click');
		$(this).hide();
		$('.booking-form-wrapper').slideDown();
	});

	$(".phone-mask").mask("+7 (999) 999-99-99");
})