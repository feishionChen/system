let a = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [5, 3, 4, 7, 2]
  	}, {
      name: '小彭',
      data: [2, 2, 3, 2, 1]
  	}, {
      name: '小潘',
      data: [3, 4, 4, 2, 5]
  	}
  ]
}
let a1 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color:  'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [15, 3, 4, 7, 2]
  	}, {
      name: '小彭',
      data: [12, 2, 3, 2, 1]
  	}, {
      name: '小潘',
      data: [13, 4, 4, 2, 5]
  	}
  ]
}
let a2 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color:  'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [25, 3, 4, 7, 2]
  	}, {
      name: '小彭',
      data: [22, 2, 3, 2, 1]
  	}, {
      name: '小潘',
      data: [23, 4, 4, 2, 5]
  	}
  ]
}
let a3 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [5, 13, 4, 7, 2]
  	}, {
      name: '小彭',
      data: [2, 12, 3, 2, 1]
  	}, {
      name: '小潘',
      data: [3, 14, 4, 2, 5]
  	}
  ]
}
let a4 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color: 'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor: 'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color:  'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [5, 23, 4, 7, 2]
  	}, {
      name: '小彭',
      data: [2, 22, 3, 2, 1]
  	}, {
      name: '小潘',
      data: [3, 24, 4, 2, 5]
  	}
  ]
}
let a5 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color:  'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [5, 3, 14, 7, 2]
  	}, {
      name: '小彭',
      data: [2, 2, 13, 2, 1]
  	}, {
      name: '小潘',
      data: [3, 4, 14, 2, 5]
  	}
  ]
}
let a6 = {
	chart: {
    type: 'column'
	},
	title: {
    text: '堆叠柱形图'
	},
	xAxis: {
    categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
	},
	yAxis: {
    min: 0,
    title: {
      text: '水果消费总量'
    },
    stackLabels: {  // 堆叠数据标签
      enabled: true,
      style: {
        fontWeight: 'bold',
        color:'gray'
      }
    }
	},
	legend: {
    align: 'right',
    x: -30,
    verticalAlign: 'top',
    y: 25,
    floating: true,
    backgroundColor:'white',
    borderColor: '#CCC',
    borderWidth: 1,
    shadow: false
	},
	tooltip: {
    formatter: function () {
      return '<b>' + this.x + '</b><br/>' +
        this.series.name + ': ' + this.y + '<br/>' +
        '总量: ' + this.point.stackTotal;
    }
	},
	plotOptions: {
    column: {
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          // 如果不需要数据标签阴影，可以将 textOutline 设置为 'none'
          textOutline: '1px 1px black'
        }
      }
    }
	},
	series: [
  	{
      name: '小张',
      data: [5, 3, 24, 7, 2]
  	}, {
      name: '小彭',
      data: [2, 2, 23, 2, 1]
  	}, {
      name: '小潘',
      data: [3, 4, 24, 2, 5]
  	}
  ]
}

module.exports = {
  a, a1, a2, a3, a4, a5, a6
}