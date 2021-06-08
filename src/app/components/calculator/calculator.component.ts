import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  symbols1 = '';
  symbols2 = '';
  display = '';
  isSign = false;
  lastSign = '';
  NaN = false;

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    console.log(event.key);
    // switch (event.key) {
    //   case '1':
    //   case '2':
    //   case '3':
    //   case '4':
    //   case '5':
    //   case '6':
    //   case '7':
    //   case '8':
    //   case '9':
    //   case '0':
    //     this.number(Number(event.key))
    //     break;
    //   case '+':
    //   case '-':
    //   case '*':
    //   case '/':
    //     this.sign(event.key)
    //     break;
    //
    // }
    if (
      ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].indexOf(event.key) !==
      -1
    ) {
      this.number(Number(event.key));
    }
    if (['+', '-', '*', '/'].indexOf(event.key) !== -1) {
      this.sign(event.key);
    }
    if (['=', 'Enter'].indexOf(event.key) !== -1) {
      this.result(event.key);
    }
    if (['Backspace'].indexOf(event.key) !== -1) {
      this.remove(event.key);
    }
  }

  ngOnInit(): void {}

  number(what: number) {
    console.log(what);
    if (this.isSign) {
      this.isSign = false;
      this.NaN = true;
      this.symbols2 = this.symbols1; // tworzenie liczy 2
      this.lastSign = this.display; // zapisywanie znaku
      this.display = '';
    }
    this.display = this.display + what; // tworzenie liczb
    this.symbols1 = this.display;
  }

  sign(what) {
    console.log(what);
    if (this.NaN) {
      this.NaN = false;
      this.lastSign = what;
      this.display = this.symbols1;
    }
    this.symbols1 = this.display;
    this.isSign = true;
    this.NaN = true;
    this.display = what; // pokazywanie znak
  }

  remove(what) {
    this.display = this.display.substr(0, this.display.length - 1);
  }

  result(what) {
    switch (this.lastSign) {
      case '+': // dodawanie
        this.NaN = false;
        this.display = String(Number(this.symbols2) + Number(this.symbols1));
        break;
      case '-': // odejmowanie
        this.NaN = false;
        this.display = String(Number(this.symbols2) - Number(this.symbols1));
        break;
      case '*': // mnożenie
        this.NaN = false;
        this.display = String(Number(this.symbols2) * Number(this.symbols1));
        break;
      case '/': // dzielenie
        this.NaN = false;
        this.display = String(Number(this.symbols2) / Number(this.symbols1));
        break;
    }
  }
}
