<template>
  <div class="connection unselectable" :class="$mq">
    <img v-if="connection_status === 'connected'" id="logo" src="@/assets/connected.png" alt="Connected" :class="$mq">
    <img v-if="connection_status === 'connecting'" id="logo" src="@/assets/connecting.png" alt="Connecting" :class="$mq">
    <img v-if="connection_status === 'connecting_failed'" id="logo" src="@/assets/connectingfailed.png" alt="Connection Failed" :class="$mq">
    <p v-if="connection_status === 'connected' && $mq !== 'mobile'" :class="$mq">
      <span>sensors connected</span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Connection',
  computed: {
    ...mapState(['connection_status']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
p {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  width: 75px;
  font-weight: 500;
}
p.mobile {
  font-size: 13px;
  padding-right: 10px;
}
.connection {
  float: right;
  margin: 30px 60px 0px 0px;
}
.connection.mobile {
  margin: 35px 40px 0px 0px;
}
img {
  height: 80px;
  margin-left: -10px;
}
img.mobile {
  height: 40px;
}
</style>
