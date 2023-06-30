import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chart } from 'chart.js';
import { registerables } from 'chart.js';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FormsModule } from '@angular/forms';
Chart.register(...registerables);

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
