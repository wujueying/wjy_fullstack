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
    <section class="main" v-show="todos.length">
      <ul class="todo-list">
        <TodoItem
          v-for="(todo, index) in filteredTodos" 
          :key="index"
          :todo="todo"
        /> 
      </ul>
    </section>
  </section>
</template>

<script>
const filters = {
  all: todos => todos 
}
export default {
  name: 'App',
  data(){
    return {
      visibility: 'all'
    }
  },
  computed:{
    todos() {
      return this.$store.state.todos 
    }, 
    filteredTodos() { 
      return filters[this.visibility](this.todos)
    } 
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch('addTodo', e.target.value),
       e.target.value = ''
    }
   
  },
  components: {  
  },
  filters:{

  }
}
</script>

<style src="todomvc-app-css/index.css">
</style>
