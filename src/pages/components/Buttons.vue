<template>
  <layout-documentation>
    <page title="Buttons">
      <example
        title="Типы кнопок"
        anchor="button-types"
      >
        <template #view>
          <v-button
            icon="close"
            label="default"
          />

          <v-button
            type="primary"
            label="primary"
          />

          <v-button
            type="success"
            label="success"
          />

          <v-button
            type="danger"
            label="danger"
          />

          <v-button
            type="warning"
            label="warning"
          />

          <v-button
            type="info"
            label="info"
          />

          <v-button
            type="link"
            label="link"
          />

          <v-button
            type="secondary"
            label="secondary"
          />
        </template>
      </example>

      <example
        title="Размеры кнопок"
        anchor="button-sizes"
      >
        <template #view>
          <v-button
            type="warning"
            label="mini"
            size="mini"
          />

          <v-button
            type="warning"
            label="small"
            size="small"
          />

          <v-button
            type="warning"
            label="default"
          />

          <v-button
            type="warning"
            label="medium"
            size="medium"
          />

          <v-button
            type="warning"
            label="large"
            size="large"
          />
        </template>
      </example>

      <example
        title="Лоадер"
        anchor="button-loading"
      >
        <template #view>
          <v-button
            type="primary"
            label="primary"
            loading
          />

          <v-button
            type="success"
            label="success"
            loading
          />

          <v-button
            type="danger"
            label="danger"
            loading
          />

          <v-button
            type="warning"
            label="warning"
            loading
          />

          <v-button
            type="info"
            label="info"
            loading
          />

          <v-button
            type="link"
            label="link"
            loading
          />

          <v-button
            type="secondary"
            label="secondary"
            loading
          />
        </template>
      </example>

      <example
        title="Кнопка с рамкой без фона"
        anchor="button-outline"
      >
        <template #view>
          <v-button
            label="default"
            outline
          />

          <v-button
            type="primary"
            label="primary"
            outline
          />

          <v-button
            type="success"
            label="success"
            outline
          />

          <v-button
            type="danger"
            label="danger"
            outline
          />

          <v-button
            type="warning"
            label="warning"
            outline
          />

          <v-button
            type="info"
            label="info"
            outline
          />

          <v-button
            type="link"
            label="link"
            outline
          />

          <v-button
            type="secondary"
            label="secondary"
            outline
          />
        </template>
      </example>

      <example
        title="Заблокированная кнопка"
        anchor="button-disabled"
      >
        <template #view>
          <v-button
            label="primary"
            disabled
          />

          <v-button
            type="primary"
            label="primary"
            disabled
          />

          <v-button
            type="success"
            label="success"
            disabled
          />

          <v-button
            type="danger"
            label="danger"
            disabled
          />

          <v-button
            type="warning"
            label="warning"
            disabled
          />

          <v-button
            type="info"
            label="info"
            disabled
          />

          <v-button
            type="link"
            label="link"
            disabled
          />

          <v-button
            type="secondary"
            label="secondary"
            disabled
          />
        </template>
      </example>

      <example
        title="Кнопка иконка"
        anchor="button-icon"
      >
        <template #view>
          <v-button
            icon="close"
            circle
          />

          <v-button
            type="primary"
            label="2"
            circle
          />

          <v-button
            type="success"
            label="3"
            circle
          />

          <v-button
            type="danger"
            label="4"
            circle
          />

          <v-button
            type="warning"
            label="5"
            circle
          />

          <v-button
            type="info"
            label="6"
            circle
          />

          <v-button
            type="link"
            label="7"
            circle
          />

          <v-button
            type="secondary"
            label="8"
            circle
          />
        </template>
      </example>

      <example
        title="Закруглённая кнопка"
        anchor="button-rounded"
      >
        <template #view>
          <v-button
            label="default"
            rounded
          />

          <v-button
            type="primary"
            label="primary"
            rounded
          />

          <v-button
            type="success"
            label="success"
            rounded
          />

          <v-button
            type="danger"
            label="danger"
            rounded
          />

          <v-button
            type="warning"
            label="warning"
            rounded
          />

          <v-button
            type="info"
            label="info"
            rounded
          />

          <v-button
            type="link"
            label="link"
            rounded
          />

          <v-button
            type="secondary"
            label="secondary"
            rounded
          />
        </template>
      </example>

      <example
        title="Кнопка без скругления"
        anchor="button-square"
      >
        <template #view>
          <v-button
            label="default"
            square
          />

          <v-button
            type="primary"
            label="primary"
            square
          />

          <v-button
            type="success"
            label="success"
            square
          />

          <v-button
            type="danger"
            label="danger"
            square
          />

          <v-button
            type="warning"
            label="warning"
            square
          />

          <v-button
            type="info"
            label="info"
            square
          />

          <v-button
            type="secondary"
            label="secondary"
            square
          />
        </template>
      </example>

      <example
        title="Группа кнопок"
        anchor="button-group"
      >
        <template #view>
          <v-button-group>
            <v-button label="default"/>
            <v-button label="default"/>
            <v-button label="default"/>
          </v-button-group>
        </template>
      </example>

      <example
        title="Заблокированная группа кнопок"
        anchor="button-group-disabled"
      >
        <template #view>
          <example-group title="Целиком заблокированная группа">
            <v-button-group :disabled="true">
              <v-button label="default"/>
              <v-button label="default"/>
              <v-button label="default"/>
            </v-button-group>
          </example-group>

          <example-group title="Отдельная заблокированная кнопка в группе">
            <v-button-group>
              <v-button label="default" type="primary"/>
              <v-button label="default" :disabled="true"/>
              <v-button label="default" type="warning"/>
            </v-button-group>
          </example-group>
        </template>
      </example>

      <example
        title="Растянутая группа кнопок"
        anchor="button-group-fluid"
      >
        <template #view>
          <v-button-group fluid>
            <v-button label="default"/>
            <v-button label="default"/>
            <v-button label="default"/>
            <v-button label="default"/>
            <v-button label="default"/>
            <v-button label="default"/>
          </v-button-group>
        </template>
      </example>

      <example
        title="Направление группы кнопок"
        anchor="button-group-direction"
      >
        <template #view>
          <example-group title="Горизонтальное направление">
            <v-button-group>
              <v-button label="default"/>
              <v-button label="default"/>
              <v-button label="default"/>
            </v-button-group>
          </example-group>

          <example-group title="Вертикальное направление">
            <v-button-group direction="vertical">
              <v-button label="default"/>
              <v-button label="default"/>
              <v-button label="default"/>
            </v-button-group>
          </example-group>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'Buttons'
  }
</script>
