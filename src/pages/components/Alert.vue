<template>
  <layout-documentation>
    <page title="Уведомления">
      <example
        title="Стандартное уведомление"
        anchor="alert-base"
      >
        <template #view>
          <v-alert
            title="Заголовок уведомления"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, unde."
          />
        </template>
      </example>

      <example
        title="Закрывающиееся уведомление"
        anchor="closable-alert"
      >
        <template #view>
          <v-alert
            v-if="closable"
            v-model:close="closable"
            title="Заголовок уведомления"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, unde."
            closable
          />
        </template>
      </example>

      <example
        title="Контент по центру уведомления"
        anchor="center-alert"
      >
        <template #view>
          <v-alert
            center
            title="Заголовок уведомления"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, unde."
          />
        </template>
      </example>

      <example
        title="Иконка уведомления"
        anchor="icon-alert"
      >
        <template #view>
          <v-alert
            icon="info-circle"
            title="Заголовок уведомления"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, unde."
          />
        </template>
      </example>

      <example
        title="Темы оформления"
        anchor="themes-alert"
      >
        <template #view>
          <example-group>
            <v-alert
              icon="info-circle"
              type="primary"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              icon="check"
              type="success"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              icon="info-circle"
              type="danger"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              icon="info-circle"
              type="warning"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>
        </template>
      </example>

      <example
        title="Закрашенное уведомление"
        anchor="important-alert"
      >
        <template #view>
          <example-group>
            <v-alert
              important
              icon="info-circle"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              important
              type="primary"
              icon="info-circle"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              important
              icon="check"
              type="success"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              important
              icon="info-circle"
              type="danger"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>

          <example-group>
            <v-alert
              important
              icon="info-circle"
              type="warning"
              title="Заголовок карточки"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
            />
          </example-group>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'AlertsPage',
    setup () {
      const closable = ref(true);

      return {
        closable
      };
    }
  };
</script>
