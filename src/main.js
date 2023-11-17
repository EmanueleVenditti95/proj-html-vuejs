import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faCartShopping,faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF,faTwitter,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add( faCartShopping,faBars,faFacebookF,faTwitter,faYoutube,faInstagram );

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
