<template>
  <teleport
    to="body"
    :disabled="!appendToBody"
  >
    <transition
      name="dialog-fade"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
      @before-leave="onBeforeLeave"
    >
      <v-overlay
        v-show="modelValue"
        :blur="blur"
        @click="onCloseModal"
      >
        <div
          class="v-dialog"
          role="dialog"
          :aria-label="ariaLabel"
          aria-modal="true"
          :class="{
            [`v-dialog__modal--${size}`]: size,
            'v-dialog--center': center,
            'v-dialog--fullscreen': fullscreen
          }"
          @click.stop=""
        >
          <div class="v-dialog__content">
            <header class="v-dialog__header">
              <h5 class="v-dialog__title">
                {{ title }}
              </h5>

              <button
                class="v-dialog__close"
                aria-label="Закрыть окно"
                @click="onCloseModal"
              >
                <v-icon name="close"/>
              </button>

              <slot
                name="header"
                onCloseModal="onCloseModal"
              />
            </header>

            <div class="v-dialog__body">
              <slot/>
            </div>

            <footer
              v-if="$slots.footer"
              class="v-dialog__footer"
            >
              <slot name="footer"/>
            </footer>
          </div>
        </div>
      </v-overlay>
    </transition>
  </teleport>
</template>

<script>
  import { computed } from 'vue'
  import {
    useDialog,
    CLOSE_EVENT,
    OPEN_EVENT,
    CLOSED_EVENT,
    OPENED_EVENT,
    UPDATE_MODEL_EVENT
  } from './useDialog'
  import { isValidComponentSize } from '../../utils/validators'
  import VOverlay from '../Overlay'

  export default {
    name: 'VDialog',
    components: {
      VOverlay
    },
    props: {
      modelValue: Boolean,
      title: String,
      blur: Boolean,
      appendToBody: Boolean,
      fullscreen: Boolean,
      scrollable: Boolean,
      center: Boolean,
      openDelay: {
        type: Number,
        default: 0
      },
      closeDelay: {
        type: Number,
        default: 0
      },
      closeOnClickOutside: {
        type: Boolean,
        default: true
      },
      closeOnEscape: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        validator: isValidComponentSize
      },
    },
    emits: [
      UPDATE_MODEL_EVENT,
      CLOSE_EVENT,
      OPEN_EVENT,
      CLOSED_EVENT,
      OPENED_EVENT
    ],
    setup (props) {
      const ariaLabel = computed(() => props.title || 'dialog')

      return {
        ...useDialog(props),
        ariaLabel
      }
    }
  }
</script>
