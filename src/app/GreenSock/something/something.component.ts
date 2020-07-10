import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
// import {Physics2DPlugin} from 'gsap/Physics2DPlugin';
import {SplitText} from 'gsap/SplitText';
// import {PhysicsPropsPlugin} from 'gsap/PhysicsPropsPlugin';

gsap.registerPlugin(SplitText);

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit {

  @ViewChild('box', {
    static: true,
  }) box: ElementRef<HTMLElement>;
  tl = gsap.timeline({
    repeat: 6,
    // yoyo: true
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    this.tl.to(this.box.nativeElement.querySelectorAll('.text'), {
      duration: 1,
    });
    this.tl.from(this.box.nativeElement.querySelectorAll('.circle'), {
      width: 0,
      height: 0,
      duration: 1,
    })
      .to(this.box.nativeElement.querySelectorAll('.circle'), {
        width: 100,
        height: 100,
      })
      .to(this.box.nativeElement.querySelector('.grey1'), {
        rotation: 180,
        x: -480,
        y: -200,
        duration: 2,
        borderRadius: '50%',
        border: '30px solid black',
        ease: 'bounce'
      })
      .to(this.box.nativeElement.querySelector('.grey2'), {
        rotation: 180,
        x: 300,
        y: -200,
        duration: 2,
        borderRadius: '50%',
        border: '30px solid black',
        ease: 'bounce'
      }, '<')
      .from(this.box.nativeElement.querySelector('.suspension'), {
        width: 0,
        height: 0,
        duration: 1,
      }, '<')
      .to(this.box.nativeElement.querySelector('.suspension'), {
        width: 400,
        x: -200,
        duration: 1,
        ease: 'bounce',
      })
      .from(this.box.nativeElement.querySelector('.car'), {
        width: 0,
        height: 0,
        duration: 1,
      }, '<')
      .to(this.box.nativeElement.querySelector('.front'), {
        width: 150,
        x: 130,
        y: 300,
        duration: 1,
        rotation: -430,
      })
      .to(this.box.nativeElement.querySelector('.mask'), {
        width: 230,
        x: 18,
        y: 327,
        duration: 1,
        rotation: -365,
      }, '<')
      .to(this.box.nativeElement.querySelector('.frontGlass'), {
        width: 170,
        x: 95,
        y: 350,
        duration: 1,
        rotation: -420,
      }, '<')
      .to(this.box.nativeElement.querySelector('.backGlass'), {
        width: 200,
        x: 278,
        y: 344,
        duration: 1,
        rotation: -500,
      }, '<')
      .to(this.box.nativeElement.querySelector('.goof'), {
        width: 300,
        x: 110,
        y: 283,
        duration: 1,
        rotation: -360,
      }, '<')
      .to(this.box.nativeElement.querySelector('.back'), {
        width: 170,
        x: 272,
        y: 482,
        duration: 1,
        rotation: -455,
      }, '<')
      .addLabel('haczyk') //punkt zaczepny do którego można się odwołać
      .to(this.box.nativeElement.querySelector('.pipe'), {
        width: 30,
        duration: 1,
      })
      .to(this.box.nativeElement.querySelectorAll('.body'), {
        backgroundColor: 'red',
        duration: 1,
      })
      .to(this.box.nativeElement.querySelectorAll('.ball1'), {
        x: 250,
        scale: '4',
        duration: 3,
        width: 20,
        height: 20,
        backgroundColor: '#cccccc',
      }, '+=1')
      .to(this.box.nativeElement.querySelectorAll('.ball1'), {
        duration: .5,
        width: 0,
        height: 0,
      },)
      .to(this.box.nativeElement.querySelectorAll('.ball2'), {
        x: 250,
        scale: '4',
        duration: 3,
        width: 20,
        height: 20,
        backgroundColor: '#cccccc',
      }, '-=2')
      .to(this.box.nativeElement.querySelectorAll('.ball2'), {
        duration: .5,
        width: 0,
        height: 0,
      },)
      .to(this.box.nativeElement.querySelectorAll('.ball3'), {
        x: 250,
        scale: '4',
        duration: 3,
        width: 20,
        height: 20,
        backgroundColor: '#cccccc',
      }, '-=1.5')
      .to(this.box.nativeElement.querySelectorAll('.ball3'), {
        duration: .5,
        width: 0,
        height: 0,
      },)
      .to(this.box.nativeElement.querySelectorAll('.container'), {
        y: -5,
        ease: 'elastic',
        // backgroundColor: 'green',
        duration: .5,
        repeat: 10,
      }, '-=6.5')
      .to(this.box.nativeElement.querySelector('.light'), {
        borderBottom: '320px solid yellow',
        ease: 'bounce',
        duration: 5,
      }, '-=4')
      .to(this.box.nativeElement.querySelectorAll('.container'), {
        x: -1800,
        ease: 'circ',
        duration: 4,
      }, '-=3');
  }

  click1() {
    const text = this.box.nativeElement.querySelectorAll('.text');
    const split = new SplitText(text, {type: 'chars, words'});

    function random(min, max) {
      return (Math.random() * (max - min)) + min;
    }

    for (let i = 0; i <= split.chars.length; i++) {
      this.tl.from(split.chars[i], {
        x: random(-200, 200),
        y: random(-200, 200),
        z: random(-200, 200),
        scale: 0,
        repeat: 1,
        duration: 3,
        repeatDelay: 1,
        yoyo: true,
      }, '0');
    }
  }
}
