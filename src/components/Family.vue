<template>
  <div class="family-wrapper unselectable" :class="$mq">
    <div class="family" :class="$mq">
      <div class="plant" v-for="plant in family" :key="plant.given_name" :class="$mq">
        <IconPlantPointy v-if="plant.icon === 'pointy'" :hexColor="plant_status[plant.given_name]" />
        <IconPlantRound v-if="plant.icon === 'round'" :hexColor="plant_status[plant.given_name]" />
        <span id="id-dot" :style="'background-color:'+ plant.color + ';'"></span>
        <span class="plant-name">{{ plant.given_name.toLowerCase() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IconPlantPointy from '@/components/icons/IconPlantPointy.vue';
import IconPlantRound from '@/components/icons/IconPlantRound.vue';

const GREY = '#ccc';
const GREEN = '#b6f0b5';
const YELLOW = '#f8e09f';
const RED = '#f8ab9f';

export default {
  name: 'Family',
  computed: {
    ...mapState(['family', 'chart_data']),
    plant_status() {
      return Object.fromEntries(this.family.map(p => {

        // Compare soil moisture from 3 days ago with today's soil moisture; if the plant's been 
        // watered in the last three days, then we wna
        const curmoisture = this.chart_data.soil_moisture[p.given_name]?.slice(0, -1)[0][1];
        const oldmoisture = this.chart_data.soil_moisture[p.given_name]?.slice()
          .reverse()
          .find((e) => e[0] < new Date(new Date() - 1000 * 60 * 60 * 24 * 3))[1];
        const moisture = curmoisture > oldmoisture ? curmoisture : oldmoisture;

        if (typeof moisture === 'number' && !isNaN(moisture)) {
          if (moisture > p.green_threshold) {
            return [p.given_name, GREEN];
          } else if (moisture > p.yellow_threshold) {
            return [p.given_name, YELLOW];
          }
          return [p.given_name, RED];
        }
        return [p.given_name, GREY];
      }));
    },
  },
  components: {
    IconPlantPointy,
    IconPlantRound,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.family-wrapper {
  text-align: center;
}
.family {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.plant, .plant.tablet {
  width: 200px;
  padding: 0px 30px 0px 30px;
}
.plant.mobile {
  width: 100px;
}
div {
  margin: 0px;
}
svg {
  height: 100%;
  width: 100%;
}
.plant-name {
  font-family: 'Roboto Mono', monospace;
  font-weight: 600;
  font-size: 14px;
  padding: 3px;
}
#id-dot{
  display:inline-block;
  margin-right:5px;
  border-radius:10px;
  width:9px;
  height:9px;
}
</style>
