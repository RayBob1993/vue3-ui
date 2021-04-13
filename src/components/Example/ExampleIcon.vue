<template>
  <v-card class="example-icon">
    <v-icon
      strokeWidth="1"
      :name="name"
    />

    <template #afterBody>
      <h6 class="v-card__title">
        {{ name }}
      </h6>
    </template>
  </v-card>
</template>

<script>
  export default {
    name: 'ExampleIcon',
    props: {
      name: String
    }
  }
</script>
