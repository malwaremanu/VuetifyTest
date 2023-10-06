import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  buildModules: ['@nuxtjs/vuetify'],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },
});
