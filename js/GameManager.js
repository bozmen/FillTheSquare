function GameManager() {
    this.current = 0;
    this.difficulty = 0;
    this.toolbox = new Toolbox();
    this.promptDifficulty($.proxy(function (difficulty) {
        this.grid = new Grid(this.difficulty);
        this.start();
    }, this));
}

GameManager.prototype.promptDifficulty = function (callback) {
    $("#difficulty").show();
    this.toolbox.center();
    var selected = false;
    $('.selection').click($.proxy(function (e) {
        var $diff = e.currentTarget.id;

        if ($diff === 'easy') this.difficulty = 8;
        else if ($diff === 'medium') this.difficulty = 9;
        else if ($diff === 'hard') this.difficulty = 10;
        $('#difficulty').hide();

        callback(this.difficulty);
    }, this));
};

GameManager.prototype.isDifficultySpecified = function() {
	return (this.difficulty === 8 || this.difficulty === 9 || this.difficulty === 10);
};