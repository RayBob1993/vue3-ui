<template>
  <layout-documentation>
    <page title="Чекбоксы">
      <example
        title="Базовый чекбокс"
        anchor="checkbox-base"
      >
        <template #view>
          <v-checkbox v-model="checkbox">
            Чекбокс
          </v-checkbox>
        </template>
      </example>

      <example
        title="Чекбокс кнопка"
        anchor="checkbox-button"
      >
        <template #view>
          <v-checkbox-button v-model="checkboxButton">
            Чекбокс кнопка
          </v-checkbox-button>
        </template>
      </example>

      <example
        title="Группа базовых чекбоксов"
        anchor="checkbox-group-base"
      >
        <template #view>
          <v-checkbox-group v-model="checkboxGroup">
            <v-checkbox value="1">
              Чекбокс 1
            </v-checkbox>

            <v-checkbox value="2">
              Чекбокс 2
            </v-checkbox>

            <v-checkbox value="3">
              Чекбокс 3
            </v-checkbox>
          </v-checkbox-group>
        </template>
      </example>

      <example
        title="Вертикальная группа базовых чекбоксов"
        anchor="vertical-checkbox-group"
      >
        <template #view>
          <v-checkbox-group
            v-model="checkboxGroup"
            direction="vertical"
          >
            <v-checkbox value="1">
              Чекбокс 1
            </v-checkbox>

            <v-checkbox value="2">
              Чекбокс 2
            </v-checkbox>

            <v-checkbox value="3">
              Чекбокс 3
            </v-checkbox>
          </v-checkbox-group>
        </template>
      </example>

      <example
        title="Группа чекбоксов кнопок"
        anchor="checkbox-group-buttons"
      >
        <template #view>
          <v-checkbox-group v-model="checkboxButtonGroup">
            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>

            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>

            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>
          </v-checkbox-group>
        </template>
      </example>

      <example
        title="Вертикальная группа чекбоксов кнопок"
        anchor="vertical-checkbox-group-buttons"
      >
        <template #view>
          <v-checkbox-group
            v-model="checkboxButtonGroup"
            direction="vertical"
          >
            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>

            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>

            <v-checkbox-button>
              Чекбокс кнопка
            </v-checkbox-button>
          </v-checkbox-group>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'CheckboxPage',
    setup () {
      const checkbox = ref(false);
      const checkboxButton = ref(false);
      const checkboxGroup = ref([]);
      const checkboxButtonGroup = ref([]);

      return {
        checkbox,
        checkboxButton,
        checkboxGroup,
        checkboxButtonGroup
      };
    }
  };
</script>
