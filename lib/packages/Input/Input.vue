<template>
  <div
    class="v-input"
    :class="[
      {
        [`v-input--${size}`]: size,
        'v-input--disabled': isDisabled,
        'v-input--focused': focus,
        'v-input--exceed': isExceed,
        'v-input--icon-before': iconBefore,
        'v-input--icon-after': iconAfter,
        'v-input--addon-before': addonBefore,
        'v-input--addon-after': addonAfter,
        'v-input--readonly': isReadonly,
      },
      `v-input--${type}`,
    ]"
  >
    <div
      v-if="hasAddonBefore"
      class="input__addon input__addon--before"
    >
      <span
        v-if="!$slots.addonBefore"
        class="input__addon-value"
      >
        {{ addonBefore }}
      </span>

      <slot
        v-else
        :addonBeforeValue="addonBefore"
        name="addonBefore"
      />
    </div>

    <div class="v-input__control">
      <template v-if="!isTextareaType">
        <input
          ref="input"
          v-model="value"
          v-bind="$attrs"
          class="v-input__native"
          :class="{
            'v-input__native--rounded': rounded,
            'v-input__native--disabled': isDisabled,
          }"
          :aria-label="ariaLabel"
          :type="showPassword ? (isPasswordVisible ? 'text': 'password') : type"
          :disabled="isDisabled"
          :readonly="isReadonly"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @change="onChange"
          @keyup="onKeyup"
          @keydown="onKeydown"
          @keypress="onKeypress"
        >
      </template>

      <template v-else>
        <textarea
          ref="textarea"
          v-model="value"
          v-bind="$attrs"
          class="v-input__native"
          :class="{
            'v-input__native--rounded': rounded,
            'v-input__native--disabled': isDisabled,
          }"
          :aria-label="ariaLabel"
          :disabled="isDisabled"
          :readonly="isReadonly"
          @focus="onFocus"
          @blur="onBlur"
          @input="onInput"
          @change="onChange"
          @keyup="onKeyup"
          @keydown="onKeydown"
          @keypress="onKeypress"
        />
      </template>

      <div class="v-input__control-buttons">
        <button
          v-if="isPasswordButtonVisible"
          class="v-input__control-button v-input__control-button--password"
          @click="onTogglePasswordVisible"
        >
          ?
        </button>

        <button
          v-if="isClearButtonVisible"
          class="v-input__control-button v-input__control-button--clear"
          @click="onClear"
        >
          x
        </button>
      </div>
    </div>

    <div
      v-if="hasAddonAfter"
      class="v-input__addon v-input__addon--after"
    >
      <span
        v-if="!$slots.addonAfter"
        class="v-input__addon-value"
      >
        {{ addonAfter }}
      </span>

      <slot
        v-else
        :addonAfterValue="addonAfter"
        name="addonAfter"
      />
    </div>

    <div
      v-if="loading"
      class="v-input__loading"
    />

    <div
      v-if="isLimitVisible"
      class="v-input__count"
    >
      <span class="v-input__count-current">
        {{ valueLength }}
      </span>

      <span class="v-input__count-divider">
        {{ limitDivider }}
      </span>

      <span class="v-input__count-limit">
        {{ maxLength }}
      </span>
    </div>

    <slot
      name="count"
      :valueLength="valueLength"
      :divider="limitDivider"
      :maxLength="maxLength"
    />
  </div>
</template>

<script>
  import { ref, computed, watchEffect, inject } from 'vue'
  import { UPDATE_MODEL_EVENT } from '../../utils/constants'
  import { isValidComponentSize } from '../../utils/validators'
  import { FORM_KEY, FORM_ITEM_KEY } from '../../utils/keys'

  export default {
    name: 'VInput',
    inheritAttrs: false,
    props: {
      modelValue: String,
      type: {
        type: String,
        default: 'text',
        validator: value => [
          'text',
          'textarea',
          'email',
          'number',
          'tel',
          'url',
          'search',
          'password'
        ].includes(value)
      },
      size: {
        type: String,
        validator: isValidComponentSize
      },
      limitDivider: {
        type: String,
        default: '/',
      },
      label: String,
      iconBefore: String,
      iconAfter: String,
      addonBefore: String,
      addonAfter: String,
      loading: Boolean,
      disabled: Boolean,
      readonly: Boolean,
      rounded: Boolean,
      clearable: Boolean,
      showLimit: Boolean,
      showPassword: Boolean
    },
    emits: [
      UPDATE_MODEL_EVENT,
      'focus',
      'blur',
      'change',
      'input',
      'keyup',
      'keydown',
      'keypress',
      'exceed',
      'clear'
    ],
    setup (props, { emit, attrs, slots }) {
      const Form = inject(FORM_KEY)
      const FormItem = inject(FORM_ITEM_KEY)

      const isDisabled = computed(() => {
        return Form && Form.disabled ||
          FormItem && FormItem.disabled ||
          props.disabled
      })

      const isReadonly = computed(() => {
        return Form && Form.readonly ||
          FormItem && FormItem.readonly ||
          props.readonly
      })

      const ariaLabel = computed(() => {
        return FormItem && FormItem.label ||
          props.label
      })

      const value = computed({
        get: () => props.modelValue,
        set: value => emit(UPDATE_MODEL_EVENT, value)
      });
      const maxLength = computed(() => Number(attrs.maxlength));
      const valueLength = computed(() => value.value.length);
      const focus = ref(false);

      const isPasswordVisible = ref(false);
      const isTextareaType = computed(() => props.type === 'textarea');
      const isLimitVisible = computed(() => {
        return props.showLimit &&
          !isDisabled.value &&
          !isReadonly.value &&
          !props.showPassword &&
          !slots.count &&
          maxLength
      });
      const isExceed = computed(() => props.showLimit && (valueLength.value >= maxLength.value));
      const isClearButtonVisible = computed(() => props.clearable && Boolean(valueLength.value));
      const isPasswordButtonVisible = computed(() => props.showPassword && !isTextareaType.value);

      const hasAddonBefore = computed(() => props.addonBefore || slots.addonBefore);
      const hasAddonAfter = computed(() => props.addonAfter || slots.addonAfter);

      function onFocus (event) {
        focus.value = true;
        emit('focus', event);
      }

      function onBlur (event) {
        focus.value = false;
        emit('blur', event);
      }

      function onChange (event) {
        emit('change', event);
      }

      function onInput (event) {
        emit('input', event);
      }

      function onKeyup (event) {
        emit('keyup', event);
      }

      function onKeydown (event) {
        emit('keydown', event);
      }

      function onKeypress (event) {
        emit('keypress', event);
      }

      function onTogglePasswordVisible () {
        isPasswordVisible.value = !isPasswordVisible.value;
      }

      function onClear () {
        value.value = '';
        emit('clear');
      }

      watchEffect(() => {
        if (isExceed.value) {
          emit('exceed');
        }
      });

      return {
        value,
        maxLength,
        valueLength,
        focus,
        ariaLabel,
        isLimitVisible,
        isExceed,
        isTextareaType,
        isClearButtonVisible,
        isPasswordButtonVisible,
        isPasswordVisible,
        hasAddonBefore,
        hasAddonAfter,
        isDisabled,
        isReadonly,
        onFocus,
        onBlur,
        onClear,
        onChange,
        onInput,
        onKeyup,
        onKeydown,
        onKeypress,
        onTogglePasswordVisible
      }
    }
  }
</script>
