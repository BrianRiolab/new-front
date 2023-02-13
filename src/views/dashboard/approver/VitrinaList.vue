<template>

   <div class="d-flex flex-row">
       <h3>Listaod de vitrinas</h3>   
   </div> 
 
   <div class="d-flex flex-row">
         <template v-for="(product,idx) in products" :key="idx">
           <div
              role="button"
              @click="on_click_edit(product)"
              style="width:200px;padding:10px;">      
                 <img 
                   style="width:100%"
                   :src="product.url_product" 
                   :alt="product.name"
                 />
                 {{product.id}}
           </div>
         </template>
   </div>
   
</template>


<script>

/*
import VitrinaInput from "./inputs/VitrinaInput.vue";
import VitrinaImage from "./inputs/VitrinaImage.vue";
import VitrinaTextarea from "./inputs/VitrinaTextarea.vue";
*/

export default {

  props: {

  },
  data() {
    return {
       products:[],
    };
  },
  
  components: {

  },
  
  beforeCreate() {

  },
  
  created() {
      
      this.$api.get({
          url: [
          ['/api/showcase_product/',
              {'_filter_':[{ _op_:'=', showcase_id: this.$store.session.current_user.showcase_id}] } 
          ],
      
        ],
        success: (resp_products) => {
            console.log('============================');
            console.log(resp_products);
            this.products = resp_products.data.results;
        },
        error: (err) => {
            console.log(err);
        }
      });      

  },
  beforeUnmount() {
   
  },
  mounted() {

  },
  methods: {
      on_click_edit(product) {
          console.log(product);
          this.$store.showcase.product = product;
          this.$router.push('/dashboard/product_form');
      },
      on_click_new()  {
          this.$store.showcase.product = null;
          this.$router.push('/dashboard/product_form');
      }
  },
  
  watch: {
     
  }
};
</script>