/**
 * @name jquery-smart3d.js
 * @author Kotelnitskiy Evgeniy (http://4coder.info)
 * @version 2.0 beta
 * @date December 18, 2009
 * @category jQuery plugin
 * @license GPL
 * @example Visit http://4coder.info/en/jquery-smart3d-en/ for more informations about this jQuery plugin
**/

(function($) {
	$.fn.smart3d = function(settings) { //settings['frame_width'], settings['first_is_static'], settings['last_is_static']) {
	
        var thisObj = this;
        if (thisObj.length == 0) return false;
        var thisEl = thisObj[0];
		
        // Settings
        settings = jQuery.extend({
            frame_width: $('>li', thisEl).width(),
            frame_height: $('>li', thisEl).height(),
            first_is_static: false, 
            last_is_static: false,
            horizontal: true,			
			vertical: true,
        },settings);
		
		var width = thisObj.width();
		var height = thisObj.height();
		var offset_x = settings['frame_width'] - width;
		var offset_y = settings['frame_height'] - height;
		
		thisObj.css('padding', '0');
		thisObj.css('overflow', 'hidden');
		thisObj.css('position', 'relative');
		thisObj.css('list-style', 'none');
				
		var lis = thisObj.find('li');
		lis.css('padding', '0');
		lis.css('margin', '0');
		lis.css('position', 'absolute');
		lis.css('width', settings['frame_width']);
		lis.css('height', settings['frame_height']);
		
		if (settings['horizontal']) 
			lis.css('left', (width - settings['frame_width']) / 2);
		else lis.css('left', '0');
			
		if (settings['vertical']) 
			lis.css('top', (height - settings['frame_height']) / 2);
		else lis.css('top', '0');
			
		thisObj.pos_x = 0;
		thisObj.pos_y = 0;
		
		thisObj.mousemove(function(e){
			if (settings['horizontal']) {
				var x = e.clientX - thisObj.offset().left;
				thisObj.pos_x = x / width * offset_x - offset_x / 2;
			}
			if (settings['vertical']) {
				var y = e.clientY - thisObj.offset().top;
				thisObj.pos_y = y / height * offset_y - offset_y / 2;
			}
		});
		
		function smart3d_animate(){
			for (var i=1; i<=lis.length; i++){
				if ((settings['last_is_static']) && (i == lis.length))
					continue;
				if ((settings['first_is_static']) && (i == 1))
					continue;
				
				if (settings['horizontal']) {
					var cur_l = parseFloat(jQuery(lis[i-1]).css('left'));
					var new_l = thisObj.pos_x * (i / lis.length) - offset_x / 2;
					//if (Math.abs(cur_l - new_l) > 1)
						jQuery(lis[i-1]).css('left', (new_l + cur_l*6) / 7);
				}
				if (settings['vertical']) {
					var cur_l = parseFloat(jQuery(lis[i-1]).css('top'));
					var new_l = thisObj.pos_y * (i / lis.length) - offset_y / 2;
					//if (Math.abs(cur_l - new_l) > 1)
						jQuery(lis[i-1]).css('top', (new_l + cur_l*6) / 7);

				}
			}
		}
		setInterval(smart3d_animate, 40);
		return this;
	};
})(jQuery); 