<template>

    <div
       class="r-img-item" 
       style="positio:relative;">        
        <!-- ICON  EDIT-->
        <div
           @click="on_click_edit()" 
           style="
              background: #ff0;
              position: absolute;
              cursor: pointer;
           "
        >
           <i  class="bi bi-pencil"></i>
        </div>
        
        <!-- IMG -->
        <img 
           style="width: 100%;"
           :src="url" 
           :alt="pr"  /> 
         <!-- TITEL -->
         
         <!-- SUBTITLE -->
    </div>
       
    
</template>

<style lang="scss" scoped>
   /*@import "@/styles/rdx-dashboard.scss";*/
</style>

<script>

/*
 Todas las imagen que forman parte de la grilla
 deben ser del mismo tamagno !!!!
 o ratio ???
 */

export default {
  name: "rdx-image-item",
  props: {
      url: {default: null},
  },
  data() {
    return {
       //id: Math.random(),
       //show_plus: false,
    };
  },
  created() {
       
  },
  mounted() {
      /*
      var btn = document.getElementById(this.id);
      if (btn.className.search('r-plus')>=0) {
          console.log('siiii +')
          this.show_plus = true;
      }
      */
  },
  methods: {
      on_click_edit() {
          console.log('edit..... Image_item....');
          this.$emit('click_edit');
      }
  }
  
};
</script>
