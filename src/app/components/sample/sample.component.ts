import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit {
  title = 'Powitanie';
  name = 'krzysiek';
  symbol1 = '';
  symbol2 = '';

  constructor() {}

  ngOnInit(): void {
    this.say('dzień dobry');
  }

  say(what) {
    this.name = what;
  }

  say1(what) {
    this.symbol1 = '!';
    this.say(what);
  }

  say2(what) {
    this.symbol2 = '!';
    this.say(what);
  }
}
