var Board = require('./Board');
var BoardView = require('./BoardView');

var board = new Board();
var el = $('.game')[0];
var boardView = new BoardView(board, el);
boardView.render();
boardView.bindClickEvents();
