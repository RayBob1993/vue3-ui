<template>
  <figure
    class="v-image"
    :class="{
      'v-image--loading': loading,
      'v-image--error': error
    }"
  >
    <img
      :src="src"
      v-bind="$attrs"
      class="v-image__native"
      @load="onLoad"
      @error="onError"
      :class="{
        'v-image__native--cover': cover,
        'v-image__native--contain': contain
      }"
    >

    <div class="v-image__placeholder"></div>

    <slot name="error"/>
    <slot name="placeholder"/>
  </figure>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'VImage',
    inheritAttrs: false,
    props: {
      src: {
        type: String,
        required: true,
      },
      cover: {
        type: Boolean,
        default: true,
      },
      contain: {
        type: Boolean,
        default: false,
      },
      lazy: {
        type: Boolean,
        default: false,
      }
    },
    emits: [
      'load',
      'error'
    ],
    setup (props, { emit }) {
      const error = ref(false);
      const loading = ref(true);

      function onLoad (event) {
        loading.value = false;

        emit('load', event);
      }

      function onError (event) {
        error.value = true;
        loading.value = false;

        emit('error', event);
      }

      return {
        error,
        loading,
        onLoad,
        onError
      }
    }
  }
</script>
