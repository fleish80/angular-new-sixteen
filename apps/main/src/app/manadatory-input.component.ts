import { Component } from '@angular/core';
import { ManadatoryInputChildComponent } from './manadatory-input-child.component';

@Component({
  selector: 'df-manadatory-input',
  standalone: true,
  imports: [ManadatoryInputChildComponent],
  template: `
    <df-manadatory-input-child before="before text" after="after-text"/>
  `,
  styles: [],
})
export default class ManadatoryInputComponent {}
