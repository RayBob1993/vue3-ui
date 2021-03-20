import VImage from './Image.vue'

VImage.install = app => {
  app.component(VImage.name, VImage)
}

export default VImage
