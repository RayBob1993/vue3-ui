import VIcon from './Icon.vue'
import CloseIcon from './icons/CloseIcon.vue'
import ZoomQuestionIcon from './icons/ZoomQuestionIcon.vue'
import StarIcon from './icons/StarIcon.vue'
import InfoCircleIcon from './icons/InfoCircleIcon.vue'
import CheckIcon from './icons/CheckIcon.vue'
import ThumbUpIcon from './icons/ThumbUpIcon.vue'
import ThumbDownIcon from './icons/ThumbDownIcon.vue'
import EyeIcon from './icons/EyeIcon.vue'
import EyeOffIcon from './icons/EyeOffIcon.vue'

VIcon.install = app => {
  app.component(VIcon.name, VIcon)
}

export default VIcon

export {
  CloseIcon,
  ZoomQuestionIcon,
  StarIcon,
  InfoCircleIcon,
  CheckIcon,
  ThumbDownIcon,
  ThumbUpIcon,
  EyeIcon,
  EyeOffIcon
}
