<template>
  <div class="connection">
    <img id="logo" src="@/assets/connected.png" alt="Sprout Logo">
    <p>
    <span>connected </span>
    <span v-for="room in this.$store.state.rooms" :key="room.name"> "{{room}}" </span>
    </p>
    <div id="num-rooms"> {{ this.$store.getters.NUM_ROOMS }} </div>
  </div>
</template>

<script>
export default {
  name: 'Connection'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
    font-family: 'Roboto', sans-serif;
    width: 20px;
    font-weight: 500;
}
.connection {
    float: right;
    margin: 30px 60px 30px 30px;
}
img {
    height: 80px;
    margin-left: -10px;
}
#num-rooms {
    position: absolute;
    right: 137px;
    top: 93px;
    font-weight: 700;
    color: #3A3A3A;
}
</style>
