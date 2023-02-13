<template>
    <div class="col-12 col-xl-4 mx-auto text-center">
        <h1 class="mb-4">¡Felicitaciones!</h1>
        <h2 class="mb-3">
            {{ this.$store.session.current_user.name }},
            <br />
        </h2>
        <p class="mb-3" style="line-height: 1.3">
            Nuestro equipo revisará que la información no tenga errores y esté
            lista para ser publicada en Araucanía Inifinita. Este proceso puede
            tardar un día y cuando esté listo podrás seguir agregando productos
            a tu emprendimiento.
        </p>
        <div
            class="alert alert-danger opacity-75 mb-3"
            role="alert"
            style="line-height: 1.3; font-size: 0.85rem"
        >
            Cuando esté listo te enviaremos un mail de confirmación a
            {{ this.$store.session.current_user.email }}. Si tienes cualquier
            duda puedes contactarte con nuestro equipo de soporte.
        </div>

        <div class="d-flex justify-content-center">
            <rdx-button
                type="startup"
                @click="on_click_continue()"
                class="btn-dark"
                >Ir a mi emprendimiento</rdx-button
            >
        </div>
    </div>
</template>

<style scoped></style>

<script>
export default {
    data() {
        return {
            error: false,
            error_message: "",
            url_product: null,
            uuid_product: null,
            name: null,
            price: null,
            description: null,
        };
    },
    mounted() {},
    components: {},
    methods: {
        on_click_continue() {
            this.$router.push("/dashboard/vitrina_view");
        },
    },
};
</script>
