<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <img class="todo-list__header__img" src="../assets/strawberry.png" alt="A strawberry." width="40px" height="40px">
      <h1 class="todo-list__title">Things to do.</h1>
      <img class="todo-list__header__img" src="../assets/strawberry.png" alt="A strawberry." width="40px" height="40px">

    </div>
    <div class="todo-list__data-boxes">
      <data-box :number="todosTotal" message="total"></data-box>
      <data-box :number="todosCompleted" message="completed"></data-box>
      <data-box :number="todosNotCompleted" message="not completed"></data-box>
    </div>
    <div class="todo-list__inputs">
      <input class="todo-list__input" type="text" placeholder="Start typing your todo..." v-model="input" v-on:keydown.enter="addTodo">
      <button class="todo-list__add-button" v-on:click="addTodo">+</button>
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
      <button class="todo-list__remove-button" v-on:click="removeCompleted">Remove Completed</button>
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

      this.saveTodos()
    },

    toggleTodo (index) {
      this.todos[index].completed = !this.todos[index].completed

      this.saveTodos()
    },

    removeCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)

      this.saveTodos()
    },

    saveTodos () {
      this.sortCompleted()
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    loadTodos () {
      const savedTodos = JSON.parse(localStorage.getItem('todos'))

      if (savedTodos) {
        this.todos = savedTodos
      }
    },

    sortCompleted () {
      const completedItems = this.todos.filter(todo => todo.completed)
      const incompletedItems = this.todos.filter(todo => !todo.completed)
      this.todos = incompletedItems.concat(completedItems)
    }
  },

  created () {
    this.loadTodos()
    this.sortCompleted()
  }
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-align: center;
}

.todo-list__header {
  color: brown;
  display: flex;
}

.todo-list__header__img {
  margin: 20px;
}

.todo-list {
  background-color: white;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 10px;
}

.todo-list__title {
  font-family: "Amatic SC", serif;
  font-size: 50px;
  margin: 5px;
}

.todo-list__inputs {
  display: flex;
  margin-bottom: 15px;
}

.todo-list__inputs * {
  margin: 0 5px;
}

.todo-list__input {
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  font-family: Roboto, sans-serif;
  font-weight: 300;
}

.todo-list__add-button {
  flex: 1;
  border-radius: 5px;
  background-color: #eee;
  font-size: 23px;
  border: 1px solid #ddd;
}

.todo-list__todo-items {
  padding-left: 0;
}

.todo-list__data-boxes {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.todo-list__remove-button {
  padding: 10px;
  width: 97%;
  color: brown;
  background-color: #eee;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  border-radius: 5px;
  margin-top: 5px;
  text-transform: lowercase;
}

.todo-list__remove-button:hover {
  cursor: pointer;
}

</style>
