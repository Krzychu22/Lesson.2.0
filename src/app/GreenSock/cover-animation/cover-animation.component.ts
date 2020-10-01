import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);

@Component({
  selector: 'app-cover-animation',
  templateUrl: './cover-animation.component.html',
  styleUrls: ['./cover-animation.component.scss'],
})
export class CoverAnimationComponent implements AfterViewInit {
  @Input() url: string;
  @Input() title: string;
  last = 0;

  get parsedText() {
    console.log();
    return this.title.split(' ');
  }

  @ViewChild('cover', {
    static: true,
  })
  cover: ElementRef<HTMLElement>;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    const { width } = this.elRef.nativeElement.getBoundingClientRect();
    const wPage = width;
    const title = this.cover.nativeElement.querySelectorAll('.title');
    const {} = title.item(1);
    const tl = gsap.timeline();

    for (let i = 0; i <= title.length - 1; i++) {
      const split = new SplitText(title[i], { type: 'chars' });
      for (let j = 0; j <= split.chars.length - 1; j++) {
        const { width } = split.chars[j].getBoundingClientRect();
        this.last = this.last + width;
      }
      this.last += 15;
    }
    const stringWidth = this.last;
    this.last = 0;

    for (let i = 0; i <= title.length - 1; i++) {
      tl.set(title[i], {
        x: this.last + (wPage / 100) * 50 - stringWidth / 2,
      });
      const split = new SplitText(title[i], { type: 'chars' });
      for (let j = 0; j <= split.chars.length - 1; j++) {
        tl.to(split.chars[j], {
          visibility: 'visible',
          duration: 1,
        });
        const { width } = split.chars[j].getBoundingClientRect();
        this.last += width;
        // console.log('połowa szerokości słowa', width);
      }
      this.last += 15;
    }
  }
}
