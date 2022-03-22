/* global $,alert, console */

$(function()
{
	
	'use strict';
	

	$('.signin').click(function(){
		if($(this).attr('data-value')=="signin"){
			$(this).attr('data-value',"signup");
			document.getElementById('signswitch').innerHTML="signup";
			document.getElementById('header').innerHTML="Sign In";	
			$('#signup').fadeOut();
			$('#conf-pass').parent().fadeOut();
			$('#name').parent().fadeOut();
			$('#signin').fadeIn();
		}else{
			$(this).attr('data-value',"signin");
			document.getElementById('signswitch').innerHTML="signin";
			document.getElementById('header').innerHTML="Sign Up";
			$('#signup').fadeIn();
			$('#conf-pass').parent().fadeIn();
			$('#name').parent().fadeIn();
			$('#signin').fadeOut();
		}
	});

	var check2=true;
	var check3=true;

	function checkErrors(){
		if($(this).attr('data-value')=="signup"){

		if( check2 === true || check3 === true  ){

			$('.btn').prop('disabled',true);

		}else{

			$('.btn').prop('disabled',false);
		}
	}else  $('.btn').prop('disabled',false);
	}

	checkErrors();


	$('.pass').keyup(function(){

		if($(this).val().length < 8 || $(this).val().length > 16){
			check2=true;
			$(this).css('border' ,'1px solid #f00');
			$(this).parent().find('.custom-alert').fadeIn();
		}else {
			check2=false;
			$(this).css('border' ,'1px solid #00f');
			$(this).parent().find('.custom-alert').fadeOut();
		}
		if($(this).val() != $('.confpass').val() ){
			check3=true;
			$('.confpass').css('border' ,'1px solid #f00');
			$('.confpass').parent().find('.custom-alert').fadeIn();

		}else{
			check3=false;
			$('.confpass').css('border' ,'1px solid #00f');
			$('.confpass').parent().find('.custom-alert').fadeOut();

		}
checkErrors();
})




	$('.confpass').keyup(function(){

				if($(this).val() != $('.pass').val() ){
			check3=true;
			$(this).css('border' ,'1px solid #f00');
			$(this).parent().find('.custom-alert').fadeIn();

		}else{
			check3=false;
			$(this).css('border' ,'1px solid #00f');
			$(this).parent().find('.custom-alert').fadeOut();

		}

	
checkErrors();
	})


	




});