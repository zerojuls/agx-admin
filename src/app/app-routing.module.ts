import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
  { path: 'forms', loadChildren: './forms/forms.module#FormsLocalModule' },
  { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
  { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
  { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
