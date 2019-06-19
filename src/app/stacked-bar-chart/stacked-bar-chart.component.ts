import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',
  styleUrls: ['./stacked-bar-chart.component.css']
})
export class StackedBarChartComponent implements OnInit, AfterViewInit {
  // public canvas: any;
  // public ctx: any;
  public chart: any;
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          'test',
          'Merge contact',
          'hk',
          'Testing Drip Tracking',
          'Testing camp new arch.',
          'DRip Camp new Arch',
          'drip camp new arch testing',
          'Support test',
          'test14',
          'testing',
          'saturday',
          'Testing tracking count',
          'monday',
          'EMAIL CAMPAIGN - SANTOSH TEST 1',
          'Testing Tuesday',
          'Tuesday',
          'Wednesday',
          'testcampaign',
          'test13',
          'test boune campaign',
          'TEST SUB',
          'tes3',
          'tes4',
          'test5',
          'Test for click count',
          'test2',
          'templaate testing',
          'new tags testing',
          'Testing nylas integration in drip',
          'drip test'
        ],
        // responsible for how many bars are gonna show on the chart
        // create 7 datasets, since we have 7 items
        // data[0] = labels[0]  | data[1] = labels[1] 
        // 0, if there is no data for the particular bar
        datasets: [{
          label: 'Sent',
          data: [89, 0, 0, 27, 204, 38, 36, 6, 14, 25, 43, 4, 43, 4, 4, 172, 88,
            43, 0, 0, 68, 5, 6, 126, 35, 3, 3, 3, 0, 0],
          backgroundColor: '#22aa99'
        }, {
          label: 'Complaint',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0],
          backgroundColor: '#994499'
        }, {
          label: 'Opened',
          data: [49, 0, 0, 7, 32, 17, 15, 1, 0, 0, 11, 1, 8, 1, 1, 65, 32, 22, 0, 0,
            32, 1, 3, 0, 13, 1, 3, 3, 0, 0],
          backgroundColor: '#316395'
        }, {
          label: 'Clicked',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0],
          backgroundColor: '#b82e2e'
        }, {
          label: 'Bounced',
          data: [5, 0, 0, 2, 12, 2, 0, 0, 12, 25, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 2, 2,
            126, 0, 0, 0, 0, 0, 0],
          backgroundColor: '#66aa00'
        }, {
          label: 'reject',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0],
          backgroundColor: '#dd4477'
        }, {
          label: 'All',
          data: [104, 3, 0, 94, 410, 41, 41, 6, 98, 102, 87, 4, 87, 4, 4, 160, 89,
            45, 0, 0, 68, 38, 38, 294, 44, 4, 4, 4, 4, 4],
          backgroundColor: '#0099c6'
        }]
      },
      options: {
        title: {
          display: true,
          fontSize: 18,
          text: 'INSUREDMINE Campaign Stacked Bar Chart'
        },
        responsive: false,
        legend: {
          position: 'top'
        },
        scales: {
          xAxes: [{
            stacked: true,// To make the bars stacked
            scaleLabel: {
              display: true,
              labelString: 'Titles',
              fontSize: 20
            } 
          }],
          yAxes: [{
            stacked: true,// this also..
            scaleLabel: {
              display: true,
              labelString: 'Event count',
              fontSize: 20
            } 
          }]
        }
      }
    });
  }
}