import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'df-router-after',
  standalone: true,
  imports: [],
  template: `
    <p>q = {{q}}</p>
    <p>x = {{x}}</p>

  `,
  styles: [],
})
export class RouterAfterComponent implements OnInit {
  
  @Input () q: string;
  @Input () x: number;

  #router = inject(Router);

  ngOnInit(): void {
    console.log('lastSuccessfulNavigation', this.#router.lastSuccessfulNavigation);
  }
   
}
