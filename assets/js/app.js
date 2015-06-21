var board = new App.Board();
var el = document.getElementsByClassName('game')[0];
var boardView = new App.BoardView(board, el);
boardView.render();
