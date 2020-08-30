<template>
  <div>
    <HeadingTitle msg="SPROUT"/>
    <div class="about">
      <SectionHeader text="about" />
      <p :class="$mq">
        Sprout was made by <a href="https://github.com/mirrorkeydev">Melanie Gutzmann</a>
        and <a href="https://github.com/prototypicalpro">Noah Koontz</a>. The project
        is inspired by (and connected to) Melanie's plant collection, pictured below.
      </p>
    </div>
    <div id="image-grid-wrapper" :class="$mq">
      <img v-for="(image, i) in images" :key="i" :src="image" alt="" :class="$mq">
    </div>
  </div>
</template>

<script>
import HeadingTitle from '@/components/HeadingTitle.vue'
import SectionHeader from '@/components/SectionHeader.vue'

export default {
  name: 'About',
  components: {
    HeadingTitle,
    SectionHeader
  },
  data: function () {
    return {
      images: new Array(11).fill(0).map((e, i) => `./img/plants/plant${i+1}.jpg`),
    }
  }
}
</script>

<style scoped>
.about{
  text-align: center;
}
h1 {
  display: inline-block;
  margin: 0px 0px 40px 0px;
}
p {
  margin: 0vw 30vw 40px 30vw
}
p.mobile{
  margin: 0vw 10vw 40px 10vw
}
img {
  display: inline-block;
  border-radius: 5px;
  margin: 10px;
  max-height: 300px;
}
img.tablet {
 max-height: 225px;
 margin: 5px;
}
img.mobile {
 max-height: 150px;
 margin: 5px;
}
#image-grid-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 20vw 0px 20vw;
}
#image-grid-wrapper.tablet{
  margin: 0px 10vw 0px 10vw;
}
#image-grid-wrapper.mobile{
  margin: 0px 0vw 0px 0vw;
}
a:link, a:visited, a:hover, a:active {
    text-decoration: none;
}
</style>