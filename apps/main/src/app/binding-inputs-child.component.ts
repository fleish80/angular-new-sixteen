import { Component, Input } from '@angular/core';

@Component({
  selector: 'df-binding-inputs-child',
  standalone: true,
  imports: [],
  template: `{{ name }}`,
  styles: [],
})
export class BindingInputsChildComponent {
  @Input() name: string;
}
