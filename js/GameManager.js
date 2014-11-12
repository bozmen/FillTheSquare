var Game = {};
Game.fps = 50;
Game.current = 0;
Game.difficulty = 0;
Game.toolbox = new ToolBox();
Game.grid = 0;
Game.isFinished = false;

Game.promptDifficulty = function(callback){
    $("#difficulty").show();
    $("#start-text").hide();
    Game.toolbox.center();
    this.selected = false;
    $('.selection').click(function(event){
        var $diff = event.target.id;

        if ($diff === 'easy') Game.difficulty = 8;
        else if ($diff === 'medium') Game.difficulty = 9;
        else if ($diff === 'hard') Game.difficulty = 10;
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
    for(cellIndex in Game.grid.cells)
    {
        var cell = Game.grid.cells[cellIndex];
        cell.availible = true;
        if(cell.availible == true)
        {
            $("#" + cell.x + "-" + cell.y).toggleClass('clickable');
        }
    }
}

Game.update = function(){
    alert("in?");
    this.isClicked = false;
    var clickedX;   
    var clickedY;
    $('.tile').click(function(event)
    {
        alert(event.target.id);
    });
};