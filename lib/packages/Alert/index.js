import VAlert from './Alert.vue'

VAlert.install = app => {
  app.component(VAlert.name, VAlert)
}

export default VAlert
