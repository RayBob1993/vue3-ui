import { createApp } from 'vue'
import router from './router'
import VueUI from '../lib'

import '@/assets/scss/index.scss'

import App from './App.vue'

// Layouts
import LayoutDocumentation from '@/layouts/documentation'
import LayoutDefault from '@/layouts/default'

// Components
import AppHeader from '@/components/AppHeader'
import AppHeaderMenu from '@/components/AppHeaderMenu'
import Logo from '@/components/Logo'
import DocumentationMenu from '@/components/DocumentationMenu'
import Page from '@/components/Page'
import Example from '@/components/Example'

const app = createApp(App)

app.component(LayoutDocumentation.name, LayoutDocumentation)
app.component(LayoutDefault.name, LayoutDefault)
app.component(AppHeader.name, AppHeader)
app.component(AppHeaderMenu.name, AppHeaderMenu)
app.component(Logo.name, Logo)
app.component(DocumentationMenu.name, DocumentationMenu)
app.component(Page.name, Page)
app.component(Example.name, Example)

app.use(VueUI)

app.use(router)
app.mount('#app')
