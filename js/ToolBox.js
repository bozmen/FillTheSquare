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

ToolBox.prototype.getX = function(id){
	var mid = id.indexOf('-');
	alert(id.substring(0,mid));
	return parseInt(id.substring(0,mid));
}

ToolBox.prototype.getY = function(id){
	var mid = id.indexOf('-');
	alert(id.substring(mid+1));
	return parseInt(id.substring(mid+1));
}