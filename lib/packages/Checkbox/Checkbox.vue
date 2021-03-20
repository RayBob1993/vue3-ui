<template>
  <label
    class="v-checkbox"
    :class="{
      [`v-checkbox--${size}`]: size,
      'v-checkbox--checked': isChecked,
      'v-checkbox--disabled': isDisabled
    }"
  >
    <input
      type="checkbox"
      v-model="model"
      class="v-checkbox__native"
      :disabled="isDisabled"
    >

    <span class="v-checkbox__input"/>

    <span class="v-checkbox__content">
      <slot/>
    </span>
  </label>
</template>

<script>
  import { UPDATE_MODEL_EVENT } from '../../utils/constants'
  import { isValidComponentSize } from '../../utils/validators'
  import { useCheckbox } from './useCheckbox'

  export default {
    name: 'VCheckbox',
    props: {
      modelValue: {
        type: [
          Boolean,
          Number,
          String
        ],
        default: () => undefined
      },
      value: {
        type: [
          Boolean,
          String,
          Number
        ],
        default: ''
      },
      disabled: Boolean,
      size: {
        type: String,
        validator: isValidComponentSize
      }
    },
    emits: [
      UPDATE_MODEL_EVENT
    ],
    setup (props) {
      return useCheckbox(props)
    }
  }
</script>
