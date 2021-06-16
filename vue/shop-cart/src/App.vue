<template>
  <section class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input 
        type="text" 
        class="new-todo" 
        autofocus 
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"/>
    </header>
  </section>
</template>

<script>
export default {
  name: 'App',
  methods: {
    addTodo() {
      console.log('-----')
    }
  },
  components: {  
  }
}
</script>

<style src="todomvc-app-css/index.css">
</style>
