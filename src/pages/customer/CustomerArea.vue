<template>
  <div class="area">
    <div id="highmaps" style="height:100%">加载中国地图数据中</div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import Highmaps from 'highcharts/modules/map';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import $ from 'jquery'
HighchartsDrilldown(Highcharts);
Highmaps(Highcharts);
export default {
  name: 'Customer',
  data () {
  	return {
  		date:[
  			{
  				name: '广东',
  				value: 80,
  				num:500,
  				drilldown:'guangdong'
  			}
  		]
    }
  },
  mounted(){
    let self = this;
    self.chinaMap()
  },
  methods:{
  	chinaMap(){
  		let self = this;
  		Highcharts.setOptions({
        lang: {
          drillUpText: '< 返回 “{series.name}”'
        }
      });
      let map = null
      let geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';
  		$.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
  			console.log('1',mapdata)
        let data = [];
        // 随机数据
        Highcharts.each(mapdata.features, function(md, index) {
        	// md.properties.num = Math.floor((Math.random() * 100) + 1)
         //  let tmp = {
         //    name: md.properties.name,
         //    value: 0 // 生成 1 ~ 100 随机值
         //  };
          let num = self.dataChangeInfo(md)
          // if(md.properties.drilldown) {
          //   tmp.drilldown = md.properties.drilldown;
          // }
          data.push(num);
        });
        console.log('2',data)
        map = new Highcharts.Map('highmaps', {
          chart: {
            events: {
              drilldown: function(e) {
                console.log(e);
                // 异步下钻
                if (e.point.drilldown) {
                  let pointName = e.point.properties.fullname;
                  map.showLoading('下钻中，请稍后...');
                  // 获取二级行政地区数据并更新图表
                  $.getJSON(geochina + e.point.drilldown + '.json&callback=?',function(data) {
                    data = Highcharts.geojson(data);
                    Highcharts.each(data, function(d) {
                      if(d.properties.drilldown) {
                        d.drilldown = d.properties.drilldown;
                      }
                      d.value = Math.floor((Math.random() * 100) + 1); // 生成 1 ~ 100 随机值
                    });
                    map.hideLoading();
                    map.addSeriesAsDrilldown(e.point, {
                      name: e.point.name,
                      data: data,
                      dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                      }
                    });
                    map.setTitle({
                      text: pointName
                    });
                  });
                }
              },
              drillup: function() {
                map.setTitle({
                  text: '中国'
                });
              }
            }
          },
          title: {
            text: '中国地图'
          },
          subtitle: {
            text: '<a href="https://www.hcharts.cn/mapdata">点击查看地图数据及详情，注意县级数据为收费数据，如果您有需要，请联系我们购买</a>'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          tooltip: {
            useHTML: true,
            headerFormat: '<table><tr><td>{point.name}</td></tr>',
            pointFormat: '<tr><td>全称</td><td>{point.properties.fullname}</td></tr>' +
            '<tr><td>行政编号</td><td>{point.properties.areacode}</td></tr>' +
            '<tr><td>父级</td><td>{point.properties.parent}</td></tr>' +
            '<tr><td>经纬度</td><td>{point.properties.longitude},{point.properties.latitude}</td></tr>'+
            '<tr><td>销量</td><td>{point.properties.sales}万台</td></tr>' ,
            footerFormat: '</table>'
          },
          colorAxis: {
            min: 0,
            minColor: '#fff',
            maxColor: '#006cee',
            labels:{
              style:{
                "color":"red","fontWeight":"bold"
              }
            }
          },
          series: [{
            data: data,
            mapData: mapdata,
            joinBy: 'name',
            name: '中国地图',
            states: {
              hover: {
                color: '#a4edba'
              }
            }
          }]
        });
      });
  	},
  	dataChangeInfo(reg){
  		let obj = {
				name: reg.properties.name,
				value: 0, //颜色深度值
				sales: 0, //销量额（万台）
				drilldown: reg.properties.drilldown
			}
  		if(reg.properties.drilldown) {
				if(reg.properties.drilldown == 'guangdong'){
					obj.value = 80
					reg.properties.sales = 508.55
	  		} else if(reg.properties.drilldown == 'beijing') {
	  			obj.value = 50
					reg.properties.sales = 104.72
	  		}else if(reg.properties.drilldown == 'anhui') {
	  			obj.value = 45
					reg.properties.sales = 404.89
	  		}else if(reg.properties.drilldown == 'hunan') {
	  			obj.value = 28
					reg.properties.sales = 97.23
	  		}else if(reg.properties.drilldown == 'hebei') {
	  			obj.value = 39
					reg.properties.sales = 116.8
	  		}else if(reg.properties.drilldown == 'chongqing') {
	  			obj.value = 67
					reg.properties.sales = 130.65
	  		}else if(reg.properties.drilldown == 'henan') {
	  			obj.value = 20
					reg.properties.sales = 170.43
	  		} else if(reg.properties.drilldown == 'shanxi') {
	  			obj.value = 20
					reg.properties.sales = 170.43
	  		}else if(reg.properties.drilldown == 'heilongjiang') {
	  			obj.value = 20
					reg.properties.sales = 170.43
	  		}else if(reg.properties.drilldown == 'jiangxi') {
	  			obj.value = 20
					reg.properties.sales = 170.43
	  		}else {
	  			obj = {}
	  		}
  		}
	  		
  		return obj
  	}
  }
}
</script>

<style lang="scss" scoped>
.area{
	height: calc(100% - 30px)
}
</style>

