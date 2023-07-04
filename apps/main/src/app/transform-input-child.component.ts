import { Component, Input, OnInit, booleanAttribute, numberAttribute } from '@angular/core';

function toNumber(value: string){
  return Number(value) ?? parseInt(value.toString());
}

@Component({
  selector: 'df-transform-input-child',
  standalone: true,
  imports: [],
  template: `<p>transform-input works!</p>`,
  styles: [],
})
export default class TransformInputChildComponent implements OnInit {
 
  #beforeWidth: number;
  get beforeWidth(): number {
      return this.#beforeWidth;
  }
  @Input() set beforeWidth(value: string) {
      this.#beforeWidth = toNumber(value) as number;
  }

  @Input({ transform: toNumber }) afterWidth: number;

  @Input({ transform: numberAttribute }) afterWidthAttr: number;

  @Input({ transform: booleanAttribute }) disabled: boolean;

  ngOnInit(): void {
    console.log('beforeWidth', this.#beforeWidth, typeof this.#beforeWidth);
    console.log('afterWidth', this.afterWidth, typeof this.afterWidth );
    console.log('afterWidthAttr', this.afterWidthAttr, typeof this.afterWidthAttr );
    console.log('disabled', this.disabled, typeof this.disabled );
  }

}
