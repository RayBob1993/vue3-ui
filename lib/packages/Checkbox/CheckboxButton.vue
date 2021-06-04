<template>
  <label
    class="v-checkbox-button"
    :class="[
      `v-checkbox-button--size-${size}`,
      {
        'v-checkbox-button--checked': isChecked,
        'v-checkbox-button--disabled': isDisabled
      }
    ]"
  >
    <input
      v-model="model"
      type="checkbox"
      class="v-checkbox-button__native"
      :disabled="isDisabled"
      :checked="isChecked"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
    >

    <span class="v-checkbox-button__content">
      <slot/>
    </span>
  </label>
</template>

<script>
  import { UPDATE_MODEL_EVENT } from '../../utils/constants';
  import { isValidComponentSize } from '../../utils/validators';
  import { useCheckbox } from './useCheckbox';

  export default {
    name: 'VCheckboxButton',
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
        default: 'default',
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
      return useCheckbox(props, context);
    }
  };
</script>
