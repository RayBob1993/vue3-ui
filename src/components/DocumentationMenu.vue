<template>
  <nav class="menu-documentation">
    <ul class="level-1">
      <li
        v-for="item in menuList"
        :key="item.title"
      >
        <router-link
          v-if="item.url"
          :to="item.url"
        >
          {{ item.title }}
        </router-link>

        <h3 v-else>
          {{ item.title }}
        </h3>

        <ul
          v-if="item.list.length"
          class="level-2"
        >
          <li
            v-for="listItem in item.list"
            :key="listItem.title"
          >
            <router-link :to="listItem.url">
              {{ listItem.title }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'DocumentationMenu',
    setup () {
      const menuList = ref([
        {
          title: 'Базовые',
          url: null,
          list: [
            {
              title: 'Buttons',
              url: '/components/buttons'
            },
            {
              title: 'Icons',
              url: '/components/icons'
            }
          ]
        },
        {
          title: 'Сетка',
          url: null,
          list: [
            {
              title: 'Container',
              url: '/components/container'
            },
            {
              title: 'Row',
              url: '/components/row'
            },
            {
              title: 'Col',
              url: '/components/col'
            }
          ]
        },
        {
          title: 'Формы',
          url: null,
          list: [
            {
              title: 'Inputs',
              url: '/components/inputs'
            },
            {
              title: 'Checkbox',
              url: '/components/checkbox'
            },
            {
              title: 'Radio',
              url: '/components/radio'
            },
            {
              title: 'InputNumber',
              url: '/components/input-number'
            },
            {
              title: 'Select',
              url: '/components/select'
            },
            {
              title: 'Switch',
              url: '/components/switch'
            },
            {
              title: 'RangeSlider',
              url: '/components/range-slider'
            },
            {
              title: 'TimePicker',
              url: '/components/time-picker'
            },
            {
              title: 'DatePicker',
              url: '/components/date-picker'
            },
            {
              title: 'DateTimePicker',
              url: '/components/date-time-picker'
            },
            {
              title: 'Upload',
              url: '/components/upload'
            },
            {
              title: 'Rating',
              url: '/components/rating'
            },
            {
              title: 'Form',
              url: '/components/form'
            }
          ]
        },
        {
          title: 'Notice',
          url: null,
          list: [
            {
              title: 'Alert',
              url: '/components/alert',
            },
            {
              title: 'Loading',
              url: '/components/loading',
            },
            {
              title: 'Notification',
              url: '/components/notification',
            }
          ]
        },
        {
          title: 'Data',
          url: null,
          list: [
            {
              title: 'Table',
              url: '/components/table'
            },
            {
              title: 'Tag',
              url: '/components/tag'
            },
            {
              title: 'Badge',
              url: '/components/badge'
            },
            {
              title: 'Progress',
              url: '/components/progress'
            },
            {
              title: 'Pagination',
              url: '/components/pagination'
            },
            {
              title: 'Comment',
              url: '/components/comment'
            },
            {
              title: 'Timeline',
              url: '/components/timeline'
            },
            {
              title: 'Collapse',
              url: '/components/collapse'
            },
            {
              title: 'Placeholder',
              url: '/components/placeholder '
            },
          ]
        },
        {
          title: 'Navigation',
          url: null,
          list: [
            {
              title: 'Tabs',
              url: '/components/tabs',
            },
            {
              title: 'Dropdown',
              url: '/components/dropdown',
            },
            {
              title: 'Steps',
              url: '/components/steps',
            },
            {
              title: 'Breadcrumb',
              url: '/components/breadcrumb'
            },
            {
              title: 'Affix',
              url: '/components/affix'
            },
            {
              title: 'Scrollspy',
              url: '/components/scrollspy'
            }
          ]
        },
        {
          title: 'Others',
          url: null,
          list: [
            {
              title: 'Cards',
              url: '/components/card'
            },
            {
              title: 'Dividers',
              url: '/components/dividers'
            },
            {
              title: 'Images',
              url: '/components/images'
            },
            {
              title: 'Dialog',
              url: '/components/dialog'
            },
            {
              title: 'Tooltip',
              url: '/components/tooltip'
            },
            {
              title: 'Backtop',
              url: '/components/backtop'
            },
            {
              title: 'Avatar',
              url: '/components/avatar'
            },
            {
              title: 'InfiniteScroll',
              url: '/components/infinite-scroll'
            },
            {
              title: 'Drawer',
              url: '/components/drawer'
            },
            {
              title: 'Segment',
              url: '/components/segment'
            }
          ]
        }
      ]);

      return {
        menuList
      }
    }
  }
</script>
