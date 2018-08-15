<template>
  <div class="data-box">
    <div class="data-box__number">{{number}}</div>
    <div class="data-box__message">{{message}}</div>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    message: String
  }
}
</script>

<style>
.data-box {
  background-color: #eee;
  padding: 15px 10px;
  margin: 5px;
  flex: 1;
  border-radius: 5px;
}

.data-box__number {
  font-size: 22px;
  font-weight: 700;
  color: black;
}

.data-box__message {
  font-size: 12px;
  color: grey;
}
</style>
