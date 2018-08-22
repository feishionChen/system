var aaa = {
  chart: {
    type: 'column'
  },
  title: {
    text: '年销量'
  },
  subtitle: {
    text: '数据来源: 万之声电子科技公司'
  },
  xAxis: {
    categories: [
      '2014','2015','2016','2017','2018'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: '销量 (Wpcs)'
    }
  },
  tooltip: {
    // head + 每个 point + footer 拼接成完整的 table
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    '<td style="padding:0"><b>{point.y:.1f} Wpcs</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      borderWidth: 0
    }
  },
  series: [{
    name: 'IR',
    data: [1307.68, 1480.55, 1325.59, 1490.37, 1508.75]
  }, {
    name: 'RF',
    data: [183.6, 250.45, 290.33, 560.14,707.89]
  }]
}
 var bbb = {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	},
	title: {
		text: 'IR遥控器市场比例'
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				style: {
					color:'black'
				}
			}
		}
	},
	series: [{
		name: 'Remotes',
		colorByPoint: true,
		data: [{
			name: '普通红外',
			y: 45.41,
			sliced: true,
			selected: true
		}, {
			name: '学习型',
			y: 51.84
		}, {
			name: '万能型',
			y: 37.85
		}, {
			name: '其他',
			y: 10.67
		}]
}]
}
var ccc =  {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	},
	title: {
		text: 'RF遥控器市场比例'
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
					enabled: false
			},
			showInLegend: true
		}
	},
	series: [{
		name: 'Remotes',
		colorByPoint: true,
		data: [{
			name: '蓝牙',
			y: 61.41,
			sliced: true,
			selected: true
		}, {
			name: '空鼠',
			y: 31.84
		}, {
			name: '2.4G',
			y: 28.85
		}, {
			name: '蓝牙+语音',
			y: 24.67
		}, {
			name: '其他',
			y: 10.18
		}]
	}]
}
module.exports = {
  aaa , bbb, ccc
}