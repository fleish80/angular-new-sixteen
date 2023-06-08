import {
  Component,
  EnvironmentInjector,
  InjectionToken,
  Injector,
  inject,
  runInInjectionContext,
} from '@angular/core';

const RANDOM_NUMBER = new InjectionToken<number>('randomNumber');

@Component({
  selector: 'df-run-injection-context',
  standalone: true,
  imports: [],
  template: `<button (click)="injectRandomNumber()">
    Inject random nuber
  </button>`,
  styles: [],
  providers: [{ provide: RANDOM_NUMBER, useValue: Math.random() }],
})
export default class RunInjectionContextComponent {
  #injector = inject(Injector);
  #environmentInjector = inject(EnvironmentInjector);

  injectRandomNumber() {

    // now
    runInInjectionContext(this.#injector, () => {
      const randomNumber = inject(RANDOM_NUMBER);
      console.log('random number - now', randomNumber);
    });

    // before - deprecated now
    // this.#environmentInjector.runInContext(() => {
    //   const randomNumber = inject(RANDOM_NUMBER);
    //   console.log('random number - before', randomNumber);
    // });
  }
}
