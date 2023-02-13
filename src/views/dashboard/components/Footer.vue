<template>
    <footer
        class="position-absolute w-100 d-none d-xl-block"
        style="bottom: 0rem"
    >
        <div class="w-100 d-flex justify-content-between align-items-center">
            <div>
                <img
                    src="@/assets/icons/rdx-technology.png"
                    alt="rdx-technology"
                    width="120"
                />
            </div>
            <div class="d-flex">
                <span class="me-2" style="font-size: x-small"
                    >Desarrollado por
                </span>
                <img
                    src="@/assets/icons/riolab.png"
                    alt="riolab"
                    width="110"
                    style="transform: translateY(-10px)"
                />
            </div>
        </div>
    </footer>
    <!-- 
  FOOTEER: {{$store.session.isLogged}}
  <br />
  {{this.$store.session.current_user}}
  -->
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},

    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {},
};
</script>
