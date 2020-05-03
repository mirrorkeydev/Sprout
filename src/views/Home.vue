<template>
  <div class="home">
    <HeadingTitle msg="SPROUT"/>
    <Connection/>
    <Family family=this.store.$state.family />
  </div>
</template>

<script>
// @ is an alias to /src
import HeadingTitle from '@/components/HeadingTitle.vue'
import Connection from '@/components/Connection.vue'
import Family from '@/components/Family.vue'

export default {
  name: 'Home',
  components: {
    HeadingTitle,
    Connection,
    Family
  }
}
</script>
