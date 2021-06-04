<template>
  <label
    class="v-radio"
    :class="{
      [`v-radio--${size}`]: size,
      'v-radio--checked': isChecked,
      'v-radio--disabled': isDisabled
    }"
  >
    <input
      v-model="model"
      type="radio"
      class="v-radio__native"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >

    <span class="v-radio__input"/>

    <span class="v-radio__content">
      <slot/>
    </span>
  </label>
</template>

<script>
  import { UPDATE_MODEL_EVENT } from '../../utils/constants';
  import { isValidComponentSize } from '../../utils/validators';
  import { useRadio } from './useRadio';

  export default {
    name: 'VRadio',
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
      return useRadio(props, context);
    }
  };
</script>
