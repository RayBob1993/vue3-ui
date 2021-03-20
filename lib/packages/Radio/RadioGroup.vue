<template>
  <div
    class="v-radio-group"
    :class="[
      `v-radio-group--${direction}`,
      {
        'v-radio-group--disabled': isDisabled,
      }
    ]"
    :aria-disabled="isDisabled"
  >
    <slot/>
  </div>
</template>

<script>
  import { inject, provide, readonly, computed } from 'vue'
  import { FORM_KEY, FORM_ITEM_KEY, RADIO_GROUP_KEY } from '../../utils/keys'

  export default {
    name: 'VRadioGroup',
    props: {
      modelValue: Array,
      disabled: Boolean,
      min: Number,
      max: Number,
      direction: {
        type: String,
        default: 'horizontal',
        validator: value => [
          'horizontal',
          'vertical'
        ].includes(value)
      },
    },
    setup (props) {
      const Form = inject(FORM_KEY)
      const FormItem = inject(FORM_ITEM_KEY)

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          props.disabled
      })

      provide(RADIO_GROUP_KEY, readonly(props))

      return {
        isDisabled
      }
    }
  }
</script>
