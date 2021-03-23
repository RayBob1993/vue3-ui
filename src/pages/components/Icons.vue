<template>
  <layout-documentation>
    <page title="Icons">
      <example
        title="Базовые иконки"
        anchor="base-icons"
      >
        <template #view>
          <v-icon
            v-for="icon in icons"
            :key="icon"
            width="24"
            height="24"
            strokeWidth="1"
            :name="icon"
          />
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'IconsPage',
    setup () {
      const icons = ref([
        'zoom-question'
      ])

      return {
        icons
      }
    }
  }
</script>
