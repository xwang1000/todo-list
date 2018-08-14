<template>
  <div>
    Hello todo list
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
