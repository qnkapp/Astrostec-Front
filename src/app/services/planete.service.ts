import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PlanetesComponent } from '../planetes/planetes.component';
import { SatellitesComponent } from '../satellites/satellites.component';

@Injectable({
  providedIn: 'root'
})
export class PlaneteService {
  static satellite: SatellitesComponent;
  static planete: PlanetesComponent;
  constructor() { }

 static getPlanetes(): PlanetesComponent {
    return this.planete
  }
  static savePlanetes(pid: any): void{
    this.planete=pid;
  }
  static saveSatellite(sid:any):void{
    this.satellite=sid;
  }
  static getSatellite():SatellitesComponent{
    return this.satellite
  }
}
