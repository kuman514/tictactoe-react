import React, { Component } from 'react';

interface BoardState {
  tiles: number[][],
  turn: number,
  remain: number,
  winner: number
}

interface BoardProps {
  // Not defined yet
}

class Board extends Component<BoardProps, BoardState> {
  public constructor(props: BoardProps) {
    super(props);
    this.state = {
      tiles: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      turn: 1,
      remain: 9,
      winner: 0
    };
  }
  
  public render(): JSX.Element {
    return (
      <div className="Board">
        {this.showTiles()}
        {this.showCurrentTurn()}
      </div>
    );
  }

  private showTiles(): JSX.Element {
    let items: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        items.push(
          <button className={`player${this.state.tiles[i][j]}`} key={`button-${i}${j}`} value={`${i}${j}`}>
            {this.state.tiles[i][j]}
          </button>
        );
      }
    }
    return (
      <div className="Tiles" onMouseDown={(e) => {
        e.preventDefault();
        const [r, c]: string = (e.target as HTMLButtonElement).value;
        this.setTile(Number(r), Number(c));
      }}>
        {items}
      </div>
    );
  }

  private setTile(row: number, column: number): void {
    if (this.state.tiles[row][column] === 0) {
      let newTile: number[][] = Array.from({length: 3}, (value, index) => {
        return Array.from(this.state.tiles[index]);
      });
      newTile[row][column] = this.state.turn;

      let newTurn = 1;
      if (this.state.turn === 1) {
        newTurn = 2;
      }

      this.setState({
        tiles: newTile,
        turn: newTurn,
        remain: this.state.remain - 1
      });
    }
  }

  private showCurrentTurn(): JSX.Element {
    return (
      <h2>
        Player {this.state.turn}'s turn!
      </h2>
    );
  }
}

export default Board;
