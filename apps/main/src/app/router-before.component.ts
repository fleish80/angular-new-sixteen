import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'df-router-before',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>q = {{q}}</p>
    <p>x = {{x}}</p>
  `,
  styles: [],
})
export default class RouterBeforeComponent implements OnInit {
  #activeRouter = inject(ActivatedRoute);
  q: string | null;
  x: number;

  ngOnInit(): void {
    this.#activeRouter.queryParamMap.subscribe((queryParmas) => {
      this.q = queryParmas.get('q');
      const xParam = queryParmas.get('x') ?? '';
      this.x = parseInt(xParam);
    });
  }
}
