import VIcon from './Icon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import ZoomQuestionIcon from './icons/ZoomQuestionIcon.vue'

VIcon.install = app => {
  app.component(VIcon.name, VIcon)
}

export default VIcon

export {
  CloseIcon,
  ZoomQuestionIcon
}
