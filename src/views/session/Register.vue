<template>
    <div class="card card-plain">
        <div class="pb-0 card-header text-start">
            <h4 class="font-weight-bolder">Registro de Usuario</h4>
            <p class="mb-0">Ingresa tus datos para continuar</p>
        </div>
        <div class="card-body">
            <form role="form">
                <rdx-input
                    v-model="name"
                    id="floatingInput"
                    label="Nombre"
                    type="text"
                    placeholder="name"
                    :isRequired="true"
                />
                <rdx-input
                    v-model="email"
                    id="floatingInput"
                    label="Email"
                    type="email"
                    placeholder="email"
                    :isRequired="true"
                />
                <rdx-input
                    v-model="password"
                    id="floatingPassword"
                    label="Contraseña"
                    type="password"
                    placeholder="password"
                    :isRequired="true"
                />

                <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error_message }}
                </div>

                <rdx-button @click="on_click_register()"
                    >Registrarse</rdx-button
                >
            </form>
        </div>
        <!-- <div class="card-body" style="background-color:black;right:0">
                  
                </div> -->

        <div class="px-1 pt-0 text-center card-footer px-lg-2">
            <p class="mx-auto mb-4 text-sm">
                Volver a
                <a
                    role="button"
                    @click="on_click_back_login()"
                    class="text-primary font-weight-bold"
                    >Iniciar Sesión</a
                >
            </p>
        </div>
    </div>
</template>

<!-- import style -->
<style lang="scss" scoped>
.verification-code {
    &-input {
    }
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
            name: "",
            email: "",
            password: "",
            error: false,
            error_message: "",
            error_code: "",
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
    mounted() {},
    methods: {
        on_click_back_login() {
            this.$router.push({ path: "/session/login" });
        },

        on_click_register() {
            /*  
      if (this.name == "") {
        this.error = true;
        this.error_message = "El campo nombre es requerido";
        return;
      }
      if (this.email == "") {
        this.error = true;
        this.error_message = "El campo email es requerido";
        return;
      }
      if (this.password == "") {
        this.error = true;
        this.error_message = "El campo contraseña es requerido";
        return;
      }
      */

            this.error = false;

            this.$store.session.clear_all();

            this.$api.post({
                url: "/api/enrollment/",
                data: {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                },
                success: (resp) => {
                    this.$store.session.webcode = resp.data.webcode;
                    this.$store.session.current_user.name = this.name.trim();
                    this.$store.session.current_user.email = this.email.trim();
                    this.$router.push({ path: "/session/verification" });
                },
                error: (err) => {
                    try {
                        if (
                            err.response.data.code ==
                            "ENROLLMENT_EMAIL_ALREADY_EXIST"
                        ) {
                            this.error_message = "El email ya está enrolado";
                        }
                    } catch (e) {
                        this.error_message = "No se pudo realizar el registro";
                    }
                    this.error = true;
                },
            });

            /*       
              "/api/enrollment/", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);

          
        })
        .catch((error) => {
          this.error = true;
          console.log(error);
          

          if (error?.response?.data?.code=='ENROLLMENT_EMAIL_ALREADY_EXIST') {
              this.error_code = 'ENROLLMENT_EMAIL_ALREADY_EXIST';
          }
          
          this.error_message = error.response.data.error;
          console.log(error.response.data.error);
        });
        */
        },
    },
};
</script>
