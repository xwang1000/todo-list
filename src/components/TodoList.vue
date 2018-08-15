<template>
  <div class="todo-list">
    <h1>TO DO LIST</h1>
    <div>
      <input type="text" placeholder="Enter todo." v-model="input" v-on:keydown.enter="addTodo">
      <button v-on:click="addTodo">+</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.description">
        {{todo.description}}
        {{todo.completed}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
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
      console.log(this.input)
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
