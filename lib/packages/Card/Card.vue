<template>
  <component
    :is="tag"
    class="v-card"
    :class="[
      `v-card--${type}`,
      {
        'v-card--stacked': stacked,
        'v-card--hover': hover
      }
    ]"
  >
    <div
      v-if="$slots.header"
      class="v-card__header"
    >
      <slot name="header"/>
    </div>

    <v-image
      v-if="image"
      :src="image"
    />

    <slot
      v-if="$slots.beforeBody"
      name="beforeBody"
    />

    <div class="v-card__body">
      <h6
        v-if="title"
        class="v-card__title"
      >
        {{ title }}
      </h6>

      <div
        v-if="subtitle"
        class="v-card__subtitle"
      >
        {{ subtitle }}
      </div>

      <div
        v-if="description"
        class="v-card__text"
        v-html="description"
      />

      <slot/>
    </div>

    <slot
      v-if="$slots.afterBody"
      name="afterBody"
    />

    <div
      v-if="$slots.footer"
      class="v-card__footer"
    >
      <slot name="footer"/>
    </div>
  </component>
</template>

<script>
  import { isValidType } from '../../utils/validators';
  import VImage from '../../packages/Image';

  export default {
    name: 'VCard',
    components: {
      VImage
    },
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      type: {
        type: String,
        default: 'default',
        validator: isValidType
      },
      title: String,
      subtitle: String,
      description: String,
      image: String,
      stacked: Boolean,
      titleInHeader: Boolean,
      hover: Boolean
    },
    setup () {

    }
  };
</script>
