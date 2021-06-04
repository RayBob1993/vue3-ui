<template>
  <figure
    class="v-image"
    :class="{
      'v-image--loading': loading,
      'v-image--error': error,
      'v-image--rounded': !circle && rounded,
      'v-image--circle': circle
    }"
  >
    <img
      v-if="currentSrc"
      :src="currentSrc"
      v-bind="$attrs"
      class="v-image__native"
      :class="{
        'v-image__native--cover': cover,
        'v-image__native--contain': contain
      }"
    >

    <div
      v-else
      class="v-image__placeholder"
    >
      <div
        v-if="error"
        class="v-image__placeholder-error"
      >
        <template v-if="!$slots.error">
          <v-icon
            class="v-image__placeholder-error__icon"
            name="photo-off"
          />
        </template>

        <slot name="error"/>
      </div>

      <div
        v-if="loading"
        class="v-image__placeholder-loading"
      >
        <slot name="placeholder"/>
      </div>
    </div>
  </figure>
</template>

<script>
  import { ref, computed, onMounted } from 'vue';
  import imageLoad from '../../utils/imageLoad';

  export default {
    name: 'VImage',
    inheritAttrs: false,
    props: {
      src: {
        type: String,
        required: true,
      },
      cover: {
        type: Boolean,
        default: true,
      },
      contain: Boolean,
      lazy: Boolean,
      rounded: {
        type: Boolean,
        default: true,
      },
      circle: Boolean
    },
    emits: [
      'load',
      'error'
    ],
    setup (props, { emit }) {
      const lazySrc = ref(null);
      const currentSrc = computed(() => props.lazy ? lazySrc.value : props.src);

      const error = ref(false);
      const loading = ref(true);

      onMounted(async () => {
        if (props.lazy) {
          try {
            const { image } = await imageLoad(props.src);

            loading.value = false;
            error.value = false;

            lazySrc.value = image.src;

            emit('load', image);
          } catch (e) {
            error.value = true;
            loading.value = false;

            emit('error', e);
          }
        }
      });

      return {
        error,
        loading,
        currentSrc
      };
    }
  };
</script>
