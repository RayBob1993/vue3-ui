<template>
  <div
    class="v-form-item"
    :class="{
      'v-form-item--disabled': isDisabled,
      'v-form-item--readonly': isReadonly,
      'v-form-item--required': isRequired,
      'v-form-item--error': hasValidationErrors
    }"
    :aria-disabled="isDisabled"
  >
    <label
      v-if="label"
      class="v-form-item__label"
    >
      <span
        v-if="isRequired"
        class="v-form-item__label-required"
      >
        *
      </span>

      {{ label }}
    </label>

    <slot/>

    <div
      v-if="isShowErrors"
      class="v-form-item__errors"
    >
      <div
        v-for="(error, index) in validationErrors"
        :key="`error-${index}`"
        class="v-form-item__error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, computed, provide, inject, readonly } from 'vue';
  // import Schema from 'async-validator'

  export default {
    name: 'VFormItem',
    props: {
      disabled: Boolean,
      readonly: Boolean,
      prop: String,
      label: String,
      showErrors: {
        type: Boolean,
        default: true
      }
    },
    setup (props) {
      const Form = inject('Form');

      const value = computed(() => Form && Form.model[props.prop]);
      const validationRules = computed(() => Form && Form.rules[props.prop]);

      const isDisabled = computed(() => Form && Form.disabled || props.disabled);
      const isReadonly = computed(() => Form && Form.readonly || props.readonly);
      const isRequired = computed(() => validationRules.value && !!validationRules.value.find(rule => rule.required === true));

      const validationErrors = ref([]);
      const hasValidationErrors = computed(() => !!validationErrors.value.length);
      const isShowErrors = computed(() => Form && Form.showErrors && props.showErrors && hasValidationErrors.value);

      // const validator = new Schema({
      //
      // }, {
      //   firstFields: true
      // });

      provide('FormItem', readonly(props));

      return {
        isDisabled,
        isReadonly,
        validationErrors,
        hasValidationErrors,
        isShowErrors,
        isRequired,
        value
      };
    }
  };
</script>
