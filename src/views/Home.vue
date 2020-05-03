<template>
  <div class="home">
    <HeadingTitle msg="SPROUT"/>
    <Connection/>
    <SectionHeader text="the family" />
    <Family/>
    <div id="general-charts" :class="$mq">
      <Chart datatype="soil moisture" :height="450" :width="800" />
    </div>
    <SectionHeader text="environment" />
    <div id="environment-charts" :class="$mq">
      <Chart datatype="temperature" :height="450" :width="800" />
      <Chart datatype="humidity" :height="450" :width="800" />
      <Chart datatype="light" :height="450" :width="800" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadingTitle from '@/components/HeadingTitle.vue'
import Connection from '@/components/Connection.vue'
import Family from '@/components/Family.vue'
import Chart from '@/components/Chart.vue'
import SectionHeader from '@/components/SectionHeader.vue'


export default {
  name: 'Home',
  components: {
    HeadingTitle,
    Connection,
    Family,
    Chart,
    SectionHeader
  },
  mounted: function () {
    setInterval(() => {
        this.$store.dispatch('fetchData')
      }, 60000);
  },
}
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
  padding: 0px 20px 20px 20px;
}
</style>
