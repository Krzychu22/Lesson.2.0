import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap} from 'gsap';
import {BehaviorSubject} from 'rxjs';
import {SplitText} from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

interface pokemons {
  name1: string;
  name2: string;
  name3: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  information: string;
  typ: string;
}

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @ViewChild('page', {
    static: true,
  }) page: ElementRef<HTMLElement>;

  tl = gsap.timeline({});
  tlC = gsap.timeline();
  tlnC = gsap.timeline();

  pokemons$ = new BehaviorSubject<Array<pokemons>>([
    {
      name1: 'charmander',
      name2: 'charmeleon',
      name3: 'charizard',
      pokemon1: 'assets/pokemon/charmander.png',
      pokemon2: 'assets/pokemon/charmeleon.png',
      pokemon3: 'assets/pokemon/charizard.png',
      information: 'Od czasu jego narodzin, na końcu jego ogona pali się mały płomień. Gdy zgaśnie, ten pokemon może umrzeć.',
      typ: 'ogień'
    }, {
      name1: 'squirtle',
      name2: 'wartortle',
      name3: 'ivysaur',
      pokemon1: 'assets/pokemon/squirtle.png',
      pokemon2: 'assets/pokemon/wartortle.png',
      pokemon3: 'assets/pokemon/blactoise.png',
      information: 'Kiedy chowa swoją głowe do skorupy, tryska wodnymi biczami z bardzo dużą siłą.',
      typ: 'woda'
    }, {
      name1: 'bulbasaur',
      name2: 'ivysaur',
      name3: 'venusaur',
      pokemon1: 'assets/pokemon/bulbasaur.png',
      pokemon2: 'assets/pokemon/ivysaur.png',
      pokemon3: 'assets/pokemon/venusaur.png',
      information: 'Od czasu narodzin nosi na plecach dziwną roślinę. Ta roślina rośnie wraz z nim przez cały czas.',
      typ: 'trawa'
    }]);
  animationMap = new WeakMap();
  click = false;
  evolution = false;
  openCurtain = false;
  openCurtain1 = false;

  constructor() {
  }

  animatePokemon(container) {
    // console.log(container);
    if (!this.click) {
      if (!this.animationMap.has(container)) {
        const pokemon1 = container.querySelector('.pokemon1');
        const information = container.querySelector('.information');
        const name1 = container.querySelector('.text1');
        const name = container.querySelectorAll('.text');
        const timeline = gsap.timeline();
        const mySplitText = new SplitText(name1, {type: 'chars'});
        timeline.to(pokemon1, {
          duration: 1,
          filter: 'brightness(1)',
        }, '<')
          .to(information, {
            duration: 1.2,
            y: -395,
          }, '<')
          .to(name, {
            duration: 2,
            y: -402,
          }, '-=1');
        for (let i = 0; i <= mySplitText.chars.length; i++) {
          timeline.from(mySplitText.chars[i], {
            duration: 0.1,
            visibility: 'hidden',
          });
        }
        this.animationMap.set(container, timeline);
      }

      this.animationMap.get(container).play();
    }
  }

  // getUnique(){
  //   return Math.random()
  // }
  // deleteAnimation(el) {
  //   // console.log(el);
  //   // console.log(this.animationMap);
  //   //
  //   this.animationMap.delete(el);
  //   //
  //   // console.log(this.animationMap);
  // }
  //

  reverseAnimation(container) {
    if (!this.click) {
      if (this.animationMap.has(container)) {
        this.animationMap.get(container).reverse();
      }

    }
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   console.log(this.animationMap);
    // }, 1000);


  }

  open() {
    if (this.openCurtain) {
      // this.openCurtain1 = false;
      // this.click = false;
      // this.evolution = false;
      this.tl.reverse();
    }
    if (!this.openCurtain) {
      this.tl.restart();
      // this.tl.to(this.page.nativeElement.querySelectorAll('.ball4'), {
      //   backgroundColor: 'pink',
      //   duration: .5,
      //   yoyo: true,
      //   repeat: 5,
      // })
      // .to(this.page.nativeElement.querySelectorAll('.top'), {
      //   transformOrigin: 'center bottom',
      //   rotation: 450,
      //   duration: 3,
      // })
      //   .to(this.page.nativeElement.querySelectorAll('.bottom'), {
      //     transformOrigin: 'center top',
      //     rotation: 450,
      //     duration: 3,
      //   }, '<')
      this.tl.to(this.page.nativeElement.querySelectorAll('.right'), {
        x: 800,
        duration: 3,
        ease: 'bounce',
        boxShadow: '0 100px 100px black',
      })
        .to(this.page.nativeElement.querySelectorAll('.left'), {
          x: -800,
          duration: 3,
          ease: 'bounce',
          boxShadow: '0 100px 100px black',
        }, '<')
        .to(this.page.nativeElement.querySelectorAll('.R'), {
          x: 800,
          duration: 3,
          ease: 'bounce',
        }, '<');
      this.openCurtain1 = true;
    }
    this.openCurtain = this.openCurtain1;
  }

  fullScreen(container) {
    if (this.click) {
      if (this.evolution) {
        console.log(container);
        this.animationMap.has(container);
        const pokemon1 = container.querySelector('.pokemon2');
        const pokemon2 = container.querySelector('.pokemon3');
        const name1 = container.querySelector('.text2');
        const name2 = container.querySelector('.text3');
        const mySTName1 = new SplitText(name1, {type: 'chars'});
        const mySTName2 = new SplitText(name2, {type: 'chars'});
        this.tlC.to(pokemon1, {
          duration: 3,
          scale: 0,
          ease: 'bounce',
        });
        for (let i = 0; i <= mySTName1.chars.length; i++) {
          this.tlC.to(mySTName1.chars[i], {
            duration: 0.1,
            visibility: 'hidden',
          }, +5  + i * .1);
        }
        this.tlC.to(pokemon2, {
          duration: 3,
          scale: 1.5,
          ease: 'bounce',
        }, '-=1');
        this.tlC.to(name1, {
          zIndex: -1,
          duration: .1,
        }, '-=4');
        for (let i = 0; i <= mySTName2.chars.length; i++) {
          this.tlC.from(mySTName2.chars[i], {
            duration: 0.1,
            visibility: 'hidden',
          }, 7 + i * .1);
        }
        this.tlC.to(container, {
          cursor: 'unset'
        }, '-=3');
      }
      if (!this.evolution) {
        this.evolution = true;
        console.log(container);
        this.animationMap.has(container);
        const pokemon1 = container.querySelector('.pokemon1');
        const pokemon2 = container.querySelector('.pokemon2');
        const name1 = container.querySelector('.text1');
        const name2 = container.querySelector('.text2');
        const mySTName1 = new SplitText(name1, {type: 'chars'});
        const mySTName2 = new SplitText(name2, {type: 'chars'});
        this.tlC.to(pokemon1, {
          duration: 3,
          scale: 0,
          ease: 'bounce',
        });
        for (let i = 0; i <= mySTName1.chars.length; i++) {
          this.tlC.to(mySTName1.chars[i], {
            duration: 0.1,
            visibility: 'hidden',
          }, i * .1);
        }
        this.tlC.to(pokemon2, {
          duration: 3,
          scale: 1.25,
          ease: 'bounce',
        }, '-=1');
        this.tlC.to(name1, {
          zIndex: -1,
          duration: .1,
        }, '-=3');
        for (let i = 0; i <= mySTName2.chars.length; i++) {
          this.tlC.from(mySTName2.chars[i], {
            duration: 0.1,
            visibility: 'hidden',
          }, 2 + i * .1);
        }
      }
    }
    if (!this.click) {
      this.click = true;
      console.log(container);
      this.animationMap.has(container);
      const pokemon1 = container.querySelector('.pokemon1');
      const name = container.querySelectorAll('.text');
      const information = container.querySelector('.information');
      this.tlnC.to(this.page.nativeElement.querySelectorAll('.box'), {
        duration: 2,
        width: 0,
        margin: 0,
        border: 'solid 0 black',
      })
        .to(container, {
          duration: 2,
          width: 2800,
          marginLeft: '1.5%',
          marginRight: '1.5%',
          border: 'solid 5px black',
        }, '<')
        .to(pokemon1, {
          duration: 2,
          y: 100,
        }, '<')
        .to(information, {
          duration: 2,
          y: -550,
        }, '<')
        .to(information, {
          duration: 4,
          y: '-300%',
        }, '+=1')
        .to(name, {
          duration: 3,
          y: -100,
        }, '<');
    }
  }
}
