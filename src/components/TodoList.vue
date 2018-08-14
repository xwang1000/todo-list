<template>
  <div class="todo-list">
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
      todos: [
        {
          description: "Drink water.",
          completed: false
        },
        {
          description: "Jogg at beach.",
          completed: true
        }
      ]
    }
  }
}

</script>

<style>

</style>
