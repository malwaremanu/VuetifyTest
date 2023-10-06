// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    modules: [
    '@invictus.codes/nuxt-vuetify'
  ],
  
})

// export default defineNuxtConfig({
//   modules: [
//     '@invictus.codes/nuxt-vuetify'
//   ],  
//   vuetify: {
//     /* vuetify options */
//     vuetifyOptions: {
//       // @TODO: list all vuetify options
//     },

//     moduleOptions: {
//       /* nuxt-vuetify module options */
//       treeshaking: true | false,
//       useIconCDN: true | false,

//       /* vite-plugin-vuetify options */
//       styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
//       autoImport: true | false,
//       useVuetifyLabs: true | false, 
//     }
//   }
// })

// import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// export default defineNuxtConfig({
//   //...
//   modules: [
//     (_options, nuxt) => {
//       nuxt.hooks.hook('vite:extendConfig', (config) => {
//         // @ts-expect-error
//         config.plugins.push(vuetify({ autoImport: true }))
//       })
//     },
//     //...
//   ],
//   vite: {
//     vue: {
//       template: {
//         transformAssetUrls,
//       },
//     },
//   },
// })
