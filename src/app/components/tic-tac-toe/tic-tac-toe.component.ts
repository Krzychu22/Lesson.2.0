import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  sign = 'o';
  sign1 = '';
  number1 = true;
  sign2 = '';
  number2 = true;
  sign3 = '';
  number3 = true;
  sign4 = '';
  number4 = true;
  sign5 = '';
  number5 = true;
  sign6 = '';
  number6 = true;
  sign7 = '';
  number7 = true;
  sign8 = '';
  number8 = true;
  sign9 = '';
  number9 = true;
  change = true;
  variable = false;

  @ViewChild('winer') winer: TemplateRef<HTMLElement>;

  constructor(private dialog: MatDialog) {

  }

  drawsign(what) {
    switch (what) {
      case 1 :
        if (this.number1) {
          this.sign1 = this.sign;
          this.number1 = false;
          this.variable = true;
        }
        break;
      case 2 :
        if (this.number2) {
          this.sign2 = this.sign;
          this.number2 = false;
          this.variable = true;
        }
        break;
      case 3 :
        if (this.number3) {
          this.sign3 = this.sign;
          this.number3 = false;
          this.variable = true;
        }
        break;
      case 4 :
        if (this.number4) {
          this.sign4 = this.sign;
          this.number4 = false;
          this.variable = true;
        }
        break;
      case 5 :
        if (this.number5) {
          this.sign5 = this.sign;
          this.number5 = false;
          this.variable = true;
        }
        break;
      case 6:
        if (this.number6) {
          this.sign6 = this.sign;
          this.number6 = false;
          this.variable = true;
        }
        break;
      case 7:
        if (this.number7) {
          this.sign7 = this.sign;
          this.number7 = false;
          this.variable = true;
        }
        break;
      case 8 :
        if (this.number8) {
          this.sign8 = this.sign;
          this.number8 = false;
          this.variable = true;
        }
        break;
      case 9:
        if (this.number9) {
          this.sign9 = this.sign;
          this.number9 = false;
          this.variable = true;
        }
        break;
    }
    switch (this.sign1) {
      case 'x':
        switch (this.sign2) {
          case 'x':
            switch (this.sign3) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign4) {
          case 'x':
            switch (this.sign7) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    switch (this.sign9) {
      case 'x':
        switch (this.sign8) {
          case 'x':
            switch (this.sign7) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign6) {
          case 'x':
            switch (this.sign3) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    switch (this.sign1) {
      case 'o':
        switch (this.sign2) {
          case 'o':
            switch (this.sign3) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign4) {
          case 'o':
            switch (this.sign7) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    switch (this.sign9) {
      case 'o':
        switch (this.sign8) {
          case 'o':
            switch (this.sign7) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign6) {
          case 'o':
            switch (this.sign3) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    switch (this.sign5) {
      case 'x':
        switch (this.sign1) {
          case 'x':
            switch (this.sign9) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign2) {
          case 'x':
            switch (this.sign8) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign3) {
          case 'x':
            switch (this.sign7) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign4) {
          case 'x':
            switch (this.sign6) {
              case 'x':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    switch (this.sign5) {
      case 'o':
        switch (this.sign1) {
          case 'o':
            switch (this.sign9) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign2) {
          case 'o':
            switch (this.sign8) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign3) {
          case 'o':
            switch (this.sign7) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        switch (this.sign4) {
          case 'o':
            switch (this.sign6) {
              case 'o':
                this.dialog.open(this.winer);
                break;
            }
            break;
        }
        break;
    }
    if (this.variable) {
      switch (this.change) {
        case true :
          this.change = false;
          this.sign = 'x';
          this.variable = false;
          break;
        case false :
          this.change = true;
          this.sign = 'o';
          this.variable = false;
          break;
      }
    }
  }

  reset() {
    this.sign = 'o';
    this.sign1 = '';
    this.number1 = true;
    this.sign2 = '';
    this.number2 = true;
    this.sign3 = '';
    this.number3 = true;
    this.sign4 = '';
    this.number4 = true;
    this.sign5 = '';
    this.number5 = true;
    this.sign6 = '';
    this.number6 = true;
    this.sign7 = '';
    this.number7 = true;
    this.sign8 = '';
    this.number8 = true;
    this.sign9 = '';
    this.number9 = true;
    this.change = true;
    this.variable = false;
  }

  ngOnInit(): void {
  }
}
