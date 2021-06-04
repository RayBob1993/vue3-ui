<template>
  <label
    class="v-switch"
    :class="{
      [`v-switch--${size}`]: size,
      'v-switch--checked': isChecked,
      'v-switch--disabled': isDisabled
    }"
  >
    <input
      type="checkbox"
      :disabled="isDisabled"
      :checked="isChecked"
      class="v-switch__native"
      @change="onChange"
    >

    <span
      v-if="inactiveText"
      class="v-switch__title v-switch__title--inactive"
    >
      {{ inactiveText }}
    </span>

    <span class="v-switch__input"/>

    <span
      v-if="activeText"
      class="v-switch__title v-switch__title--active"
    >
      {{ activeText }}
    </span>
  </label>
</template>

<script>
  import { inject, computed } from 'vue';
  import { UPDATE_MODEL_EVENT } from '../../utils/constants';
  import { isValidComponentSize } from '../../utils/validators';
  import { FORM_KEY, FORM_ITEM_KEY } from '../../utils/keys';

  export default {
    name: 'VSwitch',
    props: {
      modelValue: {
        type: [
          Boolean,
          String,
          Number
        ],
        default: false
      },
      activeValue: {
        type: [
          Boolean,
          String,
          Number
        ],
        default: true
      },
      inactiveValue: {
        type: [
          Boolean,
          String,
          Number
        ],
        default: false
      },
      activeText: String,
      inactiveText: String,
      size: {
        type: String,
        validator: isValidComponentSize
      },
      disabled: Boolean
    },
    emits: [
      UPDATE_MODEL_EVENT,
      'change'
    ],
    setup (props, { emit }) {
      const Form = inject(FORM_KEY);
      const FormItem = inject(FORM_ITEM_KEY);

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          props.disabled;
      });

      const isChecked = computed(() => props.modelValue === props.activeValue);
      const value = computed(() => isChecked.value ? props.inactiveValue : props.activeValue);

      function onChange () {
        emit(UPDATE_MODEL_EVENT, value.value);
        emit('change', value.value);
      }

      return {
        isDisabled,
        isChecked,
        onChange
      };
    }
  };
</script>
