import Components from '@/pages/components/Index.vue'
import Buttons from '@/pages/components/Buttons.vue'
import Images from '@/pages/components/Images.vue'
import Inputs from '@/pages/components/Inputs.vue'
import Grid from '@/pages/components/Grid.vue'
import Badge from '@/pages/components/Badge.vue'
import Dividers from '@/pages/components/Dividers.vue'
import Form from '@/pages/components/Form.vue'
import Checkbox from '@/pages/components/Checkbox.vue'
import Radio from '@/pages/components/Radio.vue'
import Switch from '@/pages/components/Switch.vue'
import Select from '@/pages/components/Select.vue'
import Comment from '@/pages/components/Comment.vue'
import Icons from '@/pages/components/Icons.vue'
import Dialog from '@/pages/components/Dialog.vue'
import Card from '@/pages/components/Card.vue'

const componentsRoutes = [
  {
    path: '/components',
    name: 'ComponentsPage',
    component: Components
  },
  {
    path: '/components/buttons',
    name: 'ButtonsPage',
    component: Buttons
  },
  {
    path: '/components/images',
    name: 'ImagesPage',
    component: Images
  },
  {
    path: '/components/inputs',
    name: 'InputsPage',
    component: Inputs
  },
  {
    path: '/components/grid',
    name: 'GridPage',
    component: Grid
  },
  {
    path: '/components/badge',
    name: 'BadgePage',
    component: Badge
  },
  {
    path: '/components/dividers',
    name: 'DividersPage',
    component: Dividers
  },
  {
    path: '/components/form',
    name: 'FormPage',
    component: Form
  },
  {
    path: '/components/checkbox',
    name: 'CheckboxPage',
    component: Checkbox
  },
  {
    path: '/components/radio',
    name: 'RadioPage',
    component: Radio
  },
  {
    path: '/components/switch',
    name: 'SwitchPage',
    component: Switch
  },
  {
    path: '/components/select',
    name: 'SelectPage',
    component: Select
  },
  {
    path: '/components/comment',
    name: 'CommentsPage',
    component: Comment
  },
  {
    path: '/components/icons',
    name: 'IconsPage',
    component: Icons
  },
  {
    path: '/components/dialog',
    name: 'DialogPage',
    component: Dialog
  },
  {
    path: '/components/card',
    name: 'CardPage',
    component: Card
  }
]

export default componentsRoutes
