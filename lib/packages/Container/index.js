import VContainer from './Container.vue';

VContainer.install = app => {
  app.component(VContainer.name, VContainer);
};

export default VContainer;
