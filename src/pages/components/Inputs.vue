<template>
  <layout-documentation>
    <page title="Input">
      <example
        title="Базовое поле"
        anchor="base-input"
      >
        <template #view>
          <v-input v-model="model1"/>
        </template>
      </example>

      <example
        title="Textarea поле"
        anchor="textarea-input"
      >
        <template #view>
          <v-input
            type="textarea"
            rows="7"
            v-model="model2"
          />
        </template>
      </example>

      <example
        title="Password поле"
        anchor="password-input"
      >
        <template #view>
          <v-input
            type="password"
            show-password
            clearable
            v-model="model3"
          />
        </template>
      </example>

      <example
        title="Loading поле"
        anchor="loading-input"
      >
        <template #view>
          <v-input
            loading
            v-model="model4"
          />
        </template>
      </example>

      <example
        title="Limit поле"
        anchor="limit-input"
      >
        <template #view>
          <v-input
            show-limit
            maxlength="100"
            v-model="model5"
          />
        </template>
      </example>

      <example
        title="Clear поле"
        anchor="clear-input"
      >
        <template #view>
          <v-input
            clearable
            v-model="model6"
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'Inputs',
    setup () {
      const model1 = ref('');
      const model2 = ref('');
      const model3 = ref('');
      const model4 = ref('');
      const model5 = ref('');
      const model6 = ref('');


      return {
        model1,
        model2,
        model3,
        model4,
        model5,
        model6,
      }
    }
  }
</script>
