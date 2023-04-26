# HighchartsAppForm

## Project Objective

The goal of this project is to display form data (numbers only) on a column chart in a new browser tab and to log timestamp of last successful form submission in console using Angular

## Project Components

Our project consists of a form, a _submit_ button, a _reset_ button to clear form and angular-highcharts column chart

## Technologies used

- Angular
- Bootstrap

## Development environment

- Nodejs v16.15.1
- npm v8.11.0
- Angular CLI v15.2.6
- IDE: VS Code

## Procedures

1. Create an Angular project called _highchartsApp-form_ using the following command: ng new highchartsApp-form
2. Download and install [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/) using npm
3. Add the following path _"node_modules/bootstrap/dist/css/bootstrap.min.css"_ to _"styles"_ array in _angular.json_
4. Create a component called _add-form_ using the following command: ng g c add-form
5. Add form to template _add-form.component.html_
6. Import _FormBuilder_ by adding _import { FormBuilder } from '@angular/forms';_ to _add-form.component.ts_
7. Inject _FormBuilder_ into _add-form_ component class by adding _constructor(private formBuilder: FormBuilder) { }_
8. Use the _group_ method to build the FormModel as shown in _add-form.component.ts_
9. Import _ReactiveFormsModule_ by adding _import { ReactiveFormsModule } from '@angular/forms';_ to _app.module.ts_
10. Add _ReactiveFormsModule_ to imports array in _app.module.ts_
11. Import _AddFormComponent_ by adding _import { AddFormComponent } from './add-form/add-form.component';_ to _app.module.ts_
12. Add _AddFormComponent_ to declarations array in _app.module.ts_
13. Create a component called _highcharts-chart_ using the following command: ng g c highcharts-chart
14. Download and install [angular-highcharts](https://www.npmjs.com/package/angular-highcharts) using npm
15. Import _ChartModule_ by adding _import { ChartModule } from 'angular-highcharts';_ to _app.module.ts_
16. Add _ChartModule_ to imports array in _app.module.ts_
17. Import _Chart_ by adding _import { Chart } from 'angular-highcharts';_ to _highcharts-chart.component.ts_
18. Add chart configuration to _highcharts-chart.component.ts_
19. Add chart to template _highcharts-chart.component.html_
20. Add routes as shown in _app-routing.module.ts_ for navigation between form and chart
21. Edit _app.component.html_ by adding `<router-outlet></router-outlet>`
22. Build app using the following command: ng-serve-o and the output should appear as follows:

![highchartsApp-form add form 2](https://user-images.githubusercontent.com/41340307/234589163-a4062c59-12aa-4dff-a70a-9fe41e6e0799.PNG)

![highchartsApp-form](https://user-images.githubusercontent.com/41340307/234589417-6e883691-3e31-4255-a171-edbe80cc207d.PNG)

![highchartsApp-form 2](https://user-images.githubusercontent.com/41340307/234589581-18dd0a50-e291-4d98-9504-0ecb13c43cef.PNG)

![highchartsApp-form add form 3](https://user-images.githubusercontent.com/41340307/234589679-959df543-7008-48b6-a954-3909bc101ca6.PNG)
