<template>
    <div class="modal-backdrop fade show"></div>

    <div
        class="modal fade d-block show"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Felicidades</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <p>
                        Terminaste el proceso de creación de tu emprendimiento
                        con éxito
                    </p>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Cerrar
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="on_click_continue()"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="position-fixed vw-100 vh-100 center">
            <div class="row">
                <h1 style="padding: 100px">
                    FELICITACIONES TERMINASTE EL PROCESO DE CREACIÓN DE TU
                    EMPRENDIMIENTO CON ÉXICO !!!!
                </h1>
                <br />
                <h6 style="padding: 100px">
                    Acá podras administrar tu emprendimiento.
                </h6>
            </div>

            <div class="row">
                <div style="z-index: 999">

            </div>
        </div>
        <br />
    </div> -->
</template>
<style lang="scss" scoped>
.modal {
    //   position: fixed;
    // left: 0px;
    // top: 0px;
    // width: 100%;
    // height: 100%;
    // z-index: 9998;
    // background-color: rgba(0, 0, 0, 0.26);
    // opacity: 1;
    // -webkit-backdrop-filter: blur(2px);
    // z-index: 100;
    // /* -webkit-filter: blur(100px); */
    // display: block;
}
</style>
<script>
export default {
    props: {
        show: { default: false },
    },
    data() {
        return {};
    },

    components: {},

    created() {},

    beforeUnmount() {},

    mounted() {},

    methods: {
        on_click_continue() {
            this.$api.patch({
                url:
                    "/api/showcase/" +
                    this.$store.session.current_user.showcase_id +
                    "/",
                data: {
                    state_ch: "PENDING_ENABLED",
                },
                success: (resp) => {
                    console.log(resp);
                    //this.$router.push('/dashboard');
                    console.log("LISTO !!!!");
                    this.$emit("update:show", false);
                },
                error: (err) => {
                    console.log(err);
                },
            });
        },
    },
};
</script>
