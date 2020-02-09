var dafaultMenuItem = Highcharts.getOptions().exporting.buttons.contextButton.menuItems;
Highcharts.stockChart('container', {
  yAxis: [{
    labels: {
      align: 'left'
    },
    height: '80%',
    resize: {
      enabled: true
    }
  }, {
    labels: {
      align: 'left'
    },
    top: '80%',
    height: '20%',
    offset: 0
  }],
  series: [
    //   {
    //   type: 'line',
    //   name: 'A股',
    //   data: ohlc
    // }, 
    {
      type: 'candlestick',
      name: 'A股',
      data: ohlc,
      color: 'green',
      lineColor: 'green',
      upColor: 'red',
      upLineColor: 'red',
      navigatorOptions: {
        color: Highcharts.getOptions().colors[0]
      }
    }
  ],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 800
      },
      chartOptions: {
        rangeSelector: {
          inputEnabled: false
        }
      }
    }]
  },
  exporting: {
    buttons: {
      contextButton: {
        // 自定义导出菜单项目及顺序
        menuItems: [
          dafaultMenuItem[0],
          {
            separator: true
          },
          dafaultMenuItem[3],
          dafaultMenuItem[5],
          dafaultMenuItem[1]
        ]
      }
    }
  }
});

for (var i = 0; i < 12; i++) {
  Highcharts.stockChart('m' + (i + 1), {
    title: {
      text: 'A股' + (i + 1) + '月集合',
      align: 'center'
    },
    yAxis: [{
      labels: {
        align: 'left'
      },
      height: '80%',
      resize: {
        enabled: true
      }
    }, {
      labels: {
        align: 'left'
      },
      top: '80%',
      height: '20%',
      offset: 0
    }],
    series: [{
      type: 'candlestick',
      name: 'A股' + (i + 1) + '月',
      data: obj[i + 1],
      color: 'green',
      lineColor: 'green',
      upColor: 'red',
      upLineColor: 'red',
      navigatorOptions: {
        color: Highcharts.getOptions().colors[0]
      }
    }],
    tooltip: {
      dateTimeLabelFormats:{
        millisecond: '',
        second: '',
        minute: '',
        hour: '',
        day: '',
        week: '',
        month: '',
        year: '%Y'
      },
      // formatter: function () {
      //   console.log(this.points)
      //   return 
      // }
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 800
        },
        chartOptions: {
          rangeSelector: {
            inputEnabled: false
          }
        }
      }]
    }
  });
}