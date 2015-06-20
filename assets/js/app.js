var board = new Board();
var el = document.getElementsByClassName('game')[0];
var boardView = new BoardView(board, el);
boardView.render();
