import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  TrackByFunction,
} from '@angular/core';
import { Vacation } from '../core';

@Component({
  selector: 'app-vacation-list',
  template: `
    <ul class="list">
      <li
        role="presentation"
        *ngFor="
          let vacation of vacations;
          trackBy: trackByVacation;
          let i = index
        "
      >
        <div class="card">
          <app-card-content
            [name]="vacation.name"
            [description]="vacation.description"
          ></app-card-content>
          <footer class="card-footer">
            <app-button-footer
              class="card-footer-item"
              [className]="'delete-item'"
              [iconClasses]="'fas fa-trash'"
              (clicked)="deleteVacation($event)"
              label="Delete"
              [item]="vacation"
            ></app-button-footer>
            <app-button-footer
              class="card-footer-item"
              [className]="'edit-item'"
              [iconClasses]="'fas fa-edit'"
              (clicked)="selectVacation($event)"
              label="Edit"
              [item]="vacation"
            ></app-button-footer>
          </footer>
        </div>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationListComponent {
  @Input() vacations: Vacation[];
  @Output() deleted = new EventEmitter<Vacation>();
  @Output() selected = new EventEmitter<Vacation>();

  // byId(vacation: Vacation) {
  //   return vacation.id;
  // }
  foo(vacation: Vacation): string {
    return vacation.id;
  }

  trackByVacation(index: number, vacation: Vacation): string {
    return vacation.id;
  }

  selectVacation(vacation: Vacation) {
    this.selected.emit(vacation);
  }

  deleteVacation(vacation: Vacation) {
    this.deleted.emit(vacation);
  }
}
