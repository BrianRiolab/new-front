<template>

   <div class="d-flex flex-row">
      
     
     <div>
        <rdx-button
            class="r-bg-red r-plus" 
            @click="on_click_new()">Agregar Producto</rdx-button>
     </div>
     
     <div style="width:50px;">&nbsp;</div>
     
     <div style="width:100%;background: #f0f;">
    
         
         <div class="row">
         
             <div
                v-for="(product,idx) in products" :key="idx"
                class="col-12 col-sm-10 col-sm-8 col-md-6 col-lg-4 col-xl-2"
             >
                  <rdx-image-item 
                     @click_edit="on_click_edit_item(product)"
                     :url="product.url_product"
                  />

                  
                   <!--   
                   <img 
                     style="width:100%"
                     :src="product.url_product" 
                     :alt="product.name"
                   />
                   {{product.id}}
                   -->
                   
             </div>
             
         </div>
         
     </div>
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
      /*
      on_click_edit(product) {
          console.log(product);
          this.$store.showcase.product = product;
          this.$router.push('/dashboard/product_form');
      },
      */
      on_click_new()  {
          this.$store.showcase.product = null;
          this.$router.push('/dashboard/product_form');
      },
      
      on_click_edit_item(product) {
          console.log(product);
          this.$store.showcase.product = product;
          this.$router.push('/dashboard/product_form');
      }
  },
  
  watch: {
     
  }
};
</script>