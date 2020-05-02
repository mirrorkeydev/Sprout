<template>
  <div class="home">
    <HeadingTitle msg="SPROUT"/>
    <Connection/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadingTitle from '@/components/HeadingTitle.vue'
import Connection from '@/components/Connection.vue'

export default {
  name: 'Home',
  components: {
    HeadingTitle,
    Connection
  }
}
</script>
