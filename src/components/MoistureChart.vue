<template>
  <div class="chart-wrapper unselectable" :class="$mq" :style="cssProps">
    <h3 id="chart-title" :class="$mq" > {{ title }} </h3>
    <div class="chart" :style="cssProps" :class="$mq" >
        <v-chart :options="chartOptions" autoresize/>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'


export default {
  name: 'MoistureChart',
  components:{
      'v-chart': ECharts
  },
  props: {
      title: String,
      height: Number,
      width: Number
  },
  data () {
    let data = require('../../public/samplecharts/moisturebinnedbyhour.json')

    return {
      chartOptions: {
        xAxis:{
            data: data.map(obj => obj.x)
        },
        yAxis:{
            type: 'value',
            min: 100,
            splitNumber: 4,
            splitLine: {show: false}
        },
        series: [
          {
            type: 'line',
            data: data.map(obj => obj.y),
            lineStyle: {
                width: 3,
                color: ["#88DEE3"],
            },
            smoothMonotone: true,
            sampling: 'min',
            showSymbol: false,
            animationEasing: 'cubicInOut',
          },
          {
            type: 'line',
            data: data.map(obj => obj.y_series_0),
            lineStyle: {
                width: 3,
                color: ["#9E96FB"],
            },
            showSymbol: false,
            smoothMonotone: true,
            sampling: 'min',
            animationEasing: 'cubicInOut',
          }
        ],
        animationDuration: 1000,
      }
    }
  },
  computed: {
      // This allows props to be used in the css
      cssProps() {
          return {
             '--prop-height': (this.height) + "px",
             '--prop-width': (this.width) + "px",
             '--prop-height-mobile': (this.height)/2.5 + "px",
             '--prop-width-mobile': (this.width)/2.5 + "px"
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.chart-wrapper {
    height: var(--prop-height);
    width: var(--prop-width);
    display: inline-block;
    text-align: left;
    padding: 15px 20px 15px 20px;
}
.chart-wrapper.mobile {
    height: var(--prop-height-mobile);
    width: var(--prop-width-mobile);
}
.chart {
    height: 85%;
    width: var(--prop-width);
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13); 
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.13);
    padding: 10px 0px 20px 0px;
}
.chart.mobile {
    width: var(--prop-width-mobile);
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
