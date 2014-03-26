function Tile(x,y){
	this.x = x;
	this.y = y;

	this.number = null;
	this.availible = true;
}

Tile.prototype.updateNumber = function(num) {
	this.number = num;
};