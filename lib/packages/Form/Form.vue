<template>
  <form
    class="v-form"
    :class="{
      'v-form--disabled': disabled,
      'v-form--readonly': readonly
    }"
    :aria-disabled="disabled"
  >
    <slot
      :is-valid="isValid"
      :is-disabled="disabled"
      :is-readonly="readonly"
    />
  </form>
</template>

<script>
  import { provide, readonly, ref } from 'vue'

  export default {
    name: 'VForm',
    props: {
      disabled: Boolean,
      readonly: Boolean,
      showErrors: {
        type: Boolean,
        default: true
      },
      model: Object,
      rules: Object
    },
    setup (props) {
      const isValid = ref(false)

      function resetFields () {
        console.log('resetFields')
      }

      function clearValidate () {
        console.log('clearValidate')
      }

      function validate () {
        console.log('validate')
      }

      provide('Form', readonly(props))

      return {
        isValid,
        resetFields,
        clearValidate,
        validate
      }
    }
  }
</script>
