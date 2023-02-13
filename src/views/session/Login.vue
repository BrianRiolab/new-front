<template>
    <div class="card card-plain">
        <div class="pb-0 card-header text-start">
            <h4 class="font-weight-bolder">Iniciar Sesión</h4>
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

                <rdx-button @click="on_click_login()"
                    >Iniciar Sesión</rdx-button
                >
            </form>
        </div>
        <div class="px-1 pt-0 text-center card-footer px-lg-2">
            <p class="mx-auto mb-4 text-sm">
                Crea tu emprendimiento
                <a
                    role="button"
                    @click="on_click_register()"
                    class="text-primary font-weight-bold"
                    >Registrate</a
                >
            </p>

            <p class="mx-auto mb-4 text-sm">
                ¿Olvidaste tu clave?
                <a
                    role="button"
                    @click="on_click_recover()"
                    class="text-primary font-weight-bold"
                    >Recuperar</a
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
const body = document.getElementsByTagName("body")[0];

export default {
    name: "signin",
    data() {
        return {
            email: null,
            password: null,
            error: false,
            error_message: "",
        };
    },
    components: {},
    created() {},
    beforeUnmount() {
        body.classList.add("bg-gray-100");
    },
    mounted() {},
    methods: {
        on_click_register() {
            this.$router.push({ path: "/session/register" });
        },

        on_click_recover() {
            this.$router.push({ path: "/session/recover" });
        },

        on_click_login() {
            this.error = false;
            this.error_message = "";

            // Borra todas las variables storage session
            this.$store.session.clear_all();

            this.$api.post({
                url: "/api/token/",
                data: { email: this.email, password: this.password },
                success: (resp) => {
                    this.$store.session.current_user = resp.data;
                    this.$store.session.token = resp.data.token;
                    console.log(".......................");
                    console.log(resp);
                    if (resp.data.showcase_state_ch == "EMPTY") {
                        this.$router.push({ path: "/startup/welcome" });
                    } else {
                        this.$router.push({ path: "/dashboard/vitrina_vew" });
                    }
                },
                error: (err) => {
                    console.log(err);
                    try {
                        this.error_message = err.response.data.error;
                    } catch (e) {
                        this.error_message = "No se pudo validar el usario";
                    }
                    this.error = true;
                    console.log(this.error_message);
                },
            });
        },
    },
};
</script>
