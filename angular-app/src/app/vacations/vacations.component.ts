import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacation } from '../core';
import { VacationService } from './vacation.service';

@Component({
  selector: 'app-vacations',
  template: `
    <div class="content-container">
      <app-list-header
        title="Vacations"
        (add)="enableAddMode()"
        (refresh)="getVacations()"
      ></app-list-header>
      <div class="columns is-multiline is-variable">
        <div class="column is-8" *ngIf="vacations$ | async as vacations">
          <app-vacation-list
            *ngIf="!selected"
            [vacations]="vacations"
            (selected)="select($event)"
            (deleted)="askToDelete($event)"
          ></app-vacation-list>
          <app-vacation-detail
            *ngIf="selected"
            [vacation]="selected"
            (unselect)="clear()"
            (save)="save($event)"
          ></app-vacation-detail>
        </div>
      </div>

      <app-modal
        class="modal-vacation"
        [message]="message"
        [isOpen]="showModal"
        (handleNo)="closeModal()"
        (handleYes)="deleteVacation()"
      ></app-modal>
    </div>
  `,
})
export class VacationsComponent implements OnInit {
  selected: Vacation;
  vacations$: Observable<Vacation[]>;
  message = '?';
  vacationToDelete: Vacation;
  showModal = false;

  constructor(private vacationService: VacationService) {
    this.vacations$ = vacationService.entities$;
  }

  ngOnInit() {
    this.getVacations();
  }

  add(vacation: Vacation) {
    this.vacationService.add(vacation);
  }

  askToDelete(vacation: Vacation) {
    this.vacationToDelete = vacation;
    this.showModal = true;
    if (this.vacationToDelete.name) {
      this.message = `Would you like to delete ${this.vacationToDelete.name}?`;
    }
  }

  clear() {
    this.selected = null;
  }

  closeModal() {
    this.showModal = false;
  }

  deleteVacation() {
    this.closeModal();
    if (this.vacationToDelete) {
      this.vacationService
        .delete(this.vacationToDelete.id)
        .subscribe(() => (this.vacationToDelete = null));
    }
    this.clear();
  }

  enableAddMode() {
    this.selected = <any>{};
  }

  getVacations() {
    this.vacationService.getAll();
    this.clear();
  }

  save(vacation: Vacation) {
    if (this.selected && this.selected.name) {
      this.update(vacation);
    } else {
      this.add(vacation);
    }
  }

  select(vacation: Vacation) {
    this.selected = vacation;
  }

  update(vacation: Vacation) {
    this.vacationService.update(vacation);
  }
}
