import {
  Component,
  Input,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

import { Vacation } from '../core';

@Component({
  selector: 'app-vacation-detail',
  template: `
    <div class="card edit-detail">
      <header class="card-header">
        <p class="card-header-title">
          {{ editingVacation.name }}
          &nbsp;
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field" *ngIf="editingVacation.id">
            <label class="label" for="id">
              id
            </label>
            <input
              name="id"
              class="input"
              type="text"
              [(ngModel)]="editingVacation.id"
              placeholder="e.g. VacationColleen"
              readOnly
            />
          </div>
          <div class="field">
            <label class="label" for="name">
              name
            </label>
            <input
              name="name"
              class="input"
              type="text"
              [(ngModel)]="editingVacation.name"
              placeholder="e.g. Colleen"
            />
          </div>
          <div class="field">
            <label class="label" for="description">
              description
            </label>
            <input
              name="description"
              class="input"
              type="text"
              [(ngModel)]="editingVacation.description"
              placeholder="dance fight!"
            />
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <app-button-footer
          class="card-footer-item"
          [className]="'cancel-button'"
          [iconClasses]="'fas fa-undo'"
          (clicked)="clear()"
          label="Cancel"
          [item]="editingVacation"
        ></app-button-footer>
        <app-button-footer
          class="card-footer-item"
          [className]="'save-button'"
          [iconClasses]="'fas fa-save'"
          (clicked)="saveVacation()"
          label="Save"
          [item]="editingVacation"
        ></app-button-footer>
      </footer>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacationDetailComponent implements OnChanges {
  @Input() vacation: Vacation;
  @Output() unselect = new EventEmitter<string>();
  @Output() save = new EventEmitter<Vacation>();

  addMode = false;
  editingVacation: Vacation;

  ngOnChanges(changes: SimpleChanges) {
    if (this.vacation && this.vacation.id) {
      this.editingVacation = { ...this.vacation };
      this.addMode = false;
    } else {
      this.editingVacation = { id: undefined, name: '', description: '' };
      this.addMode = true;
    }
  }

  clear() {
    this.unselect.emit();
  }

  saveVacation() {
    this.save.emit(this.editingVacation);
    this.clear();
  }
}
