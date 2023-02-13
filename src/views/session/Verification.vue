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
                  style="background-image: url('https://d1g2o4pwbvyrni.cloudfront.net/rdx-vitrina-dashboard/assets/img/signin-ill.jpeg'); background-size: cover; " >
                  <h1
                    class="mt-5 text-white font-weight-bolder position-relative font-sabon"
                  >
                    Emprendimientos
                  </h1>
                </div>
              </div>
              <div
                class="col-xl-7 col-12 mx-auto mx-lg-0"
              >
                <div class="card card-plain">
                  <div class="pb-0 card-header text-center">
                    <h4 class="font-weight-bolder">Verifica tu cuenta</h4>
                    <p class="mb-0">Para terminar tu registro por favor haz click en el correo<br> que enviamos a {{ email }}.<br> Esto mantendrá tu cuenta segura.</p>
                  </div>
                  <div class="card-body">
                    <form role="form">
                    </form>
                  </div>
                  <div class="card-body center">
                    <form role="form">
                      <div class="verification-code">
                        <input v-model="code1" class="verification-code-input" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" isRequired=true />
                        <input v-model="code2" class="verification-code-input" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" isRequired=true />
                        <input v-model="code3" class="verification-code-input" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" isRequired=true />
                        <input v-model="code4" class="verification-code-input" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" isRequired=true />
                      </div>
                      
                      <div class="alert alert-danger" role="alert" v-if="error">
                        {{ error_message }}
                      </div>
  
                    </form>
                    
                    
                    <rdx-button @click="on_click_check()">Verificar</rdx-button>

                    
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      ¿No has recibido un correo?
                      <a href="/signup" class="text-primary font-weight-bold">Reenviar código</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <!-- import style -->
  <style lang="scss" scoped>
    .verification-code-input
    {
      text-align: center;
      font-family: var(--font-family);
      font-size: 2rem;
      font-weight: bold;
      padding: 12px 8px;
      border-radius: 5px;
      /* border: none; */
      /* border-bottom: black 1px solid; */
      border: rgb(222, 222, 222) 1px solid;
      margin: 0px 5px;
    }
    .verification-code-input:focus
    {
      outline: none;
      border: rgb(222, 222, 222) 1px solid;
    }
  </style>

  <script>
  // import ArgonInput from "@/components/ArgonInput.vue";
  // import RDxInput from "@/components/RDxInput.vue";
  import axios from "axios";
  
  //import ArgonSwitch from "@/components/ArgonSwitch.vue";
  //import ArgonButton from "@/components/ArgonButton.vue";
  const body = document.getElementsByTagName("body")[0];
  
  export default {
    name: "signin",
    data() {
      return {
        error: false,
        error_message: "",
        email: localStorage.email,
        // token: localStorage.token,
        webcode: localStorage.webcode,
        code1: "",
        code2: "",
        code3: "",
        code4: "",
      };
    },
    components: {
      // ArgonInput,
      // "rdx-qinput": RDxInput,
      //ArgonSwitch,
      //ArgonButton,
    },
    created() {
      /*
      this.$store.state.hideConfigButton = true;
      this.$store.state.showSidenav = false;
      this.$store.state.showFooter = false;
      */
      body.classList.remove("bg-gray-100");
    },
    beforeUnmount() {
      /*
      this.$store.state.hideConfigButton = false;
      this.$store.state.showSidenav = true;
      this.$store.state.showFooter = true;
      */
      body.classList.add("bg-gray-100");
    },
    mounted() {
      // invocar los métodos
     
    },
    methods: {
        
      on_click_check() {
          
      this.error = false;
      
      if (!this.code1 || !this.code2 || !this.code3 || !this.code4) {
        this.error = true;
        this.error_message = "Código de verificación incompleto";
      } 
      else {

          this.$api.post({
             url:'/api/enrollment/',
             data: {
                 webcode: this.$store.session.webcode,
                 emailcode: this.code1 + this.code2 + this.code3 + this.code4,
             },
             success: (resp) => {
               console.log(resp);                
               this.$store.session.token = resp.data.token;
               this.$store.session.current_user.showcase_id = resp.data.showcase_id;
               this.$store.session.current_user.showcase_state_ch = resp.data.showcase_state_ch;
               this.$store.session.current_user.profile_ch = resp.data.profile_ch;
               this.$router.push({path:'/startup/welcome'});               
             },
             error: () => {
               this.error = true;
               this.error_message = "Código de verificación incorrecto";                 
             }
          });
          
          /*
          axios.post("/api/enrollment/", {
            webcode: this.$store.session.webcode,
            emailcode: this.code1 + this.code2 + this.code3 + this.code4,
          }).then((response) => {
            if (response.status == 200) {
              localStorage.token = response.data["token"]
              localStorage.showcase_id = response.data["showcase_id"]

              console.log(response.data);
              //redirect to welcome
              this.$router.push({path:'/startup/welcome'});
            } 
            else {
              this.error = true;
              this.error_message = "Código de verificación incorrecto";
              alert(this.error_message);
            }
          }).catch((error) => {
            this.error = true;
            this.error_message = "Código de verificación incorrecto";
            console.log(error.response.data);
            alert(this.error_message);
          });
          */
          // axios.post("/api/enrollment/", json, headers).then((response) => {
          //   if (response.status == 200) {
          //     console.log(response.data);
          //   } 
          //   else {
          //     this.error = true;
          //     this.error_message = "Código de verificación incorrecto";
          //     alert(this.error_message);
          //   }
          // });
        
      }
    }
        
            
  

    
    
        
    }
    
  };
  </script>
  