<template>
  <div
    class="v-avatar"
    :class="[
      `v-avatar--${type}`,
      `v-avatar--size-${size}`,
      {
        'v-avatar--rounded': !circle && rounded,
        'v-avatar--circle': circle
      }
    ]"
  >
    <div
      v-if="name"
      class="v-avatar__name"
    >
      {{ name }}
    </div>

    <v-image
      :src="src"
      :rounded="rounded"
      :circle="circle"
      :alt="name"
    />
  </div>
</template>

<script>
  import { isValidComponentSize, isValidType } from '../../utils/validators'
  import VImage from '../Image'

  export default {
    name: 'VAvatar',
    components: {
      VImage
    },
    props: {
      src: String,
      name: String,
      type: {
        type: String,
        default: 'default',
        validator: isValidType
      },
      size: {
        type: String,
        default: 'default',
        validator: isValidComponentSize
      },
      rounded: {
        type: Boolean,
        default: true
      },
      circle: Boolean
    },
    setup () {
      return {

      }
    }
  }
</script>
