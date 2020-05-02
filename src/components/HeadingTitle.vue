<template>
  <div class="heading-title">
    <img id="logo" src="@/assets/mainlogo.png" alt="Sprout Logo">
    <div id="heading">
        <h1 id="title">{{ msg }}</h1>
        <div id="nav">
            <router-link to="/">add</router-link>
            <router-link to="/">settings</router-link>
            <router-link to="/">about</router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadingTitle',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 50px;
    display: inline-block;
    color: #3A3A3A;
    margin: 0px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.heading-title {
    margin: 30px;
    overflow: auto;
    display: inline-block;
}
#logo {
    float: left;
    height: 80px;
}
#heading {
    margin-left: 30px;
    float: left;
}
a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: #3A3A3A;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 5px;
}
#title {
    margin-top: -5px;
}
</style>
