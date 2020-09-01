<template>
  <div class="home">
    <HeadingTitle msg="SPROUT"/>
    <Connection/>
    <SectionHeader text="the family" />
    <Family/>
    <div id="general-charts" :class="$mq">
      <MoistureChart title="soil moisture" />
    </div>
    <SectionHeader text="environment" />
    <div id="environment-charts" :class="$mq">
      <TemperatureChart title="temperature" :height="450" :width="800" />
      <PressureChart title="pressure" :height="450" :width="800" />
      <LightChart title="light" :height="450" :width="800" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Connection from '@/components/Connection.vue';
import Family from '@/components/Family.vue';
import HeadingTitle from '@/components/HeadingTitle.vue';
import LightChart from '@/components/charts/LightChart.vue';
import MoistureChart from '@/components/charts/MoistureChart.vue';
import PressureChart from '@/components/charts/PressureChart.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import TemperatureChart from '@/components/charts/TemperatureChart.vue';


export default {
  name: 'Home',
  components: {
    Connection,
    Family,
    HeadingTitle,
    LightChart,
    MoistureChart,
    PressureChart,
    SectionHeader,
    TemperatureChart,
  },
  mounted: function () {
    this.$store.dispatch('fetchData');

    setInterval(() => {
        this.$store.dispatch('fetchData');
      }, 30000);
  },
};
</script>

<style scoped>
#general-charts{
  padding-top: 40px;
  text-align: center;
}
#environment-charts{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 80px 80px 80px;
}
#environment-charts.mobile {
  padding: 0px;
}
</style>
