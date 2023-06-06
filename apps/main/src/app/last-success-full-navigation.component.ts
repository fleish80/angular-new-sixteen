import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'df-last-success-full-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `<p>last-success-full-navigation works!</p>`,
  styles: [],
})
export default class LastSuccessFullNavigationComponent implements OnInit {
  #router = inject(Router);

  ngOnInit(): void {
    console.log(
      'lastSuccessfullNavigation',
      this.#router.lastSuccessfulNavigation
    );
  }
}
