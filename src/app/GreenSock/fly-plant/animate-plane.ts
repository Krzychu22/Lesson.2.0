import {gsap} from 'gsap';
import {MotionPathPlugin} from 'gsap/MotionPathPlugin';
import {MotionPathHelper} from 'gsap/MotionPathHelper';
import {CustomEase} from 'gsap/CustomEase';

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper, CustomEase);

export function animatePlane(plane: HTMLElement, duration: number, offScreen: number) {

  const controlPoint = document.createElement('div');
  controlPoint.style.width = '1px';
  controlPoint.style.height = '1px';
  const {x, y, width, height} = plane.getBoundingClientRect();
  const top = -y;
  const bottom = window.innerHeight - y;
  const left = -x;
  const right = window.innerWidth - x;
  const tl = gsap.timeline({});


  const promise = new Promise<{ firstSum: number; secondSum: number }>(((resolve) => {
    let firstSum = 0;
    let secondSum = 0;

    function firstLine() {
      const current = controlPoint.style.transform.split(',');
      const numberA = parseInt(current[0].substring(current[0].indexOf('(') + 1));
      const numberB = parseInt(current[1]);
      firstSum = firstSum + Math.sqrt(Math.pow(numberA, 2) + Math.pow(numberB, 2));
      console.log('w', firstSum);
    }

    function secondLine() {
      const current = controlPoint.style.transform.split(',');
      const numberA = (parseInt(current[0].substring(current[0].indexOf('(') + 1)));
      const numberB = (parseInt(current[1]));
      if (-left >= window.innerWidth / 10 * 3.5) {
        secondSum = secondSum + Math.sqrt(Math.pow(numberA - left - width, 2) + Math.pow(numberB - window.innerHeight / 5, 2));
      } else {
        secondSum = secondSum + Math.sqrt(Math.pow(numberA + left - width, 2) + Math.pow(numberB - window.innerHeight / 5, 2));
      }
      console.log('p', secondSum);
    }

    if (window.innerWidth >= window.innerHeight) {
      if (bottom <= window.innerHeight / 2) {
        if (-left <= window.innerWidth / 10 * 6.5) {
          tl.to(controlPoint, {
            duration: .05,
            ease: 'none',
            onUpdate: () => firstLine(),
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 4, y: -window.innerHeight / 4},
                {x: right / 2, y: -window.innerHeight / 4},

                {x: right / 4 * 3, y: -window.innerHeight / 4},
                {x: right / 5 * 4, y: -window.innerHeight / 6},
                {x: right + width, y: -window.innerHeight / 2},
              ],
              curviness: 4,
              type: 'cubic'
            },
          });
        } else {
          tl.to(controlPoint, {
            duration: .05,
            ease: 'none',
            onUpdate: () => firstLine(),
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 5 * 4, y: -window.innerHeight / 4},
                {x: right + width, y: -window.innerHeight / 4},
              ],
              curviness: 4,
              type: 'cubic'
            },
          });
        }
      } else {
        if (-left <= window.innerWidth / 10 * 6.5) {
          tl.to(controlPoint, {
            duration: .05,
            ease: 'none',
            onUpdate: () => firstLine(),
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: 45 * bottom / 300, y: -20 * bottom / 150},
                {x: right / 4, y: top},
                {x: right / 2, y: top / 2},

                {x: right / 4 * 3, y: top / 5},
                {x: right / 5 * 4, y: -window.innerHeight / 6},
                {x: right + width, y: top - height},
              ],
              curviness: 4,
              type: 'cubic'
            },
          });
        } else {
          tl.to(controlPoint, {
            duration: .05,
            ease: 'none',
            onUpdate: () => firstLine(),
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 5 * 4, y: -window.innerHeight / 4},
                {x: right + width, y: -window.innerHeight / 4},
              ],
              curviness: 4,
              type: 'cubic'
            },
          });
        }
      }
      if (-left >= window.innerWidth / 10 * 3.5) {
        tl.to(controlPoint, {
          duration: .05,
          ease: 'none',
          onUpdate: () => secondLine(),
          onComplete: () => resolve({firstSum, secondSum}),
          motionPath: {
            path: [
              {x: left - width, y: window.innerHeight / 5},

              {x: left / 4 * 3, y: window.innerHeight / 9},
              {x: left / 4 * 3, y: window.innerHeight / 9},
              {x: left / 2, y: window.innerHeight / 5},

              {x: left / 4, y: window.innerHeight / 3.5},
              {x: 45 * top / 300, y: -20 * top / 150},
              {x: 0, y: 0},
            ],
            curviness: 4,
            type: 'cubic'
          },
        });
      } else {
        tl.to(controlPoint, {
          duration: .05,
          ease: 'none',
          onUpdate: () => secondLine(),
          onComplete: () => resolve({firstSum, secondSum}),
          motionPath: {
            path: [
              {x: left - width, y: window.innerHeight / 5},

              {x: left / 2, y: window.innerHeight / 4},
              {x: 45 * top / 300, y: -20 * top / 150},
              {x: 0, y: 0},
            ],
            curviness: 4,
            type: 'cubic'
          },
        });
      }
    } else {
      tl.to(controlPoint, {
        duration: .05,
        ease: 'none',
        onUpdate: () => firstLine(),
        motionPath: {
          path: [
            {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

            {x: -45 * top / 300, y: 20 * top / 150},
            {x: right / 5 * 4, y: -window.innerHeight / 4},
            {x: right + width, y: -window.innerHeight / 4},
          ],
          curviness: 4,
          type: 'cubic'
        },
      });
      if (bottom <= window.innerHeight / 2) {
        tl.to(controlPoint, {
          duration: .05,
          ease: 'none',
          onUpdate: () => secondLine(),
          onComplete: () => resolve({firstSum, secondSum}),
          motionPath: {
            path: [
              {x: right + 2 * width, y: -window.innerHeight / 2},

              {x: right, y: -window.innerHeight / 100 * 53},
              {x: window.innerWidth / 100 * 90 + left, y: -window.innerHeight / 100 * 47},
              {x: window.innerWidth / 2 + left, y: -window.innerHeight / 2},

              {x: window.innerWidth / 100 * 10 + left, y: -window.innerHeight / 100 * 53},
              {x: left, y: -window.innerHeight / 100 * 47},
              {x: left - 2 * width, y: -window.innerHeight / 2},
            ],
            curviness: 4,
            type: 'cubic',
          },
        });
      } else {
        tl.to(controlPoint, {
          duration: .05,
          ease: 'none',
          onUpdate: () => secondLine(),
          onComplete: () => resolve({firstSum, secondSum}),
          motionPath: {
            path: [
              {x: right + 2 * width, y: window.innerHeight / 2},

              {x: right, y: window.innerHeight / 100 * 53},
              {x: window.innerWidth / 100 * 90 + left, y: window.innerHeight / 100 * 47},
              {x: window.innerWidth / 2 + left, y: window.innerHeight / 2},

              {x: window.innerWidth / 100 * 10 + left, y: window.innerHeight / 100 * 53},
              {x: left, y: window.innerHeight / 100 * 47},
              {x: left - 2 * width, y: window.innerHeight / 2},
            ],
            curviness: 4,
            type: 'cubic',
          },
        });
      }
      tl.to(controlPoint, {
        duration: .05,
        ease: 'none',
        onUpdate: () => secondLine(),
        onComplete: () => resolve({firstSum, secondSum}),
        motionPath: {
          path: [
            {x: left - width, y: window.innerHeight / 5},

            {x: left / 2, y: window.innerHeight / 4},
            {x: 45 * top / 300, y: -20 * top / 150},
            {x: 0, y: 0},
          ],
          curviness: 4,
          type: 'cubic'
        },
      });
    }
  }));
  promise.then(value => {
    const {firstSum, secondSum} = value;
    const comFirstDuration = duration * (firstSum / (firstSum + secondSum));
    const telFirstDuration = (duration - duration / 2.5) * (firstSum / (firstSum + secondSum));

    if (window.innerWidth >= window.innerHeight) {
      if (bottom <= window.innerHeight / 2) {
        if (-left <= window.innerWidth / 10 * 6.5) {
          tl.to(plane, {
            duration: comFirstDuration,
            scale: 1.5,
            ease: 'none',
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 4, y: -window.innerHeight / 4},
                {x: right / 2, y: -window.innerHeight / 4},

                {x: right / 4 * 3, y: -window.innerHeight / 4},
                {x: right / 5 * 4, y: -window.innerHeight / 6},
                {x: right + width, y: -window.innerHeight / 2},
              ],
              autoRotate: 40,
              alignOrigin: [0.5, 0.5],
              curviness: 4,
              type: 'cubic'
            },
          });
        } else {
          tl.to(plane, {
            duration: comFirstDuration,
            scale: 1.5,
            ease: 'none',
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 5 * 4, y: -window.innerHeight / 4},
                {x: right + width, y: -window.innerHeight / 4},
              ],
              autoRotate: 40,
              alignOrigin: [0.5, 0.5],
              curviness: 4,
              type: 'cubic'
            },
          });
        }
      } else {
        if (-left <= window.innerWidth / 10 * 6.5) {
          tl.to(plane, {
            duration: comFirstDuration,
            scale: 1.5,
            ease: 'none',
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: 45 * bottom / 300, y: -20 * bottom / 150},
                {x: right / 4, y: top},
                {x: right / 2, y: top / 2},

                {x: right / 4 * 3, y: top / 5},
                {x: right / 5 * 4, y: -window.innerHeight / 6},
                {x: right + width, y: top - height},
              ],
              autoRotate: 40,
              alignOrigin: [0.5, 0.5],
              curviness: 4,
              type: 'cubic'
            },
          });
        } else {
          tl.to(plane, {
            duration: comFirstDuration,
            scale: 1.5,
            ease: 'none',
            motionPath: {
              path: [
                {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

                {x: -45 * top / 300, y: 20 * top / 150},
                {x: right / 5 * 4, y: -window.innerHeight / 4},
                {x: right + width, y: -window.innerHeight / 4},
              ],
              autoRotate: 40,
              alignOrigin: [0.5, 0.5],
              curviness: 4,
              type: 'cubic'
            },
          });
        }
      }
      if (-left >= window.innerWidth / 10 * 3.5) {
        tl.to(plane, {
          duration: duration - comFirstDuration,
          scale: 1,
          ease: 'none',
          motionPath: {
            path: [
              {x: left - width, y: window.innerHeight / 5},

              {x: left / 4 * 3, y: window.innerHeight / 9},
              {x: left / 4 * 3, y: window.innerHeight / 9},
              {x: left / 2, y: window.innerHeight / 5},

              {x: left / 4, y: window.innerHeight / 3.5},
              {x: 45 * top / 300, y: -20 * top / 150},
              {x: 0, y: 0},
            ],
            autoRotate: 40,
            alignOrigin: [0.5, 0.5],
            curviness: 4,
            type: 'cubic'
          },
        }, .01 + comFirstDuration + offScreen);
      } else {
        tl.to(plane, {
          duration: duration - comFirstDuration,
          scale: 1,
          ease: 'none',
          motionPath: {
            path: [
              {x: left - width, y: window.innerHeight / 5},

              {x: left / 2, y: window.innerHeight / 4},
              {x: 45 * top / 300, y: -20 * top / 150},
              {x: 0, y: 0},
            ],
            autoRotate: 40,
            alignOrigin: [0.5, 0.5],
            curviness: 4,
            type: 'cubic'
          },
        }, .05 + comFirstDuration + offScreen);
      }
    } else {
      tl.to(plane, {
        duration: telFirstDuration,
        scale: 1.5,
        ease: 'none',
        motionPath: {
          path: [
            {x: 0, y: 0},//pbowiązkowe jeśli wyłączony jest MotionPathHelper

            {x: -45 * top / 300, y: 20 * top / 150},
            {x: right / 5 * 4, y: -window.innerHeight / 4},
            {x: right + width, y: -window.innerHeight / 4},
          ],
          autoRotate: 40,
          alignOrigin: [0.5, 0.5],
          curviness: 4,
          type: 'cubic'
        },
      });
      if (bottom <= window.innerHeight / 2) {
        tl.to(plane, {
          duration: 0.0001,
          rotateX: 180,
        });
        tl.to(plane, {
          duration: duration / 2.5,
          scale: 1.5,
          ease: 'none',
          motionPath: {
            path: [
              {x: right + 2 * width, y: -window.innerHeight / 2},

              {x: right, y: -window.innerHeight / 100 * 53},
              {x: window.innerWidth / 100 * 90 + left, y: -window.innerHeight / 100 * 47},
              {x: window.innerWidth / 2 + left, y: -window.innerHeight / 2},

              {x: window.innerWidth / 100 * 10 + left, y: -window.innerHeight / 100 * 53},
              {x: left, y: -window.innerHeight / 100 * 47},
              {x: left - 2 * width, y: -window.innerHeight / 2},
            ],
            autoRotate: -42,
            alignOrigin: [0.5, 0.5],
            curviness: 4,
            type: 'cubic',
          },
        }, .01 + telFirstDuration + offScreen);
        tl.to(plane, {
          duration: 0.0001,
          rotateX: 0,
        });
      } else {
        tl.to(plane, {
          duration: 0.0001,
          rotateX: 180,
        });
        tl.to(plane, {
          duration: duration / 2.5,
          scale: 1.5,
          ease: 'none',
          motionPath: {
            path: [
              {x: right + 2 * width, y: window.innerHeight / 2},

              {x: right, y: window.innerHeight / 100 * 53},
              {x: window.innerWidth / 100 * 90 + left, y: window.innerHeight / 100 * 47},
              {x: window.innerWidth / 2 + left, y: window.innerHeight / 2},

              {x: window.innerWidth / 100 * 10 + left, y: window.innerHeight / 100 * 53},
              {x: left, y: window.innerHeight / 100 * 47},
              {x: left - 2 * width, y: window.innerHeight / 2},
            ],
            autoRotate: -42,
            alignOrigin: [0.5, 0.5],
            curviness: 4,
            type: 'cubic',
          },
        }, .01 + telFirstDuration + offScreen);
        tl.to(plane, {
          duration: 0.0001,
          rotateX: 0,
        });
      }
      tl.to(plane, {
        duration: duration / 2.5 - telFirstDuration,
        scale: 1,
        ease: 'none',
        motionPath: {
          path: [
            {x: left - width, y: window.innerHeight / 5},

            {x: left / 2, y: window.innerHeight / 4},
            {x: 45 * top / 300, y: -20 * top / 150},
            {x: 0, y: 0},
          ],
          autoRotate: 40,
          alignOrigin: [0.5, 0.5],
          curviness: 4,
          type: 'cubic'
        },
      }, .1 + duration / 2.5 + telFirstDuration + 2 * offScreen);
    }
  });
  return tl;
}
