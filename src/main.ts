import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

import './index.css'

const app = createApp(App)

// formkit
app.use(
  plugin, 
  defaultConfig({
    config: {
      classes: generateClasses({
        submit: {
          input: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        },
        text: {
          input: 'mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
        }
      })
    }
  })
)

// vuefire
app
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })

// vue-router
app.use(router)

app.mount('#app')