function BoardView(board, el) {
  this.board = board;
  this.el = el;
  this._currentPlayer = PLAYER_X;
};

BoardView.prototype.render = function() {
  var template = [];
  var data = this.board.getCells();
  var templateCell = document.getElementById('template-board').innerHTML;
  var compiled = _.template(templateCell);
  el.innerHTML = compiled({data: data});
};

BoardView.prototype.displayWinner = function() {
  var winner = document.getElementById('winner');
  winner.style.display = 'block';
};

BoardView.prototype.setCell = function(element) {
  if (!element.innerHTML) {
    var row = element.dataset.row;
    var column = element.dataset.column;
    this.board.setCell(row, column, this._currentPlayer);
    this._currentPlayer = this._currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    if (this.board.hasWinner()) {
      this.displayWinner();
    }
    this.render();
  }
  return;
};

BoardView.prototype.reset = function() {
  var resetBtn = document.getElementsByClassName('reset')[0];
  var winner = document.getElementById('winner');
  var cells = this.board.getCells();
  for (var i = 0; i <= cells.length-1; i++) {
    for (var j = 0; j <= cells.length-1; j++) {
      this.board.setCell(i, j, '');
    }
  }
  winner.style.display = 'none';
  this.render();
};
