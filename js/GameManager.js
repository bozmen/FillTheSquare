var Game = {};
Game.fps = 50;
Game.current = 1;
Game.difficulty = 0;
Game.toolbox = new ToolBox();
Game.grid = 0;
Game.isFinished = false;
Game.stopped = true;
Game.clickedX = -1;
Game.clickedY = -1;

Game.promptDifficulty = function(callback){
    $("#difficulty").show();
    $("#start-text").hide();
    Game.toolbox.center();
    this.selected = false;
    $('.selection').click(function(event){
        var $diff = event.target.id;

        if ($diff === 'easy') Game.difficulty = 7;
        else if ($diff === 'medium') Game.difficulty = 10;
        else if ($diff === 'hard') Game.difficulty = 13;
        $('#difficulty').hide();
        $("#start-text").show();
        callback(Game.difficulty);
    });
}

Game.isDifficultySpecified = function(){
    return (this.difficulty === 8 || this.difficulty === 9 || this.difficulty === 10);
}

Game.initiateGame = function(difficulty){
    Game.grid = new Grid(difficulty);
    for(cellX in Game.grid.cells)
    {
        for(cellY in Game.grid.cells[cellX])
        {
            var cell = Game.grid.cells[cellX][cellY];
            cell.availible = true;
            if(cell.availible == true)
            {
                $("#" + cellX + "-" + cellY).addClass('clickable');
            }
        }
    }
    Game.startGame();
}

Game.updateGame = function(x, y){

    Game.grid.cells[x][y].occupied = true;

    var curSize = Game.grid.size-1;

    if(x-2 >= 0 && y-2 >= 0) // northwest
    {
        Game.grid.cells[x-2][y-2].availible = true;
        // alert("nw");
    }
    if(y-3 >= 0) // north
    {
        Game.grid.cells[x][y-3].availible = true;
        // alert("n");
    }
    if(x+2 <= curSize && y-2 >= 0) // northeast
    {
        Game.grid.cells[x+2][y-2].availible = true;
        // alert("ne");
    }
    if(x+3 <= curSize) // east
    {
        Game.grid.cells[x+3][y].availible = true;
        // alert("e");
    }
    if(x+2 <= curSize && y+2 <= curSize) // southeast
    {
        Game.grid.cells[x+2][y+2].availible = true;
        // alert("se");
    }
    if(y+3 <= curSize) // south
    {
        Game.grid.cells[x][y+3].availible = true;
        // alert("s");
    }
    if(x-2 >= 0 && y+2 <= curSize) // southwest
    {
        Game.grid.cells[x-2][y+2].availible = true;
        // alert("sw");
    }
    if(x-3 >= 0) // west
    {
        Game.grid.cells[x-3][y].availible = true;
        // alert("w");
    }

    Game.updateView();

    $('.clickable').on("click", function(event)
    {
        var clickedX = Game.toolbox.getX(event.target.id);
        var clickedY = Game.toolbox.getY(event.target.id);
        $('.clickable').off("click");
        $("#" + clickedX + "-" + clickedY).append(Game.current++);
        Game.clearCells();
        $()
        Game.updateGame(clickedX, clickedY);
    });
}

Game.startGame = function(){
    $('.clickable').on("click", function(event)
    {
        var clickedX = Game.toolbox.getX(event.target.id);
        var clickedY = Game.toolbox.getY(event.target.id);
        $('.clickable').off("click");
        Game.clearCells();
        $('#start-text').hide();
        $("#" + clickedX + "-" + clickedY).append(Game.current++);
        Game.updateGame(clickedX, clickedY);
        return;
    });
};

Game.updateView = function()
{
    for(cellX in Game.grid.cells)
    {
        for(cellY in Game.grid.cells[cellX])
        {
            var cell = Game.grid.cells[cellX][cellY];
            if(cell.availible == true && cell.occupied == false)
            {
                $("#" + cellX + "-" + cellY).addClass('clickable');
            }
        }
    }
}

Game.clearCells = function()
{
    for(cellX in Game.grid.cells)
    {
        for(cellY in Game.grid.cells[cellX])
        {
            var cell = Game.grid.cells[cellX][cellY];
            cell.availible = false;
            $("#" + cellX + "-" + cellY).removeClass('clickable');
        }
    }
}