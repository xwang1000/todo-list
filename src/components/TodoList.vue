<template>
  <div class="todo-list">
    <h1>TO DO LIST</h1>
    <div>
      <input type="text" placeholder="Enter todo." v-model="input" v-on:keydown.enter="addTodo">
      <button v-on:click="addTodo">+</button>
    </div>
    <ul>
      <todo-item v-for="todo in todos" :key="todo.description" :todo-item="todo"></todo-item>
    </ul>
  </div>

</template>

<script>
import TodoItem from './TodoItem'

export default {
  components: {
    TodoItem: TodoItem
  },

  data () {
    return {
      input: '',
      todos: [
        {
          description: 'Drink water.',
          completed: false
        },
        {
          description: 'Jog at beach.',
          completed: true
        }
      ]
    }
  },

  methods: {
    addTodo () {
      this.todos.push({
        description: this.input,
        completed: false
      })
    }
  }
}
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  text-align: center;
}
</style>
