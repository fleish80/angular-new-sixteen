import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'df-router-before',
  standalone: true,
  imports: [CommonModule],
  template: `<p>router-before works!</p>`,
  styles: [],
})
export class RouterBeforeComponent implements OnInit{
 
  #activeRouter = inject(ActivatedRoute);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } 
  
}
