$(function(){
	var wHeight = $(window).height();
	
	$('.fullheight').css('height', wHeight);
	$(window).resize(function(){
		var wHeight = $(window).height();
		$('.fullheight').css('height', wHeight);
	});//window.resize
}); //on load


//setup scrollMagic

var controller = new ScrollMagic({
	globalSceneOptions:{
		triggerHook: "onLeave"
	}
	
});

//setup the animation
var attractionstween = TweenMax.staggerFromTo(
	'#attractions article',
		2, 
		{
			opacity:0,
			scale:0.3
		},
		{
			delay: 0.3,
			opacity: 1,
			scale: 1,
			ease: Back.easeOut
		});

//attach a scene to the scroll listener called a controller
//use these scroll magic methods in the static class ScrollScene
//such as setTween and addTo 
//setTween can take an animating framwork like GreenSock as an arg
var scene = new ScrollScene({
		triggerElement: '#attractions',
		offset:-300
}).setTween(attractionstween)
  .addTo(controller);

//set up an animation
//https://greensock.com/docs/#/HTML5/Sequencing/TimelineMax/staggerFrom/
var qaulifyTween = TweenMax.staggerFrom(
	['#a', '#b', '#c', '#d'],
	4,
	{
		bottom:-200,
		opacity:0,
		scaleX:0.2,
		ease:Quart.easeInOut
		
	},
	1,
	0
	);


//attach a scene
var qualify = new ScrollScene({triggerElement:'#manchester',offset:0,reverse:false})
	.setTween(qaulifyTween)
	.addTo(controller);


//set up an animation for the nav

var navTween = TweenMax.staggerTo(
	['.icon.info span.icona', '.icon.rooms span.icona', '.icon.dining span.icona', '.icon.events span.icona', '.icon.attractions span.icona' ],
	
	1,
	{scaleX:0.8,scaleY:0.8 ,repeat:1, skewX:15 ,yoyo:true, ease:Power0.easeIn,
	onComplete:function(){
//		$('#nav').toggleClass('pinnedNav');
		}
	},
	0.2
	
);



new ScrollScene()
//pin the nav no animation

var pin = new ScrollScene({triggerElement:'#nav'})
	.setPin('#nav')
	.setTween(navTween)
  .addTo(controller);




 

