import { Component, Input, OnInit } from '@angular/core';

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

  ngOnInit(): void {
    console.log('before', this.#beforeWidth, typeof this.#beforeWidth);
    console.log('after', this.afterWidth, typeof this.afterWidth );
  }

}
