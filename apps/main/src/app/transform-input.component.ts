import { Component } from '@angular/core';
import TransformInputChildComponent from './transform-input-child.component';

@Component({
    selector: 'df-transform-input',
    standalone: true,
    template: `<df-transform-input-child [beforeWidth]="'12'" [afterWidth]="'20'" [afterWidthAttr]="'30'" [disabled]="null"/>`,
    styles: [],
    imports: [TransformInputChildComponent]
})
export default class TransformInputComponent {}
