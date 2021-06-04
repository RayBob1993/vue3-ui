import VCard from './Card.vue';

VCard.install = app => {
  app.component(VCard.name, VCard);
};

export default VCard;
