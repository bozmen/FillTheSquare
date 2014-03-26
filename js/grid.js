function Grid(size){
	this.size = size;
	this.cells = [];
	//alert("Grid created!");
	this.build();
	//alert("Built!");
}

Grid.prototype.build = function() {
	//alert("I'm in!");
	$('#grids').css('width', 50*this.size);
	//alert("width set!");
	$('#grids').css('height', 50*this.size);
	//alert("height set!");
	for(i = 0; i < this.size; i++)
		for(j = 0; j < this.size; j++)
			this.cells.push(new Tile(i,j));
	$.each(this.cells, function(){
		$('#grids').append('<div class="tile ' + this.x + '-' +  this.y + '"></div>' );
	});
	this.center();
};

Grid.prototype.clear = function() {
	this.cells = [];
}

Grid.prototype.center = function() {
	//alert('Im in center');
	var $width  = parseInt($('#grids').css('width'));
	var $height = parseInt($('#grids').css('height'));
	//alert("centering...");
	$('#grids').css('margin-left', -$width/2);
	$('#grids').css('margin-top', -$height/2);
	//alert("done!");
}