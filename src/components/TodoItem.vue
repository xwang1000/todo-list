<template>
  <li class="todo-item">
    {{todoItem.description}}
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
