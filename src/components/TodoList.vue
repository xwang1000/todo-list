<template>
  <div class="todo-list">
    <div class="todo-list__header">
      <h1 class="todo-list__title">Things to do</h1>
    </div>
    <div class="todo-list__data-boxes">
      <data-box :number="todosTotal" message="total"></data-box>
      <data-box :number="todosCompleted" message="completed"></data-box>
      <data-box :number="todosNotCompleted" message="not completed"></data-box>
    </div>
    <div class="todo-list__inputs">
      <input class="todo-list__input" type="text" placeholder="Start typing your todo..." v-model="input" v-on:keydown.enter="addTodo">
      <button class="todo-list__add-button" v-on:click="addTodo">add</button>
    </div>
    <ul class="todo-list__todo-items">
      <todo-item
        v-for="todo in todosProcessedForDisplay"
        :key="todo.id"
        :todo-item="todo"
        :toggle-completed="() => toggleTodo(todo.id)"
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
import getArrayFromMap from '../utility/getArrayFromMap'

const createTodoItem = (description, completed = false, id = getUniqueId()) => {
  return {
    id,
    createdAt: new Date().toISOString(),
    description,
    completed
  }
}

// functions that dont have side effects or dependencies
const getTodosSortedByCreationDate = todoList => {
  return todoList.sort((todoX, todoY) => {
    return new Date(todoX.createdAt) > new Date(todoY.createdAt)
  })
}

const getTodosSortedByCompletionStatus = todoList => {
  return [
    ...todoList.filter(todo => !todo.completed),
    ...todoList.filter(todo => todo.completed)
  ]
}

export default {

  components: {
    TodoItem,
    DataBox
  },

  data () {
    return {
      input: '',
      todos: {}
    }
  },

  computed: {

    todosArray () {
      return getArrayFromMap(this.todos)
    },

    todosTotal () {
      return this.todosArray.length
    },

    todosCompleted () {
      return this.todosArray.filter(todo => todo.completed).length
    },

    todosNotCompleted () {
      return this.todosTotal - this.todosCompleted
    },

    todosProcessedForDisplay () {
      // sort by completion status after
      return getTodosSortedByCompletionStatus(
        getTodosSortedByCreationDate(
          this.todosArray
        )
      )
    }
  },

  methods: {

    addTodo () {
      const newTodo = createTodoItem(this.input)
      this.todos[newTodo.id] = newTodo
      this.todos = { ...this.todos } // force vue detect changes

      this.input = ''

      this.saveTodos()
    },

    toggleTodo (id) {
      this.todos[id].completed = !this.todos[id].completed

      this.saveTodos()
    },

    removeCompleted () {
      Object.keys(this.todos).forEach(id => {
        if (this.todos[id].completed) {
          delete this.todos[id]
        }
      })
      this.todos = { ...this.todos } // force vue to detect changes

      this.saveTodos()
    },

    saveTodos () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    loadTodos () {
      const savedTodos = JSON.parse(localStorage.getItem('todos'))

      if (savedTodos) {
        this.todos = savedTodos
      } else {
        this.todos['0'] = createTodoItem('Drink Americano.', false, '0')
        this.todos['1'] = createTodoItem('Jog at the beach.', true, '1')
        this.todos['2'] = createTodoItem('Play bass.', false, '2')
      }
    }
  },

  created () {
    this.loadTodos()
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
  background-image: url(../assets/bg-leaf.png);
}

.todo-list {
  background-color: #F3D0D3;
  width: 400px;
  height: 400px;
  margin: 30px auto;
  border-radius: 230px;
}

.todo-list__header {
  color: white;
}

.todo-list__title {
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 55px;
  text-transform: uppercase;
  text-shadow: 0 5px 0 #E89BAC;
}

.todo-list__inputs {
  display: flex;
  margin-bottom: 15px;
  padding: 0;
  background-color: white;
  margin: 0 60px;
}

.todo-list__inputs * {
  margin: 0 5px;
}

.todo-list__input {
  font-size: 12px;
  padding: 5px;
  border: none;
  font-family: "Open Sans", monospace;
  font-weight: 300;
  color:grey;
  flex: 4;
}

.todo-list__add-button {
  flex: 1;  
  font-size: 14px;
  border: none;
  border-radius: 15px;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  color: grey;
}

.todo-list__add-button:hover {
  cursor: pointer;
  font-size: 15px;
  transition: font-size, 0.2s;
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
  padding: 12px;
  width: 50%;
  color: grey;
  background-color: papayawhip;
  /* background-image: linear-gradient(to left bottom, #ff9671, #ff8c76, #ff817e, #ff7887, #ff6f91); */
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  /* border-radius: 20px; */
  margin-top: 15px;
  text-transform: lowercase;
  border: none;
  box-shadow: 0 10px 15px rgba(0,0,0,0.03);
}

.todo-list__remove-button:hover {
  cursor: pointer;
  transform: rotate(5deg);
  transition: transform 0.3s ease-in;
}
</style>
