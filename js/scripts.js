//$("#carousel img:even").css('border', '3px solid red');
//$("#carousel img:odd").css('border', '3px solid green');
$("#carousel img:even").css('outline', '2px solid white').css('outline-offset', '-6px');
$("#carousel img:odd").css('outline', '2px solid blue').css('outline-offset', '-6px');


$(function(){

	var carouselList = $("#carousel ul");
	
	setInterval(changeSlide, 3000); 

	function changeSlide(){
		carouselList.animate({'marginLeft':-400}, 800, moveFirstSlide);
	}

	function moveFirstSlide(){
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

});