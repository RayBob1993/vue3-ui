<template>
  <layout-documentation>
    <page title="Input">
      <example
        title="Базовое поле"
        anchor="base-input"
      >
        <template #view>
          <v-input v-model="model"/>
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
      const model = ref('');

      const onFocus = event => {
        console.log('onFocus', event);
      };

      const onBlur = event => {
        console.log('onBlur', event);
      };

      const onChange = event => {
        console.log('onChange', event);
      };

      const onInput = event => {
        console.log('onInput', event);
      };

      const onClear = () => {
        console.log('onClear');
      };

      const onExceed = () => {
        console.log('onExceed');
      };

      const onKeyup = event => {
        console.log('onKeyup', event);
      };

      const onKeydown = event => {
        console.log('onKeydown', event);
      };

      const onKeypress = event => {
        console.log('onKeypress', event);
      };

      return {
        model,
        onFocus,
        onBlur,
        onChange,
        onInput,
        onClear,
        onExceed,
        onKeyup,
        onKeydown,
        onKeypress
      }
    }
  }
</script>
