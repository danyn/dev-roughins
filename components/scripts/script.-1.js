/**********************************************************************
* script.js v 1.0 |  adapted from the lynda.com course by Ray Villalobos
***********************************************************************/

$(function(){
	var wHeight = $(window).height();
	
	$('.fullheight').css('height', wHeight);
	$(window).resize(function(){
		var wHeight = $(window).height();
		$('.fullheight').css('height', wHeight);
	});//window.resize
}); //on load  

//set up a controller to prevent default behaviours on animated elements and trigger by scrolling
//http://scrollmagic.io/docs/index.html#toc5     v2.0.5
var controller = new ScrollMagic.Controller();

//animate the nav
var navTween = TweenMax.staggerTo(
	['.icon.info span.icona', '.icon.rooms span.icona', '.icon.dining span.icona', '.icon.events span.icona', '.icon.attractions span.icona' ],
	
	.5,
	{scaleX:0.8,scaleY:0.8 ,repeat:1, skewX:15 ,yoyo:true, ease:Power0.easeIn,
	onComplete:function(){
//		$('#nav').toggleClass('pinnedNav');
		}
	},
	0.1
	
);

//new ScrollMagic.Scene({triggerElement:'#nav', triggerHook: 0, reverse:0})
// 	.setTween(navTween)
//  .addTo(controller);

//pin the nav

new ScrollMagic.Scene({triggerElement:'#nav', triggerHook: 0})
	.setPin('#nav')
	.setTween(navTween)
 	.setClassToggle('#nav', 'pinnedNav')
  .addTo(controller);


//animation for qualifications
//https://greensock.com/docs/#/HTML5/Sequencing/TimelineMax/staggerFrom/
var qaulifyTween = TweenMax.staggerFrom(
	['#a', '#b', '#c', '#d'],
	2,
	{
		bottom:-200,
		opacity:0,
		scaleX:0,
//		backgroundColor:'red',
		ease:Quart.easeInOut
		
	},
	0.5,
	0
	);
//attach the animation to a scrollmagic scene using chaining so no handle on the object is needed


new ScrollMagic.Scene({triggerElement:'#manchester', reverse: false, offset:-100})
	.setTween(qaulifyTween)
	.addTo(controller);