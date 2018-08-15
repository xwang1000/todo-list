<template>
  <li class="todo-item" v-on:click="toggleCompleted">
    {{todoItem.description}}
    {{todoItem.completed}}
  </li>
</template>

<script>
export default {
  props: {
    todoItem: Object,
    toggleCompleted: Function
  }
}
</script>

<style>
.todo-item {
  list-style-type: none;
}
</style>
