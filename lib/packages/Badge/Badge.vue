<template>
  <div
    class="v-badge"
    :class="[
      `v-badge--${position}`,
      `v-badge--${type}`,
      {
        'v-badge--hover': hover,
        'v-badge--dot': dot
      }
    ]"
  >
    <slot/>

    <div class="v-badge__value">
      <template v-if="!icon">
        {{ currentValue }}
      </template>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';

  export default {
    name: 'VBadge',
    props: {
      value: [String, Number],
      maxValue: Number,
      type: {
        type: String,
        default: 'default'
      },
      position: {
        type: String,
        default: 'top-right',
        validator: value => [
          'top-right',
          'top-left',
          'bottom-right',
          'bottom-left'
        ].includes(value)
      },
      icon: String,
      dot: {
        type: Boolean,
        default: false
      },
      hover: {
        type: Boolean,
        default: false
      }
    },
    setup (props) {
      const currentValue = computed(() => {
        if (props.dot) {
          return;
        }

        if (
          typeof props.value === 'number' &&
          typeof props.maxValue === 'number'
        ) {
          return props.maxValue < props.value
            ? `${props.maxValue}+`
            : props.value;
        }

        return props.value;
      });

      return {
        currentValue
      };
    }
  };
</script>
