<template>
  <layout-documentation>
    <page title="Select">
      <example
        title="Базовый select"
        anchor="base-select"
      >
        <template #view>
          <v-select v-model="model"/>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'SelectPage',
    setup () {
      const model = ref('');

      return {
        model
      };
    }
  };
</script>
