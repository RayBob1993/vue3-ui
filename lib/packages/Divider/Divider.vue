<template>
  <div
    :aria-orientation="orientation"
    class="v-divider"
    role="separator"
    :class="[`v-divider--label-${labelAlign}`]"
  >
    <div class="v-divider__label">
      {{ label }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VDivider',
    props: {
      label: String,
      orientation: {
        type: String,
        default: 'horizontal'
      },
      labelAlign: {
        type: String,
        default: 'center'
      }
    }
  }
</script>
