<template>
       
      <currentuser-input
          label="Tu correo"
          placeholder="Tu correo"
          class="font-sabon-bold mb-3"
          style="font-size: 1.5rem;"
          v-model:value="local_email"
      />          


      <currentuser-input
          label="Tu clave"
          placeholder="Tu clave"
          class="font-sabon-bold mb-3"
          style="font-size: 1.5rem;"
          v-model:value="local_password"
      />  
         
</template>


<script>

import CurrentuserInput from './inputs/CurrentuserInput.vue';

export default {

  props: {
      email: {default:null},
      password: {default:null} 
  },
  data() {
      return {
       
      };      
  },
  components: {
      'currentuser-input': CurrentuserInput,
  },

  created() {
    this.local_password = this.password;
    this.local_email = this.email;
  },
  beforeUnmount() {
      
  },
  mounted() {

  },
  methods: {

  },
  
  watch: {
      local_password(newValue,oldValue)  { 
          this.$emit('update:password',newValue); 
      },
      local_email(newValue,oldValue)  { 
          this.$emit('update:email',newValue); 
      },
  }
};
</script>