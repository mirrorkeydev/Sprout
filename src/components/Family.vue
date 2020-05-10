<template>
  <div class="family-wrapper unselectable" :class="$mq">
    <div class="family" :class="$mq">
        <div class="plant" v-for="plant in family" :key="plant.given_name" :class="$mq">
            <img :src="require('@/assets/' + plant.icon + '.png')" :alt="plant.given_name">
            <span id="id-dot" :class="plant.given_name.toLowerCase()"></span>
            <span class="plant-name">{{ plant.given_name.toLowerCase() }}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Family',
  computed: {
      ...mapState(['family'])
  }
}
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
.plant {
    width: 200px;
    padding: 0px 30px 0px 30px;
}
.plant.tablet, .plant.mobile {
    width: 100px;
}
div {
    margin: 0px;
}
img {
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
.ophelia {
    background-color: #9E96FB;
}
.elinor {
    background-color: #88DEE3;
}
</style>
