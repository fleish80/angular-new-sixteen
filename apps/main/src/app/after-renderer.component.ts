import { Component, afterNextRender, afterRender } from '@angular/core';

@Component({
  selector: 'df-after-renderer',
  standalone: true,
  imports: [],
  template: `<button (click)="click()">Button</button>`,
  styles: [],
})
export default class AfterRendererComponent {
  constructor() {
    /**
     * Runs once after the first change detection
     * Can be used for applying third party JavaScript libraries that need to acces to the DOM
     * Similiar behaviour to ngAfterViewInit
     * Do not run in SSR unlike ngAfterViewInit
     */
    afterNextRender(() => {
      console.log('afterNextRender');
    });
    /**
     * Runs after every change detection
     * Do not run in SSR
     */
    afterRender(() => {
      console.log('afterRender');
    });
  }

  click() {}
}
