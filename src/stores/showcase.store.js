import { defineStore } from 'pinia';
import router from '../router';
import axios from 'axios';



export const useShowcaseStore = defineStore('showcase', {
 
  state: () => ({
      data: null,
      products: null,
      product: null,
  }),
  
  getters: {
   
  },
  
  actions: {


    clear_all() {
       this.data = null;
       this.products = null;
       this.product = null;
    }
    
  },
  
  
  persist: true,
});
