var Board = require('../assets/js/Board.js');
var assert = require('assert');

describe('TicTacToe', function() {
  describe('#_getRightDiagonalWiner', function() {
    beforeEach(function() {
      this.board = new Board();
    });
    context('when the right diagonal cells in the grid all have a value', function() {
      it('should return a winner if all the cells have the same value', function() {
        this.board.setCell(0,2,'X');
        this.board.setCell(1,1,'X');
        this.board.setCell(2,0,'X');
        var hasWinner = this.board._getRightDiagonalWiner();
        assert.equal(hasWinner, true);
      });
      it('should not return a winner is the cells do not have the same value', function() {
        this.board.setCell(0,2,'O');
        this.board.setCell(1,1,'X');
        this.board.setCell(2,0,'X');
        var hasWinner = this.board._getRightDiagonalWiner();
        assert.notEqual(hasWinner, true);
      });
    })
  });

  describe('#_getLeftDiagonalWinner', function() {
    beforeEach(function() {
      this.board = new Board();
    });
    context('when the left diagonal cells in the grid all have a value', function() {
      it('should return a winner if all the cells have the same value', function() {
        this.board.setCell(0,0,'O');
        this.board.setCell(1,1,'O');
        this.board.setCell(2,2,'O');
        var hasWinner = this.board._getLeftDiagonalWinner();
        assert.equal(hasWinner, true);
      });
      it('should not return a winner if the cells do not have the same value', function() {
        this.board.setCell(0,0,'X');
        this.board.setCell(1,1,'O');
        this.board.setCell(2,2,'O');
        var hasWinner = this.board._getLeftDiagonalWinner();
        assert.notEqual(hasWinner, true);
      });
    });
  });

  describe('#_getDownWinner', function() {
    beforeEach(function() {
      this.board = new Board();
    });
    context('when a column of cells each contain a value', function() {
      it('should return a winner if each of the cell\'s values are the same', function() {
        this.board.setCell(0,0,'O');
        this.board.setCell(1,0,'O');
        this.board.setCell(2,0,'O');
        var hasWinner = this.board._getDownWinner();
        assert.equal(hasWinner, true);

        this.board.setCell(2,2,'O');
        this.board.setCell(0,0,'O');
        this.board.setCell(1,1,'O');
        var hasWinner = this.board._getDownWinner();
        assert.equal(hasWinner, true);
      });
      it('should not return a winner if each of the cells values are not the same', function() {
        this.board.setCell(0,2,'X');
        this.board.setCell(1,0,'O');
        this.board.setCell(2,0,'O');
        var hasWinner = this.board._getDownWinner();
        assert.notEqual(hasWinner, true);
      })
    });

    describe('#_getAcrossWinner', function() {
      beforeEach(function() {
        this.board = new Board();
      });
      context('when a row of cells each contain a value', function() {
        it('should return a winner if each of the cell\'s values are the same', function() {
          this.board.setCell(1,0,'O');
          this.board.setCell(1,1,'O');
          this.board.setCell(1,2,'O');
          var hasWinner = this.board._getAcrossWinner();
          assert.equal(hasWinner, true);
        });
        it('should not return a winner if each of the cells values are not the same', function() {
          this.board.setCell(2,2,'X');
          this.board.setCell(1,0,'O');
          this.board.setCell(2,0,'O');
          var hasWinner = this.board._getAcrossWinner();
          assert.notEqual(hasWinner, true);
        })
      });
    });
  });
});
