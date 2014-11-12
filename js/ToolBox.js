function ToolBox(){
	this.a = 0;
}

ToolBox.prototype.center = function() {
	//alert('Im in center');
	$.each($('.centered'),function(){
		var $width  = parseInt($(this).css('width'));
		var $height = parseInt($(this).css('height'));
		//alert("centering...");
		$(this).css('margin-left', -$width/2);
		$(this).css('margin-top', -$height/2);
		//alert("done!");
	})
}