import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {GSDevTools} from 'gsap/GSDevTools';
import {SplitText} from 'gsap/SplitText';
import {BehaviorSubject} from 'rxjs';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, GSDevTools, SplitText);

interface buttons {
  number: number;
  text: string;
}

@Component({
  selector: 'app-scroll-page',
  templateUrl: './scroll-page.component.html',
  styleUrls: ['./scroll-page.component.scss']
})

export class ScrollPageComponent implements OnInit {
  @ViewChild('page', {
    static: true,
  }) page: ElementRef<HTMLElement>;
  animationMap = new WeakMap();
  click = false;
  window = false;
  lastButton = [];
  lastWindow = [];
  fullWindow = false;
  tl = gsap.timeline();
  buttons$ = new BehaviorSubject<Array<buttons>>([{
    number: 1,
    text: `1. Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
          Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
          laoreet enim.`
  }, {
    number: 2,
    text: `2. Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
          Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
          laoreet enim.`
  }, {
    number: 3,
    text: `3. Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
          Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
          laoreet enim.`
  }, {
    number: 4,
    text: `4. Lorem ipsum dolor sit amet enim. Etiam ullamcorper.
          Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
          Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac,
          laoreet enim.`
  }]);

  constructor(private elRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    gsap.timeline({
      yoyo: true,
      repeat: -1
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
    const split = new SplitText(block, {type: 'chars'});
    const chars = split.chars;


    for (let i = 0; i <= split.chars.length; i++) {
      function random(min, max) {
        return (Math.random() * (max - min)) + min;
      }

      if (chars[i]) {
        gsap.to(chars[i], {
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
    }
    const tl = gsap.timeline();
    const page2 = this.page.nativeElement.querySelector('.page2');
    const page3 = this.page.nativeElement.querySelector('.page3');
    const page = this.page.nativeElement.querySelectorAll('.panel');
    tl.from(page3, {
      yPercent: 100
    });
    ScrollTrigger.create({
      animation: tl,
      trigger: page2,
      start: 'top top',
      end: '+=900',
      pinSpacing: false,
      // markers: true,
      scrub: (page.length - 1),
      pin: true,
      anticipatePin: 1
    });

    const box1 = this.page.nativeElement.querySelector('.box1');
    const box2 = this.page.nativeElement.querySelector('.box2');
    const square = this.page.nativeElement.querySelectorAll('.square');
    const rectangle = this.page.nativeElement.querySelectorAll('.rectangle');
    const text1 = this.page.nativeElement.querySelectorAll('.text1');
    const text2 = this.page.nativeElement.querySelectorAll('.text2');
    const stText1 = new SplitText(text1, {type: 'chars'});
    const stText2 = new SplitText(text2, {type: 'chars'});
    const tlBox = gsap.timeline();
    tlBox.to(box1, {
      yPercent: 200,
      duration: 1,
    })
      .to(box2, {
        yPercent: -400,
        duration: 1,
      }, '<')
      .to(square, {
        x: '15vw',
        rotation: 380,
        duration: 1,
      }, '<')
  .to(rectangle, {
    width: '0',
duration: 1,
    x: '15.8vw',
    }, '<');
    ScrollTrigger.create({
      animation: tlBox,
      trigger: page3,
      start: '30% bottom',
      end: 'bottom bottom',
      pinSpacing: false,
      // markers: true,
      scrub: true,
      pin: true,
      anticipatePin: 1
    });
    if (stText1.chars) {
      gsap.from(stText1.chars, {
        // visibility: 'hidden',
        duration: 0.1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: page3,
          start: '30% bottom',
          end: '95% bottom',
          pinSpacing: false,
          // markers: true,
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
      });
    }
    if (stText2.chars) {
      gsap.from(stText2.chars, {
        // visibility: 'hidden',
        duration: 0.1,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
          trigger: page3,
          start: '30% bottom',
          end: '95% bottom',
          pinSpacing: false,
          // markers: true,
          scrub: true,
          pin: true,
          anticipatePin: 1
        },
      });
    }
  }

  animationBall(button) {
    if (!this.animationMap.has(button)) {
      const tl = gsap.timeline();
      tl.to(button, {
        borderColor: 'green',
        duration: 1,
      });
      this.animationMap.set(button, tl);
    }

    this.animationMap.get(button).play();
  }

  onAnimationBall(button) {
    if (!this.click) {
      if (this.animationMap.has(button)) {
        this.animationMap.get(button).reverse();
      }

    }
  }

  openWindow(button) {
    if (this.fullWindow) {
      this.resetWindow();
    }
    this.fullWindow = true;
    const window = button.querySelector('.window');
    const mySplitText = new SplitText(window, {type: 'chars'});
    this.tl.to(button, {
      borderColor: 'blue',
      duration: 1,
    })
      .to(window, {
        duration: 1,
        transformOrigin: 'center center',
        scale: 1,
      });
    this.window = true;
    this.lastButton = [];
    this.lastButton = button;
    this.lastWindow = [];
    this.lastWindow = window;
  }

  resetWindow() {
    if (this.fullWindow) {
      console.log('eeeeeeeeeeee', this.lastWindow);
      this.tl.to(this.lastWindow, {
        duration: 1,
        transformOrigin: 'center center',
        scale: 0,
      })
        .to(this.lastButton, {
          borderColor: 'red',
          duration: 1,
        });
      this.window = false;
      this.fullWindow = false;
      this.lastButton = [];
      this.lastWindow = [];
    }
  }

}
