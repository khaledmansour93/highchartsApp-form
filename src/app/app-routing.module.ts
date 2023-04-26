import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component';

const routes: Routes = [  // An array of route objects. Each route maps the path (URL Segment) to the component
  { path: 'add-form', component: AddFormComponent },
  { path: 'charts', component: HighchartsChartComponent },
  { path: '', redirectTo: 'add-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Registering routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
