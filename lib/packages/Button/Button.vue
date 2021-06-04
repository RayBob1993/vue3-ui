<template>
  <button
    class="v-button"
    :class="[
      `v-button--${type}`,
      `v-button--size-${currentSize}`,
      {
        'v-button--rounded': rounded,
        'v-button--circle': circle,
        'v-button--disabled': isDisabled,
        'v-button--expanded': expanded,
        'v-button--outline': outline,
        'v-button--loading': loading,
        'v-button--square': square
      }
    ]"
    :disabled="isDisabled"
    :type="nativeType"
    :autofocus="autofocus"
    @click="onClick"
    @blur="onBlur"
    @focus="onFocus"
  >
    <template v-if="!$slots.default">
      <v-icon
        v-if="isIconAlignLeft"
        :class="{
          'v-icon--left': isIconAlignLeft
        }"
        :name="icon"
      />

      <span
        v-if="label"
        class="v-button__label"
      >
        {{ label }}
      </span>

      <v-icon
        v-if="isIconAlignRight"
        :class="{
          'v-icon--right': isIconAlignRight
        }"
        :name="icon"
      />
    </template>

    <slot
      v-else
      :isDisabled="isDisabled"
      :label="label"
    />
  </button>
</template>

<script>
  import { computed, inject } from 'vue';
  import { isValidComponentSize } from '../../utils/validators';
  import { FORM_KEY, FORM_ITEM_KEY, BUTTON_GROUP_KEY } from '../../utils/keys';

  export default {
    name: 'VButton',
    props: {
      label: String,
      type: {
        type: String,
        default: 'default',
        validator: value => [
          'default',
          'primary',
          'success',
          'danger',
          'warning',
          'info',
          'link',
          'text',
          'secondary'
        ].includes(value)
      },
      to: {
        type: [
          String,
          Object,
        ],
        default: null,
      },
      icon: String,
      iconAlign: {
        type: String,
        default: 'left',
        validator: value => [
          'left',
          'right'
        ].includes(value)
      },
      size: {
        type: String,
        default: 'default',
        validator: isValidComponentSize
      },
      nativeType: {
        type: String,
        default: 'button',
        validator: value => [
          'button',
          'submit',
          'reset'
        ].includes(value)
      },
      loading: Boolean,
      outline: Boolean,
      square: Boolean,
      rounded: Boolean,
      disabled: Boolean,
      expanded: Boolean,
      circle: Boolean,
      autofocus: Boolean,
    },
    emits: [
      'click',
      'blur',
      'focus'
    ],
    setup (props, { emit }) {
      const Form = inject(FORM_KEY);
      const FormItem = inject(FORM_ITEM_KEY);
      const ButtonGroup = inject(BUTTON_GROUP_KEY);

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          ButtonGroup && ButtonGroup.disabled ||
          props.disabled ||
          props.loading;
      });

      const currentSize = computed(() => (ButtonGroup && ButtonGroup.size) || props.size);

      const isIconAlignLeft = computed(() => props.icon && props.iconAlign === 'left');
      const isIconAlignRight = computed(() => props.icon && props.iconAlign === 'right');

      function onClick (event) {
        emit('click', event);
      }

      function onBlur (event) {
        emit('blur', event);
      }

      function onFocus (event) {
        emit('focus', event);
      }

      return {
        isDisabled,
        isIconAlignLeft,
        isIconAlignRight,
        currentSize,
        onClick,
        onBlur,
        onFocus
      };
    }
  };
</script>
