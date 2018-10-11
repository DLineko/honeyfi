$('.jer_pol').hover(function(){
	$(this).addClass('pic_hover')
},function(){
	$(this).removeClass('pic_hover')
})
$('.kay_pol').hover(function(){
	$(this).addClass('pic_hover')
},function(){
	$(this).removeClass('pic_hover')
})
$('.che_pol').hover(function(){
	$(this).addClass('pic_hover')
},function(){
	$(this).removeClass('pic_hover')
})
/*点击*/

//$('.jer_pol').click(function(){
////	console.log('aa')	
////alert();
//	$('.jer_click').slideDown();
//	$('.back_opacity').show();
//	$('body').addClass('metal-open')
//	
//	return false;
//})
// $('.jeremy').click(function(event){
//	return false;
//})
//console.log($('.value-prop').offset().top)

$(window).scroll(function(){
	console.log($(window).scrollTop())
	if($(window).scrollTop()>200)
	$('.navbar-fixed-top').addClass('navbar-dark')
	else
	$('.navbar-fixed-top').removeClass('navbar-dark')
})