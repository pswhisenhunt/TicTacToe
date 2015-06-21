App.Board = function() {
 this._cells = [
   [null, null, null],
   [null, null, null],
   [null, null, null]
  ]
 };

App.Board.prototype.hasWinner = function() {
  return this._getDownWinner() || this._getAcrossWinner() || this._getLeftDiagonalWinner() || this._getRightDiagonalWiner();
};

App.Board.prototype._getRightDiagonalWiner = function() {
  var numberOfRows = this._cells.length-1;
  var isWinnerX = true;
  var isWinnerO = true;
  for (var i = 0; i <= numberOfRows; i++) {
    if (this._cells[i][numberOfRows - i] !== PLAYER_X) {
      isWinnerX = false;
    }
    if (this._cells[i][numberOfRows - i] !== PLAYER_O) {
      isWinnerO = false;
    }
  }
  if (isWinnerX) {
    return true;
  }
  if (isWinnerO) {
    return true;
  }
};

App.Board.prototype._getLeftDiagonalWinner = function() {
  var isWinnerX = true;
  var isWinnerO = true;
  for (var i = 0; i <= this._cells.length-1; i++) {
    if (this._cells[i][i] !== PLAYER_X) {
      isWinnerX = false;
    }
    if(this._cells[i][i] !== PLAYER_O) {
      isWinnerO = false;
    }
  }
  if (isWinnerX) {
    return true;
  }
  if (isWinnerO) {
    return true;
  }
};

App.Board.prototype._getDownWinner = function() {
  var isWinnerX;
  var isWinnerO;
  for (var i = 0; i <= this._cells.length-1; i++ ) {
    isWinnerX = true;
    isWinnerO = true;
    for (var j = 0; j <= this._cells[i].length-1; j++) {
      if (this._cells[j][i] !== PLAYER_X) {
        isWinnerX = false;
      }
      if (this._cells[j][i] !== PLAYER_O) {
        isWinnerO = false;
      }
    }
    if (isWinnerX) {
      return true;
    }
    if (isWinnerO) {
      return true;
    }
  }
};

App.Board.prototype._getAcrossWinner = function() {
  var isWinnerX;
  var isWinnerO;
  for (var i = 0; i <= this._cells.length-1; i++ ) {
    isWinnerX = true;
    isWinnerO = true;
    for (var j = 0; j <= this._cells[i].length-1; j++) {
      if (this._cells[i][j] !== PLAYER_X) {
          isWinnerX = false;
      }
      if (this._cells[i][j] !== PLAYER_O) {
        isWinnerO = false;
      }
    }
    if (isWinnerX) {
      return true;
    }
    if (isWinnerO) {
      return true;
    }
  }
};

App.Board.prototype.setCell = function(x, y, value) {
  this._cells[x][y] = value;
};

App.Board.prototype.getCells = function() {
  return this._cells;
};
