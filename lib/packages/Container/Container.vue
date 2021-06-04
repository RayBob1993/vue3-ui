<template>
  <div
    class="v-container"
    :class="{
      'v-container--fluid': fluid,
    }"
  >
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'VContainer',
    props: {
      fluid: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
