import { NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { BindingInputsChildComponent } from './binding-inputs-child.component';

@Component({
  selector: 'df-binding-inputs',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `'<div *ngComponentOutlet="bindingInputsChildComponent; inputs: userData"></div>'`,
  styles: [],
})
export default class BindingInputsComponent {
  bindingInputsChildComponent = BindingInputsChildComponent;
  userData = { name: 'Cédric' }
}
