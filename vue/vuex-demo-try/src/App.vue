<template>
  <div id="app">
    {{this.$store.state.count}}
    {{evenOrOdd}}
    <button @click="increment()">increment</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import { mapGetters,mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: mapGetters([ // 计算属性
    'evenOrOdd'
  ]),
  methods: mapActions([
    'increment',
    // 'decrement',
    // 'incrementIfOdd',
    // 'incrementAsync'
  ])
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
