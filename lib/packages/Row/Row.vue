<template>
  <div
    class="v-row"
    :class="{
      [`v-row--justify-${justify}`]: justify,
      [`v-row--align-${align}`]: align,
      'no-gutters': !gutters,
    }"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VRow',
  props: {
    justify: {
      type: String,
      validator: value => [
        'start',
        'center',
        'end',
        'around',
        'between'
      ].includes(value)
    },
    align: {
      type: String,
      validator: value => [
        'start',
        'center',
        'end',
        'baseline',
        'stretch'
      ].includes(value)
    },
    gutters: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
