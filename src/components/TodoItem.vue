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
  margin: 10px auto;
  max-width: 70%;
  border-radius: 3px;
  background-color: #E89BAC;
  color: #565676;
}

.todo-item--completed .todo-item__description {
  text-decoration: line-through;
  color: white;
}

.todo-item__description {
  flex: 6;
}

.todo-item__checkbox {
  flex: 1;
  text-align: center;

}
</style>
