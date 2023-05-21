import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { untilDestroyedUtil } from './until-destroyed.util';

@Component({
  selector: 'df-destroy-ref-usage',
  standalone: true,
  imports: [CommonModule],
  template: `<p>destroy-ref-usage works!</p>`,
  styles: [],
})
export class DestroyRefUsageComponent implements OnInit {

  #untilDestroyed = untilDestroyedUtil();

  ngOnInit() {
    interval(1000)
      .pipe(this.#untilDestroyed())
      .subscribe((val) => console.log(val));
  }

}
