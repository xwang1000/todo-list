<template>
  <li
    class="todo-item"
    :class="{'todo-item--completed': todoItem.completed}"
  >
    <div class="todo-item__description">
      {{todoItem.description}}
    </div>
    <check-box :box-checked="todoItem.completed" :on-click="toggleCompleted"></check-box>
  </li>
</template>

<script>
import CheckBox from './CheckBox'

export default {
  components: {
    CheckBox
  },

  props: {
    todoItem: Object,
    toggleCompleted: Function
  }
}
</script>

<style>
.todo-item {
  list-style-type: none;
  text-align: left;
  padding: 10px;
  display: flex;
  width: 97%;
  margin: 10px auto;
  border-radius: 5px;
  background-color: #eee;
}

.todo-item--completed .todo-item__description {
  text-decoration: line-through;
}

.todo-item__description {
  flex: 6;
}

.todo-item__checkbox {
  flex: 1;
  text-align: center;

}
</style>
