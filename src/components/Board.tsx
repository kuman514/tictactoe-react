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
        let mark = '';
        switch (this.state.tiles[i][j]) {
          case 1:
            mark = 'O';
            break;
          case 2:
            mark = 'X';
            break;
        }
        items.push(
          <button className={`player${this.state.tiles[i][j]}`} key={`button-${i}${j}`} value={`${i}${j}`}>
            {mark}
          </button>
        );
      }
    }
    return (
      <div className="Tiles" onMouseDown={(e) => {
        e.preventDefault();
        if ((e.target as Element).className.search('player') === -1) {
          console.log('EDGE');
          return;
        }
        const r: string = (e.target as HTMLButtonElement).value[0];
        const c: string = (e.target as HTMLButtonElement).value[1];
        const rn: number = Number(r);
        const cn: number = Number(c);
        if (rn < 0 || rn >= 3) {
          return;
        }
        if (cn < 0 || cn >= 3) {
          return;
        }
        this.setTile(rn, cn);
      }}>
        {items}
      </div>
    );
  }

  private setTile(row: number, column: number): void {
    if (this.state.tiles[row][column] === 0 && this.state.remain > 0 && this.state.winner === 0) {
      let newTile: number[][] = Array.from({length: 3}, (value, index) => {
        return Array.from(this.state.tiles[index]);
      });
      newTile[row][column] = this.state.turn;

      let newTurn = 1;
      if (this.state.turn === 1) {
        newTurn = 2;
      }

      const result = this.examineTiles(newTile);

      this.setState({
        tiles: newTile,
        turn: newTurn,
        remain: this.state.remain - 1,
        winner: result
      });
    }
  }

  private showCurrentTurn(): JSX.Element {
    if (this.state.winner !== 0) {
      return (
        <div className="Result">
          <h2>
            Player {this.state.winner} wins!
          </h2>
          {this.showResetButton()}
        </div>
      );
    }

    if (this.state.remain === 0) {
      return (
        <div className="Result">
          <h2>
            Draw.
          </h2>
          {this.showResetButton()}
        </div>
      );
    }
    
    return (
      <div className="Result">
        <h2>
          Player {this.state.turn}'s turn!
        </h2>
        {this.showResetButton()}
      </div>
    );
  }

  private examineTiles(newTile: number[][]): number {
    // Across
    for (let i = 0; i < 3; i++) {
      let first = newTile[i][0];
      if (first === 0) {
        continue;
      }
      let found = true;
      for (let j = 1; j < 3; j++) {
        if (first !== newTile[i][j]) {
          found = false;
          break;
        }
      }
      if (found) {
        return first;
      }
    }

    // Down
    for (let i = 0; i < 3; i++) {
      let first = newTile[0][i];
      if (first === 0) {
        continue;
      }
      let found = true;
      for (let j = 1; j < 3; j++) {
        if (first !== newTile[j][i]) {
          found = false;
          break;
        }
      }
      if (found) {
        return first;
      }
    }

    // Diagonal
    if (newTile[0][0] !== 0 && newTile[0][0] === newTile[1][1] && newTile[1][1] === newTile[2][2]) {
      return newTile[0][0];
    }
    if (newTile[0][2] !== 0 && newTile[0][2] === newTile[1][1] && newTile[1][1] === newTile[2][0]) {
      return newTile[0][2];
    }

    return 0;
  }

  private showResetButton(): JSX.Element {
    return (
      <button className="RematchButton" onClick={() => {
        this.reset();
      }}>
        Rematch
      </button>
    );
  }

  private reset(): void {
    this.setState({
      tiles: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ],
      turn: 1,
      remain: 9,
      winner: 0
    });
  }
}

export default Board;
