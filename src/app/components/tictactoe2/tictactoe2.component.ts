import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

interface FieldState {
  sign: string;
  row?: number;

  column?: number;
}

@Component({
  selector: 'app-tictactoe2',
  templateUrl: './tictactoe2.component.html',
  styleUrls: ['./tictactoe2.component.scss'],
})
export class Tictactoe2Component implements OnInit {
  size = 3;
  fields: Array<FieldState> = [];
  turn = 'o';
  localStateName = `TicTocState${this.size}`;
  @ViewChild('winner') winner: any;
  lastSign$ = new Subject<number>();

  constructor(private dialog: MatDialog) {
    if (!!localStorage[this.localStateName]) {
      this.fields = JSON.parse(localStorage[this.localStateName]);
    } else {
      this.reset();
    }
    this.lastSign$.subscribe((lastSign) => {
      console.log(lastSign * 5);
    });
  }

  ngOnInit(): void {
    this.lastSign$.subscribe((x) => {
      console.log('OSTATNIA LITERA: ', x);
    });
  }

  reset() {
    this.fields = [];
    for (let x = 0; x < this.size * this.size; x++) {
      this.fields.push({ sign: null });
    }
    delete localStorage[this.localStateName];
  }

  onClick(index: number) {
    this.lastSign$.next(index);
    if (this.fields[index].sign === null) {
      this.fields[index].sign = this.turn;
      this.turn = this.turn === 'o' ? 'x' : 'o';
    }

    this.calculateWin();
  }

  calculateWin() {
    const rows: Array<Array<string>> = [];
    const columns: Array<Array<string>> = [];
    const diagonal: Array<string> = [];
    const diagonal2: Array<string> = [];
    this.fields.forEach(({ sign }, index) => {
      const column = index % this.size;
      const row = Math.floor(index / this.size);
      // this.fields[index].column = column;
      // this.fields[index].row = row;
      if (!!!rows[row]) {
        rows[row] = [];
      }
      rows[row].push(sign);
      if (!!!columns[column]) {
        columns[column] = [];
      }
      columns[column].push(sign);
      if (column === row) {
        diagonal.push(sign);
      }
      if (row === this.size - column - 1) {
        diagonal2.push(sign);
      }
    });

    const rowWin = rows.filter(
      (row) =>
        row[0] !== null && row.filter((a) => a === row[0]).length === this.size
    ).length;
    const columnWin = columns.filter(
      (column) =>
        column[0] !== null &&
        column.filter((a) => a === column[0]).length === this.size
    ).length;
    const diagonal1Win =
      diagonal.filter((a) => a !== null && a === diagonal[0]).length ===
      this.size;
    const diagonal2Win =
      diagonal2.filter((a) => a !== null && a === diagonal2[0]).length ===
      this.size;

    if (rowWin || columnWin || diagonal1Win || diagonal2Win) {
      console.log('WIN');
      const ref = this.dialog.open(this.winner);
      ref.afterClosed().subscribe(() => {
        this.reset();
      });
    } else {
      localStorage[this.localStateName] = JSON.stringify(this.fields);
    }
  }
}
