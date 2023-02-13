import { defineStore } from 'pinia';
import router from '../router';
import axios from 'axios';



export const useGlobalStore = defineStore('global', {
 
  state: () => ({
      loader: false,
      header_title:null,
      confirm: {
         show: false,
         type: null,
         title: null,
         subtitle: null,
         left: null,
         right: null,
      }
  }),
  
  getters: {

  },
  
  actions: {
    clear_confirm() {
       this.confirm = {
         show: false,
         type: null,
         title: null,
         subtitle: null,
         left: null,
         right: null,
      }
    },
    clear_all() {
       this.clear_confirm();
    }
  },
  

  persist: true,
});
