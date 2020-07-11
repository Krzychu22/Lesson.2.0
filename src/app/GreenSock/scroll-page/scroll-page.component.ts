import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {SplitText} from 'gsap/SplitText';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.scss']
})

export class ScrollPageComponent implements OnInit {
  @ViewChild('page', {
    static: true,
  }) page: ElementRef<HTMLElement>;

  constructor() {
  }

  ngOnInit() {
    gsap.timeline({
      yoyo: true,
      repeat: 1000
    })
      .from(this.page.nativeElement.querySelectorAll('.balloon'), {
        duration: 2,
        backgroundColor: 'green',
        y: -100,
      }).from(this.page.nativeElement.querySelectorAll('.triangle'), {
      duration: 2,
      borderBottom: 'solid 20px green',
    }, '<');
    gsap.registerPlugin(ScrollTrigger);
    const block = this.page.nativeElement.querySelector('.hello');
    const split = new SplitText(block, {type: 'chars, words'});

    function random(min, max) {
      return (Math.random() * (max - min)) + min;
    }

    for (let i = 0; i <= split.chars.length; i++) {
      gsap.to(split.chars[i], {
        scrollTrigger: {
          trigger: block,
          start: 'bottom 54%',
          end: 'top 20%',
          scrub: true,
          // markers: true,
          toggleActions: 'restart none reverse pause'
        },
        x: random(-200, 200),
        y: random(-200, 200),
        z: random(-200, 200),
        rotation: random(-660, 660),
        scale: 0,
        repeatDelay: 1,
      });
    }
    const tl = gsap.timeline();
    const page2 = this.page.nativeElement.querySelector('.page2');
    const page3 = this.page.nativeElement.querySelector('.page3');
    tl.from(page3, {
      duration: 3,
      yPercent: 100
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: page2,
      start: 'top top',
      end: '+=1000',
      pinSpacing: false,
      // markers: true,
      scrub: true,
      pin: true,
        anticipatePin: 1
    });
  }
  animationBall() {
const tl = gsap.timeline();
const button = this.page.nativeElement.querySelectorAll('.button');

  }
}
