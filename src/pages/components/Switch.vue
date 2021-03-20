<template>
  <layout-documentation>
    <page title="Switch">
      <example
        title="Базовый переключатель"
        anchor="base-switch"
      >
        <template #view>
          <v-switch
            v-model="model"
            activeValue="Да"
            inactiveValue="Нет"
            activeText="Да"
            inactiveText="Нет"
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'SwitchPage',
    setup () {
      const model = ref('Да');

      return {
        model
      }
    }
  }
</script>
