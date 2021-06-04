<template>
  <main class="layout layout-documentation">
    <app-header/>

    <aside class="layout-documentation__sidebar">
      <documentation-menu/>
    </aside>

    <section class="layout-documentation__content">
      <slot/>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'LayoutDocumentation'
  };
</script>
