<template>
  <div
    class="v-button-group"
    :class="[
      `v-button-group--${direction}`,
      `v-button-group--size-${size}`,
      {
        'v-button-group--fluid': fluid,
        'v-button-group--disabled': isDisabled
      }
    ]"
    :aria-disabled="isDisabled"
  >
    <slot/>
  </div>
</template>

<script>
  import { isValidComponentSize, isValidDirection } from '../../utils/validators'
  import { provide, inject, computed, readonly } from 'vue'
  import { FORM_KEY, FORM_ITEM_KEY, BUTTON_GROUP_KEY } from '../../utils/keys'

  export default {
    name: 'VButtonGroup',
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator: isValidDirection
      },
      size: {
        type: String,
        default: 'default',
        validator: isValidComponentSize,
      },
      fluid: Boolean,
      disabled: Boolean
    },
    setup (props) {
      const Form = inject(FORM_KEY)
      const FormItem = inject(FORM_ITEM_KEY)

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          props.disabled
      })

      provide(BUTTON_GROUP_KEY, readonly(props))

      return {
        isDisabled
      }
    }
  }
</script>
