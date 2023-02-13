<template>
    <div class="mx-xl-5 px-xl-5">
        <vitrina-form-business
            v-model:url_main="url_main"
            v-model:uuid_main="uuid_main"
            v-model:title="title"
            v-model:description="description"
            v-model:website="website"
        />
        <div class="alert alert-danger" role="alert" v-if="error">
            {{ error_message }}
        </div>
    </div>
    <div class="d-flex justify-content-end m-5">
        <rdx-button type="startup" @click="on_click_continue()"
            >Guardar y Continuar</rdx-button
        >
    </div>
</template>

<script>
import VitrinaFormBusiness from "../dashboard/vitrina/form/Business.vue";

export default {
    data() {
        return {
            error: false,
            error_message: "",
            url_main: null,
            uuid_main: null,
            title: null,
            description: null,
            website: null,
        };
    },
    mounted() {},
    components: {
        "vitrina-form-business": VitrinaFormBusiness,
    },
    created() {
        this.url_main = this.$store.showcase.data.url_main;
        this.uuid_main = this.$store.showcase.data.uuid_main;
        this.title = this.$store.showcase.data.title;
        this.description = this.$store.showcase.data.description;
        this.website = this.$store.showcase.data.website;
    },
    methods: {
        on_click_continue() {
            this.error = false;

            this.$api.patch({
                url:
                    "/api/showcase/" +
                    this.$store.session.current_user.showcase_id +
                    "/",
                data: {
                    step: "business",
                    uuid_main: this.uuid_main,
                    title: this.title,
                    description: this.description,
                    website: this.website,
                },
                success: (resp) => {
                    console.log(resp);
                    this.$router.push("/startup/step3");
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
