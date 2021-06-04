<template>
  <div
    class="v-checkbox-group"
    :class="[
      `v-checkbox-group--${direction}`,
      {
        'v-checkbox-group--disabled': isDisabled,
      }
    ]"
    :aria-disabled="isDisabled"
  >
    <slot/>
  </div>
</template>

<script>
  import { inject, provide, readonly, computed } from 'vue';
  import { UPDATE_MODEL_EVENT } from '../../utils/constants';
  import { FORM_KEY, FORM_ITEM_KEY, CHECKBOX_GROUP_KEY } from '../../utils/keys';

  export default {
    name: 'VCheckboxGroup',
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

      function onChange (value) {
        emit(UPDATE_MODEL_EVENT, value);
        emit('change', value);
      }

      provide(CHECKBOX_GROUP_KEY, readonly({
        props,
        onChange
      }));

      return {
        isDisabled
      };
    }
  };
</script>
