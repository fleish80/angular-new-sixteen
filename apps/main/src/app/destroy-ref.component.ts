import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'df-destroy-ref',
  standalone: true,
  imports: [],
  template: `<p>destroy-ref works!</p>`,
  styles: [],
})
export default class DestroyRefComponent {

  #destroyRef = inject(DestroyRef);

  constructor() {
    this.#destroyRef.onDestroy(() => {
      console.log('DestroyRefComponent just destroyed');
    });
  }

}
