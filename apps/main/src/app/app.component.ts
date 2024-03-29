import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  selector: 'df-root',
  template: `<nav class="nav">
      <a routerLink="/router-before">Router Before</a>
      <a routerLink="/router-after">Router After</a>
      <a routerLink="/destroy-ref">Destroy Ref</a>
      <a routerLink="/destroy-ref-usage">Destroy Ref Usage</a>
      <a routerLink="/mandatory-input">Mandatory input</a>
      <a routerLink="/last-success-full-navigation">Last Success Full Navigation</a>
      <a routerLink="/run-injection-context">Run Injection Context</a>
      <a routerLink="/transform-input">Transform Input</a>
      <a routerLink="/can-match">Can Match</a>
      <a routerLink="/binding-inputs">Binding inputs of NgComponentOutlet</a>
      <a routerLink="/after-render">After render / After next tender</a>
    </nav>
    <router-outlet />`,
  styles: [
    `
      .nav {
        display: flex;
        gap: 10px;
        padding-block-end: 10px;
      }
    `,
  ],
})
export class AppComponent {
  title = 'main';
}
