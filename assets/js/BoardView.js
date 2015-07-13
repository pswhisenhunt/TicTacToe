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
