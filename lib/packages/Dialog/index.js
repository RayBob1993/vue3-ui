import VDialog from './Dialog.vue';

VDialog.install = app => {
  app.component(VDialog.name, VDialog);
};

export default VDialog;
