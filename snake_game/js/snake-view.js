(function () {
  if (typeof Snakes === "undefined") {
    window.Snakes = {};
  }
  var View = Snakes.View = function ($el) {
    this.$el = $el;
    this.board = new Snakes.Board();
    this.listener = this.bindKeyHandlers();
    setInterval(this.step.bind(this), 300);
  };
  
  View.prototype.bindKeyHandlers = function () {
    var that = this;
    this.$el.on("keydown", function(event) {
      console.log("key!");
      that.handleKeyEvent(event);
    });
  }
  
  // View.prototype.render = function(){
  //
  // }
  View.prototype.step = function () {
      this.board.tick();
    this.$el.html("<pre>" + this.board.render() + "</pre>");
  }
  
  View.prototype.handleKeyEvent = function (event) {
    console.log("in keyhandler!");
    if (event.keyCode === 37) {
      this.board.snake.turn("W");
    } else if (event.keyCode === 38) {
      this.board.snake.turn("N");
    } else if (event.keyCode === 39) {
      this.board.snake.turn("E");
    } else if (event.keyCode === 40) {
      this.board.snake.turn("S");
    }
  }
})();