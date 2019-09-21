import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionArquetipoService {

  private messageSource = new BehaviorSubject('default message');
  currentArquetipo = this.messageSource.asObservable();

  constructor() { }
  //arquetipo: any

  asignar(message: any) {
    this.messageSource.next(message)
  }
}
