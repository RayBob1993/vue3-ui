import VComment from './Comment.vue'

VComment.install = app => {
  app.component(VComment.name, VComment)
}

export default VComment
