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

const createTodoItem = (description, completed = false) => {
  return {
    description,
    completed
  }
}

export default {
  components: {
    TodoItem: TodoItem
  },

  data () {
    return {
      input: '',
      todos: [
        createTodoItem('Drink water.'),
        createTodoItem('Jog at the beach.')
      ]
    }
  },

  methods: {
    addTodo () {
      this.todos.push(createTodoItem(this.input))
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
