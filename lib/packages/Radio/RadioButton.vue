<template>
  <label
    class="v-radio-button"
    :class="{
      [`v-radio-button--${size}`]: size,
      'v-radio-button--checked': isChecked,
      'v-radio-button--disabled': isDisabled
    }"
  >
    <input
      type="radio"
      v-model="model"
      class="v-radio-button__native"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >

    <span class="v-radio-button__content">
      <slot/>
    </span>
  </label>
</template>

<script>
  import { UPDATE_MODEL_EVENT } from '../../utils/constants'
  import { isValidComponentSize } from '../../utils/validators'
  import { useRadio } from './useRadio'

  export default {
    name: 'VRadioButton',
    props: {
      modelValue: {
        type: [
          Boolean,
          Number,
          String
        ],
        default: () => undefined,
      },
      value: {
        type: [
          Boolean,
          String,
          Number
        ],
        default: '',
      },
      disabled: Boolean,
      checked: Boolean,
      size: {
        type: String,
        validator: isValidComponentSize,
      }
    },
    emits: [
      UPDATE_MODEL_EVENT,
      'change',
      'focus',
      'blur'
    ],
    setup (props, context) {
      return useRadio(props, context)
    }
  }
</script>
