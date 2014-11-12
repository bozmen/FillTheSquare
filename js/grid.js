function Grid(size){
	this.size = size;
	this.cells = [];
	this.toolbox = new ToolBox();
/*	alert("Grid created!");*/
	this.build();
	//alert("Built!");
}

Grid.prototype.build = function() {
	//alert("I'm in!");
	$('#grids').css('width', 50*this.size);
	//alert("width set!");
	$('#grids').css('height', 50*this.size);
/*	alert("height set!");*/
	for(i = 0; i < this.size; i++)
		for(j = 0; j < this.size; j++)
			this.cells.push(new Tile(i,j));
	$.each(this.cells, function(){
		$('#grids').append('<div class="tile" id="' + this.x + '-' + this.y + '"></div>');
	});
	this.toolbox.center();
};

Grid.prototype.clear = function() {
	this.cells = [];
}

