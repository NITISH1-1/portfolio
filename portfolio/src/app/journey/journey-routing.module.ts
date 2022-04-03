import { RouterModule, Routes } from '@angular/router';
import { JourneyComponent } from './components/journey.component';

const mainroutes: Routes = [
  {path: '', component:JourneyComponent}
];

export const routes = RouterModule.forChild(mainroutes);