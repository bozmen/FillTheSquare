function Tile(x,y){
	this.x = x;
	this.y = y;

	this.number = null;
	this.availible = false;
	this.occupied = false;
}

Tile.prototype.updateNumber = function(num) {
	this.number = num;
}

Tile.prototype.getX = function()
{
	return this.x;
}

Tile.prototype.getY = function()
{
	return this.y;
};