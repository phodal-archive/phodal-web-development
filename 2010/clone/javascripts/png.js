$(document).ready(function(){

	function correctPNG()
	   {
	   for(var i=0; i<$("img.png").length; i++)
	      {
	     var img = $("img.png")[i]
	     var imgName = img.src.toUpperCase()


	       var imgID = (img.id) ? "id='" + img.id + "' " : ""
	       var imgClass = (img.className) ? "class='" + img.className + "' " : ""
	       var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' "
	       var imgStyle = "display:inline-block;" + img.style.cssText
	       if (img.align == "left") imgStyle = "float:left;" + imgStyle
	       if (img.align == "right") imgStyle = "float:right;" + imgStyle
	       if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle     
	       var strNewHTML = "<span " + imgID + imgClass + imgTitle
	       + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
	        + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
	       + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>"
	       img.outerHTML = strNewHTML
	       i = i-1

	        }
	   }

	 correctPNG();

});
