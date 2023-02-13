import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import router from './router';
import axios from 'axios'
import VueAxios from 'vue-axios'

//import VueHead from 'vue-head';
import { createHead } from "@vueuse/head";

import App from './App.vue'

import RDxDashboard from "./rdx-dashboard";

import { useSessionStore } from './stores/session.store.js';
import { useGlobalStore } from './stores/global.store.js';
import { useShowcaseStore } from './stores/showcase.store.js';

import * as bootstrap from "bootstrap";

import { useApi } from './helpers/api.js';
import { util } from './helpers/util.js';
import { useGui } from './helpers/gui.js'

import RDxButton from "@/components/RDxButton.vue";
import RDxInput from "@/components/RDxInput.vue";
import RDxCheckbox from "@/components/RDxCheckbox.vue";
import RDxLoader from "@/components/RDxLoader.vue";
import RDxConfirm from "@/components/RDxConfirm.vue";
import RDxImageItem from "@/components/RDxImageItem.vue";


import IconUser from "@/components/icons/IconUser.vue";
import IconSettings from "@/components/icons/IconSettings.vue";

import IconLogoName from "@/components/icons/IconLogoName.vue";
import IconLogoIsotype from "@/components/icons/IconLogoIsotype.vue";

//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const head = createHead();

const vueApp = createApp(App)
                .use(router)
                .use(VueAxios, axios)
                .use(head) 
                .use(pinia);

vueApp.use(RDxDashboard);

vueApp.component(IconUser.name, IconUser);
vueApp.component(IconSettings.name, IconSettings);

vueApp.component(IconLogoName.name, IconLogoName);
vueApp.component(IconLogoIsotype.name, IconLogoIsotype);

vueApp.component(RDxButton.name, RDxButton);
vueApp.component(RDxInput.name,RDxInput);
vueApp.component(RDxCheckbox.name,RDxCheckbox);
vueApp.component(RDxLoader.name,RDxLoader);
vueApp.component(RDxConfirm.name,RDxConfirm);
vueApp.component(RDxImageItem.name,RDxImageItem);

vueApp.config.globalProperties.$store = {};

vueApp.config.globalProperties.$store.global = useGlobalStore();
vueApp.config.globalProperties.$store.showcase = useShowcaseStore();
vueApp.config.globalProperties.$store.session = useSessionStore();


vueApp.config.globalProperties.$api = useApi(vueApp);
vueApp.config.globalProperties.$gui = useGui(vueApp);
vueApp.config.globalProperties.$u = util;


window.bootstrap = bootstrap;


vueApp.mount('#app');
