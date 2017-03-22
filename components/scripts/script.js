function mouse_tile_io (elem){
		$(elem).each(function(){
			$(this).mouseenter(function(){
				var e = '#' + $(this)[0].id; 
				
				$(e + ' .overlay').addClass("overlay-active");
				console.log('tile in' + e);
			}).mouseleave(function(){
					var e = '#' + $(this)[0].id; 
					console.log('tile out' + e);
				$(e + ' .overlay').removeClass("overlay-active");
			});
			
		});//each media tile
	}//fn mouse_tile_io




function click_play (elem){
		$(elem).each(function(){
			$(this).click(function(){
				e = '#'+ $(this).parent()[0].id;
			
				$(e + ' .overlay').addClass("overlay-active");
				$(e + ' .videoWrapper').css({'z-index':'2','display':'block','margin-top': '21px'});
				$(e + ' .stop').removeClass('hidden');
				
			});
			
		});//each media tile
	}//click play


function click_stop (elem){
		$(elem).each(function(){
			$(this).click(function(){
				e = '#'+ $(this).parent()[0].id;
			
				$(e + ' .overlay').removeClass("overlay-active");
				$(e + ' .videoWrapper').css({'z-index':'0','display':'none', 'margin-top': '0px'});
				$(e + ' .stop').addClass('hidden');
				
			});
			
		});//each media tile
	}//click play


$(function(){
//	alert($('#media-item-1 img')[0].alt);
	
//	mouse_tile_io(".media-tile");
	click_stop('span.stop');
	click_play('span.play');
	
});//document ready