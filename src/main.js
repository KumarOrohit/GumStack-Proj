import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Button from 'primevue/button';
import PrimeVue from 'primevue/config';
import InputText from "primevue/inputtext";
import Card from 'primevue/card';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import Textarea from "primevue/textarea";
import Dialog from "primevue/dialog";


import 'primevue/resources/themes/saga-blue/theme.css';      //theme
import 'primevue/resources/primevue.min.css';               //core css
import 'primeicons/primeicons.css'; 

import 'primeflex/primeflex.css';
                     
// import 'primeflex/src/_variables.scss';
// import 'primeflex/src/_grid.scss';
// import 'primeflex/src/_formlayout.scss';
// import 'primeflex/src/_display.scss';
// import 'primeflex/src/_text.scss';
// import 'primeflex/src/flexbox/_flexbox.scss';
// import 'primeflex/src/_spacing.scss';
// import 'primeflex/src/_elevation.scss';

// import './assets/_overrides.scss';
// import 'primeflex/src/_variables.css';
// import 'primeflex/src/_grid.css';
// import 'primeflex/src/_formlayout.css';
// import 'primeflex/src/_display.css';
// import 'primeflex/src/_text.css';
// import 'primeflex/src/flexbox/_flexbox.css';
// import 'primeflex/src/_spacing.css';
// import 'primeflex/src/_elevation.css';


const app = createApp(App);
app.use(PrimeVue)
app.component('Button',Button)
app.component('InputText',InputText)
app.component('Card',Card)
app.component('Dropdown',Dropdown)
app.component('Calendar',Calendar)
app.component("Dialog", Dialog)
app.component('Textarea',Textarea)
app.use(Vuex)
app.use(router)
app.use(store)
app.mount('#app')
