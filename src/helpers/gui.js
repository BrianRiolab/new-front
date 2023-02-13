import router from '../router';
import { useSessionStore } from '../stores/session.store.js';
import { useGlobalStore } from '../stores/global.store.js';
import { util } from './util.js';


export const useGui = function(vueApp) {

  const sessionStore  = useSessionStore();
  const globalStore  = useGlobalStore();
        
  const gui = {
   
    confirm_success_back: function(args) {
          console.log('CREANDO CONFIRM....');
          globalStore.clear_confirm();
          globalStore.confirm = {
               show: true,
               type: 'success',
               title: args.title,
               left: {
                   label: 'Si',
                   click: ()=> {
                       console.log(args);
                       if ('left_click' in args) {
                          args.left_click();
                       }
                       globalStore.clear_confirm();
                   }
               },
               right: {
                   label: 'No',
                   click: ()=> {
                       console.log(args);
                       globalStore.clear_confirm();
                   }
               }
          }  
    },
   
  }
  
  return gui;
}
