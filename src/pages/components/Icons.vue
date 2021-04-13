<template>
  <layout-documentation>
    <page title="Icons">
      <example
        title="Базовые иконки"
        anchor="base-icons"
      >
        <template #view>
          <v-row>
            <v-col
              v-for="icon in icons"
              :key="icon"
              :size="2"
              :xl="3"
              :lg="4"
            >
              <example-icon :name="icon"/>
            </v-col>
          </v-row>
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
        'zoom-question',
        'check',
        'close',
        'info-circle',
        'star',
        'thumb-up',
        'thumb-down',
        'eye',
        'eye-off'
      ])

      return {
        icons
      }
    }
  }
</script>
