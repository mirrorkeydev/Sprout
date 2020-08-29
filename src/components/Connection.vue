<template>
  <div class="connection unselectable" :class="$mq">
    <img v-if="this.$store.state.connection_status === 'connected'" id="logo" src="@/assets/connected.png" alt="Connected" :class="$mq">
    <img v-if="this.$store.state.connection_status === 'connecting'" id="logo" src="@/assets/connecting.png" alt="Connecting" :class="$mq">
    <img v-if="this.$store.state.connection_status === 'connecting_failed'" id="logo" src="@/assets/connectingfailed.png" alt="Connection Failed" :class="$mq">
    <p v-if="this.$store.state.connection_status === 'connected' && $mq !== 'mobile'" :class="$mq">
      <span>connected </span>
      <span v-for="room in this.$store.state.rooms" :key="room.name"> "{{room}}" </span>
    </p>
    <div v-if="this.$store.state.connection_status === 'connected'" id="num-rooms" :class="$mq"> {{ this.$store.getters.NUM_ROOMS }} </div>
  </div>
</template>

<script>
export default {
  name: 'Connection',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
p {
  font-family: 'Roboto', sans-serif;
  width: 20px;
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
#num-rooms {
  position: absolute;
  right: 137px;
  top: 93px;
  font-weight: 700;
  color: #3A3A3A;
}
#num-rooms.mobile {
  right: 81px;
  top: 68px;
  font-size: 12px;
}
</style>
