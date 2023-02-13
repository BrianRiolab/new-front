<template>
    <!-- <h2 class="lh-2 xbold text-start mb-4">
      Agrega tus redes sociales
   </h2> -->

    <vitrina-form-social
        v-model:instagram="instagram"
        v-model:facebook="facebook"
        v-model:airbnb="airbnb"
    />

    <div class="d-flex justify-content-end m-5">
        <rdx-button type="startup" @click="on_click_continue()"
            >Guardar y Continuar</rdx-button
        >
    </div>
</template>

<style scoped>
iframe {
    position: fixed;
    border: none;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
}
.mapboxgl-ctrl-bottom-right {
    display: none !important;
}
.mapboxgl-ctrl-bottom-left {
    display: none !important;
}
</style>

<script>
import VitrinaFormSocial from "../dashboard/vitrina/form/Social.vue";

export default {
    data() {
        return {
            instagram: null,
            facebook: null,
            airbnb: null,
        };
    },
    mounted() {},
    created() {
        this.instagram = this.$store.showcase.data.instagram;
        this.facebook = this.$store.showcase.data.facebook;
        this.airbnb = this.$store.showcase.data.airbnb;
        console.log("INSTAGRAM :: " + this.instagram);
    },
    components: {
        "vitrina-form-social": VitrinaFormSocial,
    },
    methods: {
        on_click_continue() {
            console.log(this.instagram);
            console.log(this.facebook);
            console.log(this.airbnb);
            this.error = false;

            this.$api.patch({
                url:
                    "/api/showcase/" +
                    this.$store.session.current_user.showcase_id +
                    "/",
                data: {
                    step: "social",
                    instagram: this.instagram,
                    facebook: this.facebook,
                    airbnb: this.airbnb,
                },
                success: (resp) => {
                    console.log(resp);
                    this.$router.push("/startup/step4");
                },
                error: (err) => {
                    this.error_message =
                        err === null
                            ? "No se pudo guardar el formulario"
                            : err.error;
                    this.error = true;
                },
            });
        },
    },
};
</script>
