import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlanetesComponent } from '../planetes/planetes.component';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  
  static planete: PlanetesComponent;
  constructor() { }

 static getPlanetes(): PlanetesComponent {
    return this.planete
  }
  static savePlanetes(pid: any): void{
    this.planete=pid;
  }
}
