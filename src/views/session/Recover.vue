<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div class="col-5 d-lg-flex d-none ps-0"></div>
            <div
              class="top-0 my-auto text-center col-5 d-lg-flex d-none h-100 ps-0 position-absolute start-0 justify-content-center flex-column"
            >
              <div
                class="position-relative bg-gradient-primary h-100 d-flex flex-column justify-content-center overflow-hidden"
                style="
                  background-image: url('https://d1g2o4pwbvyrni.cloudfront.net/rdx-vitrina-dashboard/assets/img/signin-ill.jpeg');
                  background-size: cover;
                "
              >
                <h1
                  class="mt-5 text-white font-weight-bolder position-relative font-sabon"
                >
                  Emprendimientos
                </h1>
              </div>
            </div>
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Registro de Usuario</h4>
                  <p class="mb-0">Ingresa tus datos para continuar</p>
                </div>
                
                
                <div class="card-body">
                  <form role="form">
                    
                         <rdx-input
                            v-model="email"
                            id="floatingInput"
                            label="Email"
                            type="email"
                            placeholder="email"
                            :isRequired="true"
                        />
                   
                   
                       <div
                          class="alert alert-danger"
                          role="alert"
                          v-if="error"
                      >
                          {{ error_message }}
                      </div>

                       <div
                          class="alert alert-success"
                          role="alert"
                          v-if="success"
                       >
                          Se envió un correo con una nueva clave
                      </div>    
                                     
                        <rdx-button 
                            v-if="!success"
                            @click="on_click_recover()">Recuperar Clave</rdx-button>
                  </form>
                </div>
           
   
                <div 
                  
                  class="px-1 pt-0 text-center card-footer px-lg-2"
                >
                  <p class="mx-auto mb-4 text-sm">
                    Volver a
                    <a role="button"
                       @click="on_click_back_login()" 
                       class="text-primary font-weight-bold">Iniciar Sesión</a>
                  </p>
                </div>
                
                
              </div>
            </div>
          </div>
          <div style="left:0%;width:10%;height:10%;background-color:black"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<!-- import style -->
<style lang="scss" scoped>
.verification-code {

  &-input
  {}
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 200px;
}


</style>
<script>
// import ArgonInput from "@/components/ArgonInput.vue";
import RDxInput from "@/components/RDxInput.vue";
import axios from "axios";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "signin",
  data() {
    return {
      email: null,
      success: false,
      error: false,
      error_message: '',
      error_code: '',
    };
  },
  components: {
    "rdx-input": RDxInput,
  },
  created() {
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {

    body.classList.add("bg-gray-100");
  },
  mounted() {

  },
  methods: {
    on_click_recover() {
        
        this.error = false;
        this.success = false;
        
        this.$api.post({
            url:'/api/token/',
            data:  {email:this.email, recover:true },
            success: (resp)  => {
              console.log(resp);
              this.success  = true;
            },
            error: (err) => {
              console.log(err);
              try {
                  this.error_message = err.response.data.error;
              }
              catch(e) {
                  this.error_message = 'No se pudo enviar una nueva clave de recuperación';
              }
              this.error = true;
              
            }
          });
    },
    
    on_click_back_login() {
        this.$router.push({ path: '/session/login' });
    },
    
  },  
};
</script>
