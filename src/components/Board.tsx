import React, { Component } from 'react';

interface BoardState {
  tiles: number[][],
  turn: number
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
      turn: 1
    };
  }
  
  public render(): JSX.Element {
    return (
      <div className="Board">
        {this.showGameTitle()}
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
          <button key={`${i}${j}`}>
            {this.state.tiles[i][j]}
          </button>
        );
      }
    }
    return (
      <div className="Tiles">
        {items}
      </div>
    );
  }

  private showGameTitle(): JSX.Element {
    return (
      <h1>
        React Tic Tac Toe
      </h1>
    );
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
