<template>
  <div
    class="v-alert"
    role="alert"
    :class="[
      `v-alert--${type}`,
      {
        'v-alert--closable': closable,
        'v-alert--center': center,
        'v-alert--important': important
      }
    ]"
  >
    <div
      v-if="icon"
      class="v-alert__icon"
    >
      <v-icon :name="icon"/>
    </div>

    <div class="v-alert__content">
      <h4
        v-if="title"
        class="v-alert__title"
      >
        {{ title }}
      </h4>

      <div
        v-if="description"
        class="v-alert__text"
        v-html="description"
      />

      <slot/>
    </div>

    <button
      v-if="closable"
      class="v-alert__close"
      aria-label="Закрыть уведомление"
      @click="onCloseAlert"
    >
      <v-icon name="close"/>
    </button>
  </div>
</template>

<script>
  import { isValidType } from '../../utils/validators';

  export default {
    name: 'VAlert',
    props: {
      type: {
        type: String,
        default: 'default',
        validator: isValidType
      },
      title: String,
      description: String,
      icon: String,
      closable: Boolean,
      center: Boolean,
      important: Boolean
    },
    emits: [
      'update:close'
    ],
    setup (props, { emit }) {
      function onCloseAlert () {
        if (props.closable) {
          emit('update:close', false);
        }
      }

      return {
        onCloseAlert
      };
    }
  };
</script>
