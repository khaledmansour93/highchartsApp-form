import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Module needed to use FormBuilder
import { ChartModule } from 'angular-highcharts'; // Module needed to use chart
import { AppRoutingModule } from './app-routing.module';  // Module needed to use routing
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { HighchartsChartComponent } from './highcharts-chart/highcharts-chart.component'; // Module needed to use Highcharts chart

@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartModule // add ChartModule to your imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
