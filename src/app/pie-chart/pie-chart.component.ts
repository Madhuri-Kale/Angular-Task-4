import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @ViewChild('myForm') myFormObj : any;

  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  box1Value: any;
  box2Value: any;
  
  patchValueforbox2(){
    if(this.myFormObj.value.box1 && this.myFormObj.value.box1 <= 100){
      this.myFormObj.form.patchValue({
        box2 : 100-this.myFormObj.value.box1
      })
    }
  }
  patchValueforbox1(){
    if(this.myFormObj.value.box2 && this.myFormObj.value.box2 <= 100){
      this.myFormObj.form.patchValue({
        box1 : 100-this.myFormObj.value.box2
      })
    }
  }
  onSubmit(){
    
    this.box1Value = this.myFormObj.value.box1;
    this.box2Value = this.myFormObj.value.box2

    this.chartData.push(this.box1Value);
    this.chartData.push(this.box2Value);

    this.chartDatalabels.push('Box1');
    this.chartDatalabels.push('Box2');

    this.ctx = document.getElementById('myChart');
    this.config = {
      type : 'pie',
      options : {
      },
      data : {
        labels : this.chartDatalabels,
        datasets : [{ 
          label: 'Chart Data',
          data: this.chartData,
          borderWidth: 5,
          borderColor: 'grey',
          backgroundColor: ['pink', 'skyblue']
      }],
      }
    }
    var myChart = new Chart(this.ctx, this.config);
    
   
    this.myFormObj.reset();
    
  }

}


