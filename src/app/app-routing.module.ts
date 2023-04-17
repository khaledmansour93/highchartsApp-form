import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component';

const routes: Routes = [
  { path: 'add-form', component: AddFormComponent },
  { path: 'charts', component: HighchartsChartComponent },
  { path: '', redirectTo: 'add-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
