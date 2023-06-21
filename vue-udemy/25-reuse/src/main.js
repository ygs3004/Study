import { createApp } from 'vue';

import App from './App.vue';
import loggerMixing from './mixins/laogger.js'

const app = createApp(App)

app.mixin(loggerMixing)
app.mount('#app');
