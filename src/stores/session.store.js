import { defineStore } from 'pinia';
import router from '../router';
import axios from 'axios';

export const useSessionStore = defineStore('session', {
 
  state: () => ({
      token: null,
      webcode: null,
      
      current_user: {
         name: null,
         email: null,
         organization_id: null,
         project_id: null,
         profile_ch: null,
         showcase_id: null,
         showcase_state_ch: null,
      }
  }),
  
  getters: {
    isLogged: (state) =>   ! (state.token===null),
  },
  
  actions: {

    logout()  {
       /*
       this.clear_all();
       router.push('/session/login');
       */
    },
    clear_all() {
       this.token = null;
       this.webcode = null;
       this.current_user = {
         name:null,
         email:null,
         organization_id: null,
         project_id: null,
         profile_ch: null,
         showcase_id: null,
         showcase_state_ch: null,
      }
    }
    
  },
  
  
  
  
  
  
  
  
  
  persist: true,
});
