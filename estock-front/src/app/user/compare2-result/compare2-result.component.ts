import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare2-result',
  templateUrl: './compare2-result.component.html',
  styleUrls: ['./compare2-result.component.css']
})
export class Compare2ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chartOption = {
    title: {
        text: '股价图'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data: ['公司1', '公司2']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name: '公司1',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '公司2',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
}
}
