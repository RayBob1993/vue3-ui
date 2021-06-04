<template>
  <layout-documentation>
    <page title="Формы">
      <example
        title="Базовая форма"
        anchor="base-form"
      >
        <template #view>
          <v-form
            v-slot="{ isValid, isDisabled, isReadonly }"
            :disabled="disabledForm"
            :model="form.model"
            :rules="form.rules"
          >
            <v-form-item>
              isValid: {{ isValid }}<br>
              disabled: {{ isDisabled }}<br>
              readonly: {{ isReadonly }}
            </v-form-item>

            <v-form-item
              label="Имя"
              prop="firstName"
            >
              <v-input v-model="form.model.firstName"/>
            </v-form-item>

            <v-form-item
              label="Фамилия"
              prop="middleName"
            >
              <v-input v-model="form.model.middleName"/>
            </v-form-item>

            <v-form-item
              label="Отчество"
              prop="lastName"
            >
              <v-input v-model="form.model.lastName"/>
            </v-form-item>

            <v-form-item
              label="Пол"
              prop="gender"
            >
              <v-radio-group v-model="form.model.gender">
                <v-radio-button value="men">
                  Мужской
                </v-radio-button>

                <v-radio-button value="women">
                  Женский
                </v-radio-button>
              </v-radio-group>
            </v-form-item>

            <v-form-item
              label="Навыки"
              prop="skills"
            >
              <v-checkbox-group v-model="form.model.skills">
                <v-checkbox-button value="frontend">
                  Frontend
                </v-checkbox-button>

                <v-checkbox-button value="backend">
                  Backend
                </v-checkbox-button>

                <v-checkbox-button value="devops">
                  DevOps
                </v-checkbox-button>
              </v-checkbox-group>
            </v-form-item>

            <v-form-item prop="policy">
              <v-switch
                v-model="form.model.policy"
                :active-value="true"
                :inactive-value="false"
                active-text="Согласен с условиями"
              />
            </v-form-item>

            <v-form-item>
              <v-button
                label="Отправить"
                type="primary"
              />
            </v-form-item>
          </v-form>
        </template>
      </example>

      <button @click="onDisabledForm">
        Заблочить форму
      </button>
    </page>
  </layout-documentation>
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    name: 'FormPage',
    setup () {
      const disabledForm = ref(false);

      const form = reactive({
        model: {
          firstName: 'Дима',
          middleName: 'Турков',
          lastName: 'Андреевич',
          gender: '',
          skills: [],
          policy: true
        },
        rules: {
          firstName: [
            {
              type: 'string',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ],
          middleName: [
            {
              type: 'string',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ],
          lastName: [
            {
              type: 'string',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ],
          gender: [
            {
              type: 'string',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ],
          skills: [
            {
              type: 'array',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ],
          policy: [
            {
              type: 'boolean',
              required: true,
              message: 'Поле обязательно для заполнения'
            }
          ]
        }
      });

      function onDisabledForm () {
        disabledForm.value = !disabledForm.value;
      }

      return {
        disabledForm,
        form,
        onDisabledForm
      };
    }
  };
</script>
