import './bootstrap';






import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Landingpage from './components/landingpage/Landingpage.vue';



const app = createApp({
    components: {
        Landingpage,
       
    }
});

app.mount("#app")
