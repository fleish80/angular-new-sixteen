import { Component, Input } from '@angular/core';

@Component({
  selector: 'df-router-after',
  standalone: true,
  imports: [],
  template: `
    <p>q = {{q}}</p>
    <p>x = {{x}}</p>
    <p>id = {{id}}</p>

  `,
  styles: [],
})
export default class RouterAfterComponent {
  
  @Input () q: string;
  @Input () x: number;
  @Input () id: number;
}
