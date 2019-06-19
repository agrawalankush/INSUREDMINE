import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { MultiLineChartComponent } from './multi-line-chart/multi-line-chart.component';
const routes: Routes = [
  { path: 'stackedbar', component: StackedBarChartComponent },
  { path: 'multiline',        component: MultiLineChartComponent },
  { path: '',   redirectTo: '/stackedbar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
