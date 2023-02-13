<template>
    <div class="row g-0 mx-xl-5 px-xl-5">
        <div class="col-12 col-xl-6">
            <h2>
                Selecciona las actividades a las que se dedica tu
                emprendimiento.
            </h2>
            <div class="warning-message p-1 d-flex col-10" role="alert">
                <div class="icon me-2">
                    <i class="bi bi-exclamation-circle"></i>
                </div>
                <p class="small text-muted">
                    Si tu emprendimiento se dedica a más de una actividad puedes
                    seleccionar más de una opción
                </p>
            </div>
        </div>
        <div class="col-12 col-xl-6">
            <div class="alert alert-danger" role="alert" v-if="error">
                {{ error_message }}
            </div>
            <vitrina-form-interest
                v-model:interests_ids="interests_ids"
                :showcase_id="null"
            />
        </div>
    </div>
    <div class="col-12">
        <div class="d-flex justify-content-end mt-5 mx-5">
            <rdx-button type="startup" @click="on_click_continue()"
                >Guardar y Continuar</rdx-button
            >
        </div>
    </div>
    <!-- <div class="bg-black">
        <h1>testing</h1>
    </div>
    <h2 class="lh-2 xbold text-start mb-4">
        Selecciona qué tipo de emprendimiento eres
    </h2> -->
</template>
<script>
//import RDxCheckbox from "@/components/RDxCheckbox.vue";
import VitrinaFormInterests from "../dashboard/vitrina/form/Interests.vue";

const body = document.getElementsByTagName("body")[0];

// import axios from "axios";

export default {
    data() {
        return {
            error: false,
            error_message: "",
            interests_ids: [],
        };
    },

    components: {
        "vitrina-form-interest": VitrinaFormInterests,
    },
    created() {
        body.classList.remove("bg-gray-100");
        this.interests_ids = this.$store.showcase.data.interests_ids;
    },
    beforeUnmount() {
        body.classList.add("bg-gray-100");
    },
    mounted() {},
    methods: {
        on_click_continue() {
            this.error = false;
            this.$api.patch({
                url:
                    "/api/showcase/" +
                    this.$store.session.current_user.showcase_id +
                    "/",
                data: {
                    step: "interests",
                    interests_ids: this.interests_ids,
                },
                success: (resp) => {
                    console.log(resp);

                    this.$router.push("/startup/step2");
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
