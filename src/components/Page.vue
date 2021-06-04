<template>
  <section class="page">
    <header class="page__header">
      <v-container>
        <h1 class="page__title">
          {{ title }}
        </h1>
      </v-container>
    </header>

    <div class="page__content">
      <v-container>
        <slot/>
      </v-container>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Page',
    props: {
      title: String
    }
  };
</script>
