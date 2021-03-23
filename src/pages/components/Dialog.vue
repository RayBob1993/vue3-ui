<template>
  <layout-documentation>
    <page title="Dialog">
      <example
        title="Базовое модальное окно"
        anchor="base-dialog"
      >
        <template #view>
          <v-button
            @click="dialog1Visible = !dialog1Visible"
            label="Открыть окно"
          />

          <v-dialog
            v-model="dialog1Visible"
            title="Базовое окно"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
          </v-dialog>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'DialogPage',
    setup () {
      const dialog1Visible = ref(false);

      return {
        dialog1Visible
      }
    }
  }
</script>
