<template>
  <div class="wrapper unselectable" :class="$mq">
    <h3 id="the-text" :class="$mq"> {{ text }} </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SectionHeader',
  computed: {
      ...mapState(['family'])
  },
  props: {
      text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
.wrapper {
    text-align: center;
}
#the-text {
    font-family: 'Sacramento', cursive;
    font-size: 70px;
    font-weight: 200;
    color: #828282;
    margin-bottom: 20px;
    margin-top: 35px;
}
#the-text.mobile{
    font-size: 50px;
}
</style>
