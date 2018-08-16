<template>
  <img class="check-box" v-on:click="onClick" :src="imageSource" width="20px" height="20px">
</template>

<script>
import checkedImageSource from '../assets/checked.png'
import uncheckedImageSource from '../assets/unchecked.png'

export default {

  props: {
    boxChecked: Boolean,
    onClick: Function
  },

  data () {
    return {
      checkedImageSource,
      uncheckedImageSource
    }
  },

  computed: {
    imageSource () {
      if (this.boxChecked) {
        return checkedImageSource
      } else {
        return uncheckedImageSource
      }
    }
  }
}
</script>

<style>
.check-box:hover {
  cursor: pointer;
}
</style>
