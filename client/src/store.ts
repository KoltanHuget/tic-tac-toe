import { makeAutoObservable } from "mobx";

class Store {
  squares: string[][] = ([['', '', ''], ['', '', ''], ['', '', '']]);
  turn: string = 'X';
  turnsRemaining: number = 9;
  message: string = `It is ${this.turn}'s turn`
  gameOver: boolean = false

  constructor() {
    makeAutoObservable(this);
  }

  changeTurn() {
    this.turn = this.turn === 'X' ? this.turn = 'O' : this.turn = 'X';
    this.message = `It is ${this.turn}'s turn`
    console.log(this.turn)
    this.decrementTurns();
    this.checkWinner();
  }

  decrementTurns() {
    if (this.turnsRemaining > 1) {
      this.turnsRemaining--
    } else {
      this.message = 'GAME OVER.'
      this.gameOver = true;
    }
  }

  reset() {
    this.squares = ([['', '', ''], ['', '', ''], ['', '', '']]);
    this.turn = 'X'
    this.turnsRemaining = 9;
    this.message = `It is ${this.turn}'s turn`
    this.gameOver = false;
  }

  checkWinner() {
    if (this.turnsRemaining > 4) return;
    const toCheckArray: [string, string] = ['X', 'O']
    for (let toCheck of toCheckArray) {
      if (this.squares[0][0] === toCheck && this.squares[1][0] === toCheck && this.squares[2][0] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[0][1] === toCheck && this.squares[1][1] === toCheck && this.squares[2][1] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[0][2] === toCheck && this.squares[1][2] === toCheck && this.squares[2][2] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[1][0] === toCheck && this.squares[1][1] === toCheck && this.squares[1][2] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[0][0] === toCheck && this.squares[0][1] === toCheck && this.squares[0][2] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[2][0] === toCheck && this.squares[2][1] === toCheck && this.squares[2][2] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[0][0] === toCheck && this.squares[1][1] === toCheck && this.squares[2][2] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }
      if (this.squares[0][2] === toCheck && this.squares[1][1] === toCheck && this.squares[2][0] === toCheck) {
        this.message = `${toCheck} wins`
        this.gameOver = true;
        return;
      }

    }
  }

}

const store = new Store();
export default store;