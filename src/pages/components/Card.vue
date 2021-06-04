<template>
  <layout-documentation>
    <page title="Card">
      <example
        title="Базовая карточка"
        anchor="base-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <v-card
                title="Заголовок карточки"
                subtitle="Подзаголовок карточки"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
              />
            </v-col>
          </v-row>
        </template>
      </example>

      <example
        title="Изображение карточки"
        anchor="image-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <v-card
                image="https://www.fillmurray.com/640/360"
                title="Заголовок карточки"
                subtitle="Подзаголовок карточки"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
              />
            </v-col>
          </v-row>
        </template>
      </example>

      <example
        title="Слоты карточки"
        anchor="slots-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <v-card
                title="Заголовок карточки"
                subtitle="Подзаголовок карточки"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
              >
                <template #header>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, earum!
                </template>

                <template #beforeBody>
                  <v-image src="https://www.fillmurray.com/640/360"/>
                </template>

                <template #afterBody>
                  <v-image src="https://www.fillmurray.com/640/360"/>
                </template>

                <template #footer>
                  <v-button-group fluid>
                    <v-button
                      label="Кнопка"
                      type="primary"
                      outline
                    />
                    <v-button
                      label="Кнопка"
                      type="danger"
                      outline
                    />
                  </v-button-group>
                </template>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </example>

      <example
        title="Темы оформления"
        anchor="themes-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <example-group>
                <v-card
                  type="primary"
                  title="Заголовок карточки"
                  subtitle="Подзаголовок карточки"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
                />
              </example-group>
            </v-col>

            <v-col size="4">
              <example-group>
                <v-card
                  type="success"
                  title="Заголовок карточки"
                  subtitle="Подзаголовок карточки"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
                />
              </example-group>
            </v-col>

            <v-col size="4">
              <example-group>
                <v-card
                  type="danger"
                  title="Заголовок карточки"
                  subtitle="Подзаголовок карточки"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
                />
              </example-group>
            </v-col>

            <v-col size="4">
              <example-group>
                <v-card
                  type="warning"
                  title="Заголовок карточки"
                  subtitle="Подзаголовок карточки"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
                />
              </example-group>
            </v-col>
          </v-row>
        </template>
      </example>

      <example
        title="Эффект при наведении на карточку"
        anchor="hover-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <v-card
                hover
                title="Заголовок карточки"
                subtitle="Подзаголовок карточки"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
              />
            </v-col>
          </v-row>
        </template>
      </example>

      <example
        title="Эффект стопки карточек"
        anchor="stacked-card"
      >
        <template #view>
          <v-row>
            <v-col size="4">
              <v-card
                stacked
                title="Заголовок карточки"
                subtitle="Подзаголовок карточки"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem."
              />
            </v-col>
          </v-row>
        </template>
      </example>
    </page>
  </layout-documentation>
</template>

<script>
  export default {
    name: 'CardPage',
  };
</script>
