import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { VacationDetailComponent } from './vacation-detail.component';
import { VacationListComponent } from './vacation-list.component';
import { VacationsComponent } from './vacations.component';

const routes: Routes = [
  {
    path: '',
    component: VacationsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, VacationsComponent],
  declarations: [
    VacationsComponent,
    VacationListComponent,
    VacationDetailComponent,
  ],
})
export class VacationsModule {}
