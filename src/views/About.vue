<template>
  <div>
    <HeadingTitle msg="SPROUT"/>
    <div class="about">
      <SectionHeader text="about" />
      <div id="main-wrapper">
        <div class="about-connection">
          <img id="about-connection-img" :class="$mq" :src="'./img/plants/plantconnection.jpg'" alt="">
        </div>
        <p id="text" :class="$mq">
          Sprout was made by <a href="https://github.com/mirrorkeydev">Melanie Gutzmann</a>
          and <a href="https://github.com/prototypicalpro">Noah Koontz</a>. The project
          is inspired by (and connected to) Melanie's plant collection.
          <br><br>
          The current setup consists of two "Chirp!" soil moistures connected to an 
          Azure Sphere MT3620. These collect environmental data every 2 minutes, and
          publish the data to a MongoDB instance hosted on Atlas every 10 minutes.
          This site queries the data through an AWS Lambda API.
        </p>
        <div id="image-grid-wrapper" :class="$mq">
          <img class="image-grid-img" v-for="(image, i) in images" :key="i" :src="image" alt="" :class="$mq">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import HeadingTitle from '@/components/HeadingTitle.vue';
import SectionHeader from '@/components/SectionHeader.vue';

export default {
  name: 'About',
  components: {
    HeadingTitle,
    SectionHeader,
  },
  data: function () {
    return {
      images: new Array(10).fill(0).map((e, i) => `./img/plants/plant${i+2}.jpg`),
    };
  },
};
</script>

<style scoped>
.about{
  text-align: center;
}
h1 {
  display: inline-block;
  margin: 0 0 40px 0;
}
.image-grid-img {
  display: inline-block;
  border-radius: 5px;
  margin: 10px;
  max-height: 200px;
}
.image-grid-img.tablet {
 max-height: 175px;
 margin: 5px;
}
.image-grid-img.mobile {
 max-height: 125px;
 margin: 5px;
}
#image-grid-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex: 1 0 700px;
  margin: 10px;
}
#image-grid-wrapper.tablet{
  flex: 1 0 500px;
  margin: 0px 10vw 0px 10vw;
}
#image-grid-wrapper.mobile{
  flex: 1 0 350px;
  margin: 0;
}
a:link, a:visited, a:hover, a:active {
  text-decoration: none;
}
.about-connection {
  flex: 1 1 300px;
}
#about-connection-img{
  height: 600px;
  margin: 10px;
}
#about-connection-img.tablet{
  height: 500px;
}
#about-connection-img.mobile{
  height: 400px;
}
#main-wrapper{
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 10vw 100px 10vw;
}
#text {
  display: initial;
  flex: 1 1 100px;
  padding: 1vw;
  margin: 1vw;
  min-width: 150px;
}
#text.tablet {
  padding: 15px;
  margin: 15px;
}
#text.mobile {
  padding: 10px 0;
  margin: 10px 0;
}
</style>