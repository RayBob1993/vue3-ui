<template>
  <layout-documentation>
    <page title="Радио">
      <example
        title="Базовый радио"
        anchor="radio-base"
      >
        <template #view>
          <v-radio v-model="radio">
            Радио
          </v-radio>
        </template>
      </example>

      <example
        title="Радио кнопка"
        anchor="radio-button"
      >
        <template #view>
          <v-radio-button v-model="radioButton">
            Радио кнопка
          </v-radio-button>
        </template>
      </example>

      <example
        title="Группа базовых радио"
        anchor="radio-group-base"
      >
        <template #view>
          <v-radio-group v-model="radioGroup">
            <v-radio>
              Радио
            </v-radio>

            <v-radio>
              Радио
            </v-radio>

            <v-radio>
              Радио
            </v-radio>
          </v-radio-group>
        </template>
      </example>

      <example
        title="Вертикальная группа базовых радио"
        anchor="vertical-radio-group"
      >
        <template #view>
          <v-radio-group
            direction="vertical"
            v-model="radioGroup"
          >
            <v-radio>
              Радио
            </v-radio>

            <v-radio>
              Радио
            </v-radio>

            <v-radio>
              Радио
            </v-radio>
          </v-radio-group>
        </template>
      </example>

      <example
        title="Группа радио кнопок"
        anchor="radio-group-buttons"
      >
        <template #view>
          <v-radio-group v-model="radioButtonGroup">
            <v-radio-button>
              Радио кнопка
            </v-radio-button>

            <v-radio-button>
              Радио кнопка
            </v-radio-button>

            <v-radio-button>
              Радио кнопка
            </v-radio-button>
          </v-radio-group>
        </template>
      </example>

      <example
        title="Вертикальная группа радио кнопок"
        anchor="vertical-radio-group-buttons"
      >
        <template #view>
          <v-radio-group
            direction="vertical"
            v-model="radioButtonGroup"
          >
            <v-radio-button>
              Радио кнопка
            </v-radio-button>

            <v-radio-button>
              Радио кнопка
            </v-radio-button>

            <v-radio-button>
              Радио кнопка
            </v-radio-button>
          </v-radio-group>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'RadioPage',
    setup () {
      const radio = ref(false)
      const radioButton = ref(false)
      const radioGroup = ref([])
      const radioButtonGroup = ref([])

      return {
        radio,
        radioButton,
        radioGroup,
        radioButtonGroup
      }
    }
  }
</script>
