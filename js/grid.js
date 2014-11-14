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
	$('#grids').css('height', (50*this.size));
/*	alert("height set!");*/
	for(k = 0; k < this.size; k++)
	{
		this.cells[k] = [];
	}
	for(i = 0; i < this.size; i++)
		for(j = 0; j < this.size; j++)
			this.cells[i][j] = new Tile(i,j);
/*	$.each(this.cells, function(){
		$('#grids').append('<div class="tile" id="' + this.x + '-' + this.y + '"></div>');
	});*/
	for(i = 0; i < this.size; i++)
		for(j = 0; j < this.size; j++)
			$('#grids').append('<div class="tile" id="' + i + '-' + j + '"></div>');
	this.toolbox.center();
};

Grid.prototype.clear = function() {
	this.cells = [];
}

