$(document).ready(function(){
	// menu click event
	$('.menuBtn').click(function() {
		$(this).toggleClass('act');
		if($(this).hasClass('act')) {
			$('.mainMenu').addClass('act');
			$('.mobile').addClass('mobileHeight');
		}
		else {
			$('.mainMenu').removeClass('act');
			$('.mobile').removeClass('mobileHeight');
		}
	});

});


$(document).ready(function () {
	var winWith = $(window).width();
  
	function resize() {
		if (winWith > 346 && winWith < 768) {
			$('.langLink').addClass('mx-5');
		  }
	  
		  else {
			$('.langLink').removeClass('mx-5');
			//console.log('vay amk');
		  }
	}
  
	resize()
  
  });