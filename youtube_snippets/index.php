<!DOCTYPE html>
<html>
 <head>
 	<script
  src="https://code.jquery.com/jquery-1.12.4.min.js"
  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
  crossorigin="anonymous"></script>
 </head>
  <body>
   
   <?php 
			$vID_1 = 'M7lc1UVf-VE';
			$player_1 = "player_1";
			$vID_2 = '';
		?>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="<?php echo $player_1 ?>"></div>
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
    
    
    
    
    <button id="play1">play</button>
    <button id="stop1">stop</button>
		<button id="play2">play</button>
    <button id="stop2">stop</button>
    
    
    
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
	
		newVideo('#play1','#stop1',$vID_1,$player_1);
	?>   

<!--alter the function to accept an array of php objects which it can
	iterate through in order to populate all the players needed for a page within
	one youtubeready function 
	-->
		
		
  </body>
</html>
