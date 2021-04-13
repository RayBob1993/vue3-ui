<template>
  <div class="example-group">
    <div
      v-if="title"
      class="example-group__header"
    >
      <h3 class="example-group__title">
        {{ title }}
      </h3>
    </div>

    <div class="example-group__body">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExampleGroup',
    props: {
      title: String
    }
  }
</script>
