import { Component } from '@angular/core';
export class Customer {
  public id: number;
  public name: string;
}
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <app-header-bar></app-header-bar>
      <div class="section columns">
        <app-nav class="column is-2"></app-nav>
        <main class="column">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,

})
export class AppComponent {
  customers: Customer[] = [{ id: 1, name: 'john' }];
}
