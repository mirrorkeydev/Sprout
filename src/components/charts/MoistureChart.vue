<template>
  <div class="chart-and-title-wrapper" :class="$mq">
    <h3 id="chart-title" :class="$mq"> {{ title }} </h3>
    <div class="chart-wrapper unselectable" :class="$mq">
      <div class="chart" :class="$mq">
          <v-chart :options="chartOptions" autoresize/>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import { mapState } from 'vuex';

export default {
  name: 'MoistureChart',
  components:{
    'v-chart': ECharts,
  },
  props: {
    title: String,
    height: Number,
    width: Number,
  },
  computed: {
    ...mapState(['chart_data']),
  },
  watch: {
    chart_data(cd) {
      this.chartOptions.series[0].data = cd.soil_moisture.elinor;
      this.chartOptions.series[1].data = cd.soil_moisture.ophelia;
    },
  },
  data () {
    return {
      chartOptions: {
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            var colorSpan = color => '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + color + '"></span>';

            return  params[0].data[0].toLocaleString('en-US') + "<br>" +
              colorSpan(params[0].color) + "elinor: " + params[0].data[1].toFixed(2) + "<br>" + 
              colorSpan(params[1].color) + "ophelia: "+ params[1].data[1].toFixed(2);
          },
        },
        xAxis:{
          type: 'time',
        },
        yAxis:{
            type: 'value',
            min: 100,
            splitNumber: 4,
            splitLine: {show: false},
        },
        series: [
          {
            type: 'line',
            data: null,
            lineStyle: {
                width: 3,
            },
            smoothMonotone: true,
            sampling: 'min',
            showSymbol: false,
            color: ["#88DEE3"],
            animationEasing: 'cubicInOut',
          },
          {
            type: 'line',
            data: null,
            lineStyle: {
                width: 3,
            },
            showSymbol: false,
            smoothMonotone: true,
            sampling: 'min',
            color: ["#9E96FB"],
            animationEasing: 'cubicInOut',
          },
        ],
        animationDuration: 1000,
        grid: {
          top: '15%',
          left: 60,
          right: 60,
          bottom: 60,
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.chart-and-title-wrapper {
  text-align: left;
  margin: 0 auto;
  max-width: 100rem;
  padding: 15px 40px 15px 40px;
}
.chart-and-title-wrapper.mobile {
  padding: 15px 20px 15px 20px;
}
.chart-wrapper {
  height: 450px;
  width: 100%;
  display: inline-block;
}
.chart-wrapper.mobile {
  height: 250px;
}
.chart {
  height: 100%;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13); 
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13);
  padding: 0;
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
