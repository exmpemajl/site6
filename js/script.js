$(document).ready(function(){
	$(".header__burger").click(function(e) {
		$(".header__burger, nav").toggleClass("active");
		$("body").toggleClass(".lock");
	});	
	$(".slider").slick({
		slidesToShow: 4,
  		slidesToScroll: 2,
  		dots:true
	});
});