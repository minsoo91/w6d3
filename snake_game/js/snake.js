(function () {
  if (typeof Snakes === "undefined") {
    window.Snakes = {};
  }
  
  var Snake = Snakes.Snake = function () {
    this.segments = [new Snakes.Coord(5, 5)];
    this.dir = "N";
  };
  
  Snake.prototype.move = function () {
    this.segments.unshift(this.segments[0].plus(this.dir));
    this.segments.pop();
  };
  
  Snake.prototype.turn = function (newDir) {
    this.dir = newDir;
  };
  
  var Coord = Snakes.Coord = function (row, col) {
    this.row = row;
    this.col = col;
  };
  
  Coord.prototype.plus = function (dir) {
    var row = this.row;
    var col = this.col;
    if (dir === "N") {
      row = this.row - 1;
    } else if (dir === "S") {
      row = this.row + 1;
    } else if (dir === "E") {
      col = this.col + 1;
    } else if (dir === "W") {
      col = this.col - 1;
    }
    
    return new Coord(row, col);
  };
  
  var Board = Snakes.Board = function () {
    this.snake = new Snake();
    this.grid = Board.makeGrid();
  }
  
  Board.makeGrid = function () {
    var grid = [];

    for (var i = 0; i < 30; i++) {
      grid.push([]);
      for (var j = 0; j < 30; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  };
  //
  //if typeof Coord(i, j).exists? in this.snake.segment
  
  Board.prototype.render = function () {
    var megaString = "";
    console.log(this.snake.segments);
    for (var i = 0; i < 30; i++) {
      for (var j = 0; j < 30; j++) {
        if (this.grid[i][j] === null) {
            megaString += " . ";
        } else if (this.grid[i][j] == "S"){
          megaString += " S ";
        }
      }
      megaString += '\n';
    }
    return megaString;
  };
  
  Board.prototype.tick = function(){
    this.snake.move();
    this.grid = Board.makeGrid();
    var that = this;
    this.snake.segments.forEach(function(segment){
      if (segment.row >= 0 && segment.row < 30 && segment.col >= 0 && segment.row < 30) {
        that.grid[segment.row][segment.col] = "S"
        return true
      } else {
        return false
      }
    })
    //snake has moved, update grid...
  };
})();

