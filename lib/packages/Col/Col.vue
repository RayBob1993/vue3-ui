<template>
  <component
    :is="tag"
    class="v-col"
    :class="classes"
  >
    <slot/>
  </component>
</template>

<script>
  import { computed } from 'vue'

  export default {
    name: 'VCol',
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      size: {
        type: [String, Number],
        validator: value => {
          const typeOf = typeof value;

          if (typeOf === 'string') {
            const values = ['auto'];

            return values.includes(value);
          }
        }
      },
      offset: {
        type: Number,
        default: null,
      },
      order: {
        type: Number,
        default: null,
      },
      xs: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
      sm: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
      md: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
      lg: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
      xl: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
      xxl: {
        type: [
          Number,
          Object,
        ],
        default: null,
      },
    },
    setup (props) {
      const classes = computed(() => {
        const classList = [
          {
            [`v-col-${props.size}`]: props.size,
            [`v-col-offset-${props.offset}`]: props.offset,
            [`v-col-order-${props.order}`]: props.order,
          },
        ];

        const definitions = [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          'xxl',
        ];

        definitions.forEach(definition => {
          const definitionType = typeof props[definition];
          const definitionValue = props[definition];

          if (definitionValue) {
            switch (definitionType) {
              case 'number':
                classList.push(`v-col-${definition}-${props[definition]}`);
                break;

              case 'object':
                Object.keys(definitionValue).forEach(key => {
                  switch (key) {
                    case 'size':
                      classList.push(`v-col-${definition}-${definitionValue[key]}`);
                      break;
                    default:
                      classList.push(`v-col-${definition}-${key}-${definitionValue[key]}`)
                  }
                });
                break;
            }
          }
        });

        return classList
      });

      return {
        classes
      }
    }
  }
</script>
