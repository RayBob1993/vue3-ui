import VBadge from './Badge.vue'

VBadge.install = app => {
  app.component(VBadge.name, VBadge)
}

export default VBadge
