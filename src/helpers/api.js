import axios from 'axios';


import { useSessionStore } from '../stores/session.store.js';
import { useGlobalStore } from '../stores/global.store.js';
import { util } from './util.js';



export const useApi = function(vueApp) {

  const sessionStore  = useSessionStore();
  const globalStore  = useGlobalStore();
        
  const api = {
    post: async function(args) {
      globalStore.loader = true;
      await axios.post(args.url,args.data,
                      {headers: {'Authorization': "Bearer "+sessionStore.token}})
           .then( (resp) => {
               console.log('POST: url :'+args.url);
               console.log(resp);
               //resp= resp.map((r)=> { return r.data});
               args.success(resp);
               globalStore.loader = false; 
           })
           .catch( (err)  => {
               try  {
                  if ('error' in err.response.data) {
                     args.error(err.response.data);
                  }
                  else {
                     args.error(null);
                  }
               }
               catch (e)  { args.error(null);  }
               globalStore.loader = false; 
           }); 
       
    },
    
    delete: async function(args) {
      globalStore.loader = true; 
      await axios.delete(args.url,
                      {headers: {'Authorization': "Bearer "+sessionStore.token}})
           .then( (resp) => {
               console.log('DELETE: url :'+args.url);
               console.log(resp);
               //resp= resp.map((r)=> { return r.data});
               args.success(resp);
               globalStore.loader = false; 
           })
           .catch( (err)  => {
               console.log(err);
               //if ('error' in args) {
                  args.error(err);
                  globalStore.loader = false; 
               //}
               //$q.loading.hide();
           }); 
       
    },
        
    patch: async function(args) {
      globalStore.loader = true; 
      await axios.patch(args.url,args.data,
                      {headers: {'Authorization': "Bearer "+sessionStore.token}})
           .then( (resp) => {
               console.log('PATCH: url :'+args.url);
               console.log(resp);
               //resp= resp.map((r)=> { return r.data});
               args.success(resp);
               globalStore.loader = false; 
               
           })
           .catch( (err)  => {
               console.log(err);
               //this.state.ts.loader.show = false;
               //if ('error' in args) {
                  
                  try  {
                    if ('error' in err.response.data) {
                       args.error(err.response.data);
                    }
                    else {
                       args.error(null);
                    }
                  }
                  catch (e)  { args.error(null);  }
                  globalStore.loader = false; 
               //}
               //$q.loading.hide();
           }); 
       
    },
    get: async function(args) {
           globalStore.loader = true; 
           let promises = [];
           for (let i=0; i < args.url.length; i++ ) {
                var params = args.url[i][1];
                console.log(params);
                if (util.isNull(params)) {
                  params={};
                }
               // Si viene _filter_ lo convierto con JSON.stringify()
               if ('_filter_' in params) {
                 params._filter_ = JSON.stringify(params._filter_)
               }  
               promises.push(axios.get( args.url[i][0], 
                               { params: params,
                                 headers: {'Authorization': "Bearer "+sessionStore.token},
                               } 
                             )
                ); 
           }
           
           
           
           //$q.loading.show();

           
           //$q.loading.show();
           await axios.all(promises)
           .then(axios.spread( (...resp) => {
               //resp= resp.map((r)=> { return r.data});
               args.success(...resp);
               globalStore.loader = false; 
           }))
           .catch( (err)  => {
               //this.state.ts.loader.show = false;
               //console.log(err);
               //if ('error' in args) {
                  args.error(err);
                  globalStore.loader = false; 
               //} 
               //$q.loading.hide();
           });           
           
                 
    }  
  }
  
  return api;
}

