<template>
  <div class="heading-title unselectable">
    <img id="logo" src="@/assets/mainlogo.png" alt="Sprout Logo" :class="$mq">
    <div id="heading" :class="$mq">
        <router-link to="/" id="title" :class="$mq">{{ msg }}</router-link>
        <div id="nav">
            <router-link to="/" :class="$mq">home</router-link>
            <router-link to="/about" :class="$mq">about</router-link>
            <a href="https://github.com/mirrorkeydev/Sprout" rel="noopener" target="_blank" :class="$mq">github</a>
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
<style lang="postcss" scoped>
#title {
  margin-top: -5px;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
  display: inline-block;
  color: #3A3A3A;
  margin: 0px;
  font-size: 50px;
}
#title.mobile {
  font-size: 30px;
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
#logo.mobile {
  height: 40px;
}

#heading {
    margin-left: 30px;
    float: left;
}
#heading.mobile {
  margin-left: 15px;
}

a:link, a:visited, a:hover, a:active {
    text-decoration: none;
    color: #3A3A3A;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-left: 8px;
    margin-right: 5px;
}

a.mobile {
  margin-left: 2px;
  font-size: 13px;
}
</style>
