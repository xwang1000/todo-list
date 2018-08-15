<template>
  <div class="todo-list">
    <h1>TO DO LIST</h1>
    <div class="todo-list__data-boxes">
      <data-box :number="todosTotal" message="total"></data-box>
      <data-box :number="todosCompleted" message="completed"></data-box>
      <data-box :number="todosNotCompleted" message="not completed"></data-box>
    </div>
    <div>
      <input type="text" placeholder="Enter todo." v-model="input" v-on:keydown.enter="addTodo">
      <button v-on:click="addTodo">+</button>
    </div>
    <ul class="todo-list__todo-items">
      <todo-item
        v-for="(todo, index) in todos"
        :key="todo.id"
        :todo-item="todo"
        :toggle-completed="() => toggleTodo(index)"
      >
      </todo-item>
    </ul>
    <div>
      <button v-on:click="removeCompleted">Remove completed</button>
    </div>
  </div>

</template>

<script>
import TodoItem from './TodoItem'
import DataBox from './DataBox'
import getUniqueId from '../utility/getUniqueId'

const createTodoItem = (description, completed = false) => {
  return {
    id: getUniqueId(),
    description,
    completed
  }
}

export default {

  components: {
    TodoItem,
    DataBox
  },

  data () {
    return {
      input: '',
      todos: [
        createTodoItem('Drink water.'),
        createTodoItem('Jog at the beach.'),
        createTodoItem('Eat smoked salmon.', true),
        createTodoItem('Eat smoked tuna.'),
        createTodoItem('Feed a cat.'),
        createTodoItem('Pet a dog.', true)
      ]
    }
  },

  computed: {

    todosTotal () {
      return this.todos.length
    },

    todosCompleted () {
      return this.todos.filter(todo => todo.completed).length
    },

    todosNotCompleted () {
      return this.todosTotal - this.todosCompleted
    }
  },

  methods: {

    addTodo () {
      this.todos.push(createTodoItem(this.input))
      this.input = ''
    },

    toggleTodo (index) {
      this.todos[index].completed = !this.todos[index].completed
    },

    removeCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding: 25px;
}

.todo-list__todo-items {
  padding-left: 0;
}

.todo-list__data-boxes {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>
