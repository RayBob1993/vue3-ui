<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :stroke-width="strokeWidth"
    fill="none"
    stroke="currentColor"
    :viewBox="viewBox"
    :aria-labelledby="name"
    stroke-linecap="round"
    stroke-linejoin="round"
    role="presentation"
    class="v-icon"
    :class="[`v-icon--${name}`]"
  >
    <component :is="iconName"/>
  </svg>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'VIcon',
    props: {
      name: String,
      viewBox: {
        type: String,
        default: '0 0 24 24'
      },
      strokeWidth: {
        type: [
          Number,
          String
        ],
        default: 2
      },
      width: {
        type: [
          Number,
          String
        ],
        default: 16
      },
      height: {
        type: [
          Number,
          String
        ],
        default: 16
      }
    },
    setup (props) {
      const iconName = computed(() => props.name + 'Icon');

      return {
        iconName
      };
    }
  };
</script>
