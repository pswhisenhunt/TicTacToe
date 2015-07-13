(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var constants = require('./constants');

var Board = function() {
 this._cells = [
   [null, null, null],
   [null, null, null],
   [null, null, null]
  ]
 };

Board.prototype.hasWinner = function() {
  return this._getDownWinner() || this._getAcrossWinner() || this._getLeftDiagonalWinner() || this._getRightDiagonalWiner();
};

Board.prototype._getRightDiagonalWiner = function() {
  var numberOfRows = this._cells.length-1;
  var isWinnerX = true;
  var isWinnerO = true;
  for (var i = 0; i <= numberOfRows; i++) {
    if (this._cells[i][numberOfRows - i] !== constants.PLAYER_X) {
      isWinnerX = false;
    }
    if (this._cells[i][numberOfRows - i] !== constants.PLAYER_O) {
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

Board.prototype._getLeftDiagonalWinner = function() {
  var isWinnerX = true;
  var isWinnerO = true;
  for (var i = 0; i <= this._cells.length-1; i++) {
    if (this._cells[i][i] !== constants.PLAYER_X) {
      isWinnerX = false;
    }
    if(this._cells[i][i] !== constants.PLAYER_O) {
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

Board.prototype._getDownWinner = function() {
  var isWinnerX;
  var isWinnerO;
  for (var i = 0; i <= this._cells.length-1; i++ ) {
    isWinnerX = true;
    isWinnerO = true;
    for (var j = 0; j <= this._cells[i].length-1; j++) {
      if (this._cells[j][i] !== constants.PLAYER_X) {
        isWinnerX = false;
      }
      if (this._cells[j][i] !== constants.PLAYER_O) {
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

Board.prototype._getAcrossWinner = function() {
  var isWinnerX;
  var isWinnerO;
  for (var i = 0; i <= this._cells.length-1; i++ ) {
    isWinnerX = true;
    isWinnerO = true;
    for (var j = 0; j <= this._cells[i].length-1; j++) {
      if (this._cells[i][j] !== constants.PLAYER_X) {
          isWinnerX = false;
      }
      if (this._cells[i][j] !== constants.PLAYER_O) {
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

Board.prototype.setCell = function(x, y, value) {
  this._cells[x][y] = value;
};

Board.prototype.getCells = function() {
  return this._cells;
};

module.exports = Board;

},{"./constants":4}],2:[function(require,module,exports){
var constants = require('./constants');

var BoardView = function(board, el) {
  this.board = board;
  this.el = el;
  this._currentPlayer = constants.PLAYER_X;
};

BoardView.prototype.render = function() {
  var template = [];
  var data = this.board.getCells();
  var templateCell = document.getElementById('template-board').innerHTML;
  var compiled = _.template(templateCell);
  this.el.innerHTML = compiled({data: data});
};

BoardView.prototype.displayWinner = function() {
  var winner = document.getElementById('winner');
  winner.style.display = 'block';
};

BoardView.prototype.bindClickEvents = function() {
  var tableCells = document.getElementsByClassName('tcell');
  var boardview = this;
  for (var i = 0; i <= tableCells.length-1; i++) {
    tableCells[i].addEventListener('click', function(event){
      boardview.setCell(event.currentTarget);
    });
  };
  var reset = document.getElementsByClassName('reset')[0];
  reset.addEventListener('click', function() {
    boardview.reset();
  });
};

BoardView.prototype.setCell = function(element) {
  if (!element.innerHTML) {
    var row = element.dataset.row;
    var column = element.dataset.column;
    this.board.setCell(row, column, this._currentPlayer);
    this._currentPlayer = this._currentPlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X;
    if (this.board.hasWinner()) {
      this.displayWinner();
    }
    this.render();
    this.bindClickEvents();
  }
  return;
};

BoardView.prototype.reset = function() {
  var winner = document.getElementById('winner');
  var cells = this.board.getCells();
  for (var i = 0; i <= cells.length-1; i++) {
    for (var j = 0; j <= cells.length-1; j++) {
      this.board.setCell(i, j, '');
    }
  }
  winner.style.display = 'none';
  this.render();
  this.bindClickEvents();
};

module.exports = BoardView;

},{"./constants":4}],3:[function(require,module,exports){
var Board = require('./Board');
var BoardView = require('./BoardView');

var board = new Board();
var el = $('.game')[0];
var boardView = new BoardView(board, el);
boardView.render();
boardView.bindClickEvents();

},{"./Board":1,"./BoardView":2}],4:[function(require,module,exports){

var Contants = {
  PLAYER_X: 'X',
  PLAYER_O: 'O'
}

module.exports = Contants;

},{}]},{},[1,2,3,4]);
