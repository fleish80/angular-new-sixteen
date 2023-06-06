import { Component, Input } from '@angular/core';

@Component({
  selector: 'df-manadatory-input-child[before]',
  standalone: true,
  imports: [],
  template: `
    <p>before = {{before}}</p>
    <p>after = {{after}}</p>
  `,
  styles: [],
})
export class ManadatoryInputChildComponent {

  @Input() before: string;
  @Input({required: true}) after: string;

}
