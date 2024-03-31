import './bootstrap';






import { createApp } from 'vue/dist/vue.esm-bundler.js';
import Landingpage from './components/landingpage/Landingpage.vue';
import Oursolution from './components/oursolution/Oursolution.vue';
import Demo from './components/demo/demo.vue';
import Pricing from './components/pricing/Pricing.vue';
import Contactus from './components/contactus/Contactus.vue'



const app = createApp({
    components: {
        Landingpage,
        Oursolution,
        Demo,
        Pricing,
        Contactus,
       
    }
});

app.mount("#app")
