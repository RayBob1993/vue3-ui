<template>
  <section class="example">
    <header class="example__header">
      <h2 class="example__title">
        <a
          v-if="anchor"
          :href="`${$route.path}#${anchor}`"
          class="example__anchor"
        >
          #
        </a>

        {{ title }}
      </h2>
    </header>

    <div class="example__body">
      <div class="example__view">
        <slot name="view"/>
      </div>

      <div class="example__code highlight">
        <pre>
          <code>
            <slot name="code"/>
          </code>
        </pre>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Example',
    props: {
      title: String,
      anchor: String
    },
    setup (props) {
      return props;
    }
  };
</script>
