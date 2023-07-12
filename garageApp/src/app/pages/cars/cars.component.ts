import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  showModal: boolean = false;
  matricula: string = '';

  showMatriculaModal() {
    this.showModal = true;
  }

  hideMatriculaModal() {
    this.showModal = false;
  }

  submitMatricula() {
    this.hideMatriculaModal();
  }
}


