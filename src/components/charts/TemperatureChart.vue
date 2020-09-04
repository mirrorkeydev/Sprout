<template>
  <div class="chart-wrapper unselectable" :class="$mq">
    <h3 id="chart-title" :class="$mq"> {{ title }} </h3>
    <div class="chart" :class="$mq">
        <v-chart :options="chartOptions" autoresize/>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/tooltip';
import { mapState } from 'vuex';

export default {
  name: 'TemperatureChart',
  components:{
      'v-chart': ECharts,
  },
  props: {
      title: String,
      height: Number,
      width: Number,
  },
  data () {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';

            return params[0].data[0].toLocaleString('en-US') + "<br>" + colorSpan(params[0].color) + params[0].data[1].toFixed(2);
          },
        },
        xAxis:{
          type: 'time',
        },
        yAxis:{
          type: 'value',
          min: 10,
          splitNumber: 4,
          splitLine: {show: false},
        },
        visualMap: {
          show: false,
          type: 'continuous',
          min: 10,
          max: 40,
          color: ['#F7948C', '#F7E28C'],
        },
        series: [
          {
            type: 'line',
            data: null,
            lineStyle: {
              width: 3,
            },
            showSymbol: false,
            smoothMonotone: true,
            sampling: 'min',
            animationEasing: 'cubicInOut',
          },
        ],
        animationDuration: 1000,
        animationEasing: 'cubicInOut',
        grid: {
          top: '15%',
        },
      },
    };
  },
  computed: {
    ...mapState(['chart_data']),
  },
  watch: {
    chart_data(cd) {
      // Temperature readings run about 8 degrees too hot
      this.chartOptions.series[0].data = cd.temperature.map((t) => 
      { 
        let temp = Object.assign([], t);
        temp[1] = temp[1] - 8;
        return temp; 
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.chart-wrapper {
  height: 350px;
  display: inline-block;
  flex: 0 1 600px;
  text-align: left;
  margin: 10px;
  padding: 15px 20px 15px 20px;
}
.chart-wrapper.mobile {
  height: 250px;
  width: 90%;
}
.chart {
  height: 85%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13); 
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13);
  padding: 10px 0px 20px 0px;
}
.chart.mobile {
  padding: 0px 20px 0px 20px;
}
#chart-title {
  font-weight: 900;
  font-size: 21px;
  margin: 0px 0px 20px 20px;
  color:rgb(82, 82, 82);
}
#chart-title.mobile {
  font-size: 15px;
  margin: 0px 0px 15px 15px;
}
.echarts{
  height: 100%;
  width: 100%;
}
</style>
