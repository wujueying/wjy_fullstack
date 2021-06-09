<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
      <h1>当前点赞数{{love_count}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 100
    }
  },
  computed: {
    love_count () {
      if (this.count > 99) {
        return '99+'
      } else {
        return this.count
      }
    }
  }
}
</script>
