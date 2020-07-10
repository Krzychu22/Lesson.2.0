import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import {ChessInstance, Piece, PieceType, Square} from 'chess.js';
import {MatDialog} from '@angular/material/dialog';

declare var require;
const Chess = require('chess.js');

interface ChessPiece {
  type: PieceType;
  color: 'b' | 'w';
  field: string;
}

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})


export class ChessComponent implements OnInit {
  fields = [];
  numbers = [];
  letters = [];
  pieces: Array<ChessPiece> = [];
  game: ChessInstance = new Chess();
  nextMove = 'b';

  @ViewChild('windows') windows: ElementRef<HTMLElement>;
  @ViewChild('check') check: TemplateRef<HTMLElement>;
  @ViewChild('checkmate') checkmate: TemplateRef<HTMLElement>;

  constructor(private dialog: MatDialog) {
    if (!! localStorage.state) {
      this.game.load(localStorage.state);
    }
    for (let field = 1; field <= 64; field++) {
      const result = field / 8 % 2;
      if (result > 0 && result <= 1) {
        this.fields.push(true);
      } else {
        this.fields.push(false);
      }


    }
    for (let number = 1; number <= 8; number++) {
      this.numbers.push(number);
      this.letters.push(String.fromCharCode(96 + number));
    }
  }

  drawChessBoard() {
    this.pieces = [];
    const current = (this.game.board());
    for (let row = 0; row <= 7; row++) {
      for (let column = 0; column <= 7; column++) {
        const field: Piece = current[row] [column];

        if (field) {
          this.pieces.push({color: field.color, type: field.type, field: `${String.fromCharCode(97 + column)}${8 - row}`});
        }
      }
    }
    if (this.game.in_check()) {
      this.dialog.open(this.check);
      if (this.game.in_checkmate()) {
        this.dialog.closeAll();
        this.dialog.open(this.checkmate);
      }
    }
    this.nextMove = this.game.turn();

  }

  ngOnInit(): void {
    setTimeout(() => this.drawChessBoard(), 0);
    // this.drawchessboard();

  }

  pieceDropped(event: CdkDragEnd) {

    const pawnPosition = event.source.element.nativeElement.getBoundingClientRect();
    console.log('pion', pawnPosition.y);
    const boardPosition = this.windows.nativeElement.getBoundingClientRect();
    console.log(boardPosition.y);
    const row = Math.round((boardPosition.bottom - pawnPosition.bottom) / pawnPosition.height) + 1;
    const column = String.fromCharCode(96 - Math.round((boardPosition.left - pawnPosition.left) / pawnPosition.height) + 1);
    event.source.reset();
    const to: Square = `${column}${row}` as Square;
    if (event.source.data.field !== to && this.game.move({from: event.source.data.field, to})) {
      // const piece = this.pieces.find(piece => piece === event.source.data);
      // piece.field = `${column}${row}`;
      this.drawChessBoard();
      localStorage.state = this.game.fen();
    }


    // const list = event.source.element.nativeElement.classList;
    // list.forEach((value, key, parent) => parent.remove(value));
    // list.add('piece');
    // list.add(`${column}${row}`);
    // list.add(`${event.source.data.color}-${event.source.data.type}`);


  }

  reset() {
    this.game.reset();
    this.drawChessBoard();
    localStorage.removeItem('state');
  }


}
