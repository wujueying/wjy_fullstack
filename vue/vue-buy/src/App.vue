<template>
  <div id="app">
    {{$t('home.currentLocation')}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log(this, '吴珏莹')
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
