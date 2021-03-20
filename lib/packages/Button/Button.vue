<template>
  <button
    class="v-button"
    :class="[
      `v-button--${type}`,
      {
        [`v-button--${size}`]: size,
        'v-button--rounded': rounded,
        'v-button--circle': circle,
        'v-button--disabled': isDisabled,
        'v-button--expanded': expanded,
        'v-button--outline': outline,
        'v-button--loading': loading,
      },
    ]"
    :disabled="isDisabled"
    :type="nativeType"
    :autofocus="autofocus"
    @click="onClick"
    @blur="onBlur"
    @focus="onFocus"
  >
    <span
      v-if="label"
      class="v-button__label"
    >
      {{ label }}
    </span>

    <slot :isDisabled="isDisabled"/>
  </button>
</template>

<script>
  import { computed, inject } from 'vue'
  import { isValidComponentSize } from '../../utils/validators'
  import { FORM_KEY, FORM_ITEM_KEY, BUTTON_GROUP_KEY } from '../../utils/keys'

  export default {
    name: 'VButton',
    props: {
      label: {
        type: String,
        default: '',
      },
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
      icon: {
        type: String,
        default: '',
      },
      size: {
        type: String,
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
      const Form = inject(FORM_KEY)
      const FormItem = inject(FORM_ITEM_KEY)
      const ButtonGroup = inject(BUTTON_GROUP_KEY)

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          ButtonGroup && ButtonGroup.disabled ||
          props.disabled ||
          props.loading
      })

      function onClick (event) {
        emit('click', event)
      }

      function onBlur (event) {
        emit('blur', event)
      }

      function onFocus (event) {
        emit('focus', event)
      }

      return {
        isDisabled,
        onClick,
        onBlur,
        onFocus
      }
    }
  }
</script>
