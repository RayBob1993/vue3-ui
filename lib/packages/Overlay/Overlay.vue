<template>
  <div
    class="v-overlay"
    :class="{
      'v-overlay--blur': blur
    }"
    @click="onClick"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'VOverlay',
    props: {
      blur: Boolean
    },
    emits: [
      'click'
    ],
    setup (props, { emit }) {
      function onClick () {
        console.log('click')
        emit('click')
      }

      return {
        onClick
      }
    }
  }
</script>
