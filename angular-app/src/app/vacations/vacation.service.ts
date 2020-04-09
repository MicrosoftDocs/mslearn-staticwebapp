import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Vacation } from '../core';

@Injectable({ providedIn: 'root' })
export class VacationService extends EntityCollectionServiceBase<Vacation> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Vacation', serviceElementsFactory);
  }
}
