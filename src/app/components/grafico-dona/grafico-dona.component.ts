import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

   // Doughnut
   @Input('chartLabels') public doughnutChartLabels: Label[] = [];
   @Input('chartData') public doughnutChartData: MultiDataSet = [];
   @Input('chartType') public doughnutChartType: ChartType = '';

  constructor() { }

  ngOnInit() {
  }

}
