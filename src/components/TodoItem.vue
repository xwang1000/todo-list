<template>
  <li class="todo-item">
    {{todoItem.description}}
    {{todoItem.completed}}
  </li>
</template>

<script>
export default {
  props: {
    todoItem: Object
  }
}
</script>

<style>

</style>
