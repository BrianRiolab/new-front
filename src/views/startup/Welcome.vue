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
                  class="mt-5 text-white font-weight-bolder position-relative"
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
                  <h4 class="font-weight-bolder">Hola {{$store.session.current_user.name}}</h4>
                  <p class="mb-0">Bienvenida a Araucanía Infinita. Aquí podrás crear tu vitrina met, consectetuer adipiscing elit, sed diam nonummy.</p>
                  
                    [{{$store.session.current_user}}]
                    
                  <rdx-button type="startup" @click="on_click_to_step1()">Crear Emprendimiento</rdx-button>
                                      
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  
  

  
</template>

<script>
// import ArgonInput from "@/components/ArgonInput.vue";
// import axios from "axios";
//import ArgonSwitch from "@/components/ArgonSwitch.vue";
//import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

import axios from "axios";
export default {
  name: "welcome",
  data() {
    return {
      user_name: localStorage.getItem("user_name"),
    };
  },
  
  components: {

  },
  
  created() {
    body.classList.remove("bg-gray-100");
  },
  
  beforeUnmount() {
    body.classList.add("bg-gray-100");
  },
  
  mounted() {
    axios.get("/api/showcase/"+localStorage.showcase_id).then((response) => {
      this.vitrina_status = response.data["state_ch"];
      console.log(response.data);
    }).catch((error) => {
      console.log(error.response);
    });
    
    
    console.log('zzzzz');
    console.log(this.$store.session.current_user);
    
  },
  
  methods: {
      
    on_click_to_step1() {
      //console.log('zzzzz');
      //console.log(this.$store.session.current_user);
      //console.log(this.$store.session.current_user.showcase_state_ch);
      if (this.$store.session.current_user.showcase_state_ch == "EMPTY") {
        this.$router.push('/startup/step1');
      }
      else {
        this.$router.push({ path: '/dashboard/home_index' });
      }
      /*  
      // Si no  se ha terminado el proceeso de creaar la vitrina inicial
      if (this.$store.session.current_user.state_ch == "EMPTY") {
        this.$router.push('/startup/step1');  
      } 
      else {
        this.$router.push({ path: '/dashboard/home_index' });
      }
      */
    },
  },
};
</script>
