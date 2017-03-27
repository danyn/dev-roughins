<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>Sony-Panel A</title>
	<link rel="stylesheet" href="css/style.css">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<script src="js/jquery.js"></script>
	<script src="js/script.js"></script>
	
	
	<style>
		/*debugging styles*/
		
		body {
			background-color: #3b3b3b
		}
		
		.media-tile {
/*			background-color: white;*/
			border-radius: 4px;
		}
		
		.overlay-active{
			top:0;
			left:0;
			width:100vw;
			height:100vh;
			background-color: rgba(0, 0, 0, 0.81);
			position:fixed;
			z-index:1;
			
		}
		.media-tile{
			position:relative;
			background-color: rgba(0, 0, 0, 0.29);
		}
		
/*		responsive video css*/
		
		.videoWrapper {
	position: relative;
/*			h/w aspect width:height*/
/*			so since the padding here defines the height then is h/w */
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
		.vw-small{
			    padding-bottom: 43.25%;
		}
		span.stop{
			width:32px;
			height:32px;
/*			border:2px solid white;*/
			position:absolute;
			top:0;
			right:0;
			font-size:32px;
/*
			color:white;
			background-color:rgba(0, 0, 0, 0.78);
*/
			z-index:2;
			background-image: url(img/close.png);
		}
		.hidden{
			display:none;
		}
	</style>
	
	
	
	
	
</head>

<body clss="media-set">
	
	<section class="media-set-60-40 set-a" data-media-set="set_a">
		<div class="frame-60">
			<div id="media-item-1" class="media-tile birch-youtube red" data-tile-type="youtube">
			<div class="overlay"></div>
				 <?php 
			$vID_1 = 'M7lc1UVf-VE';
			$player_1 = "player_1";
			$vID_2 = '';
		?>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
   
			<div class="videoWrapper">
				 <div id="<?php echo $player_1 ?>"></div>
				
			</div>
				<span class="play"></span>
				<span class="stop hidden"></span>

			</div><!-- #media-item-1 -->
			<div id="media-item-2" class="media-tile birch-youtube purple" data-tile-type="youtube">
<!--			 <img src="img/eastern-brown-owl.jpg" alt="links to a video of the eastern brown owl" title="click to watch video of eastern brown owl">-->
				<div class="overlay"></div>
				
				<div class="birch-video">
				
							<div class="videoWrapper vw-small">
									<iframe width="640" height="360"
					 								src="https://www.youtube.com/embed/9jCf62bRi6Y?rel=0" 
					 								frameborder="0" allowfullscreen>
								 </iframe>
								 

						</div>
				</div>
				
			</div><!--		#media-item-2-->
			<div id="media-item-3" class="media-tile birch-link green" data-tile-type="instagram">
			 <img src="img/face-of-snapping-turtle.jpg" alt="watch our video of a snapping turtle" title="click to watch a video of a snapping turtle">
				<div class="overlay"></div>
			</div><!--		media-item-3-->
		</div><!--		.frame-60-->
		<div class="frame-40">
			<div id="media-item-4" class="media-tile birch-twitter green" data-tile-type="twitter">
				<p class="birch-tweet">
					Birch releases new line of dog houses.
				</p>
				<p class="birch-tweeted">
					6 hours ago
				</p>
			</div><!--		media-item-4-->
			<div id="media-item-5" class="media-tile birch-link-share green" data-tile-type="link"> 
			<img src="img/monkey-on-tall-rock.jpg" alt="tree monkey on tall rock in asia" title="click watch a video of a tree monkey who live in asia">
				<div class="overlay"></div>
			</div><!--		#media-item-5-->
			<div id="media-item-6" class="media-tile birch-link-share purple" data-tile-type="link"> 
			<img src="img/zebra.jpg" alt="zebra at the african sanctuary for peaceful admiration of spirit">
				<div class="overlay"></div>
			</div><!--			media-item-6-->
		</div>
	</section>
	
	
	
	
	
	
<!--
	 <?php 
			$vID_1 = 'M7lc1UVf-VE';
			$player_1 = "player_1";
			$vID_2 = '';
		?>
     1. The <iframe> (and video player) will replace this <div> tag. 
    <div id="<?php echo $player_1 ?>"></div>
-->
<!--load the youtube jsapi-->
    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
   		
			 // The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }
		
		</script>
		
		
		<?php  
	
	
	function newVideo($play,$stop,$vID,$player){
	?>
	
	
	<script>
   function onYouTubeIframeAPIReady() {
					 
					 
				var <?php echo $player?>;
				var stop = $('<?php echo $stop ?>');
				var play = $('<?php echo $play ?>');
		 	
		 
				stop.click(function(){
					<?php echo $player ?>.pauseVideo();
				});//stop
		 
				play.click(function(){
				if(!<?php echo $player ?>){
					<?php echo $player ?> = new YT.Player('<?php echo $player ?>', {
						height: '390',
						width: '640',
						videoId: '<?php echo $vID ?>' ,
						events: {
							'onReady': onPlayerReady,
						}
					});//player
				}else{<?php echo $player ?>.playVideo()}
				});//play

      }//onyoutubeready
					 
</script>
	
	<?php	
	}//newVIdeo
	
		newVideo('span.play','span.stop',$vID_1,$player_1);
	?>   
	
	
	
	

</body>
