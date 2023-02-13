<template>
    <div class="Rdx-cursor-outline"></div>
    <div class="Rdx-cursor-dot"></div>

    <section class="application">
        <div class="application-layers">
            <rdx-sidebar-list></rdx-sidebar-list>

            <div class="content-layer">
                <div class="content-layer-wrapper">
                    <div class="content-body p-3 p-lg-5">
                        <rdx-header></rdx-header>

                        <router-view />
                    </div>

                    <rdx-footer></rdx-footer>
                </div>
            </div>
        </div>
    </section>

    <rdx-dashboard-welcome v-if="show_welcome" v-model:show="show_welcome" />
</template>

<script>
import { Tooltip } from "bootstrap";

import Welcome from "./Welcome.vue";
import SidebarList from "./components/SidebarList.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
    data() {
        return {
            show_welcome: false,
        };
    },
    components: {
        "rdx-sidebar-list": SidebarList,
        "rdx-header": Header,
        "rdx-footer": Footer,
        "rdx-dashboard-welcome": Welcome,
    },

    created() {
        // Si estoy logeado
        if (this.$store.session.isLogged) {
            this.$api.get({
                url: [
                    [
                        "/api/showcase/" +
                            this.$store.session.current_user.showcase_id +
                            "/",
                        null,
                    ],
                    /*
                  ['/api/showcase_product/',
                      {'_filter_':[{ _op_:'=', showcase_id: this.$store.session.current_user.showcase_id}] } 
                  ],
                  */
                ],
                success: (resp_showcase) => {
                    // Si no se ha terminado el proceso de enrolamiento
                    // re-direccionno a /startup/step1
                    console.log(resp_showcase.data);
                    if (resp_showcase.data.state_ch == "EMPTY") {
                        this.$router.push("/startup/step1");
                    } else if (resp_showcase.data.state_ch == "NEW") {
                        // this.$router.push("/startup/step1");
                        this.$router.push("/dashboard/vitrina_view");
                        this.show_welcome = true;
                    }
                },
                error: (err) => {
                    console.log(err);
                },
            });
        }
        // Si NO estoy logeado, re-direcciono a pagina login
        else {
            console.log("No estoy logeado");
            this.$router.push({ path: "/session/login" });
        }
    },
    beforeUnmount() {},
    mounted() {
        document.getElementsByTagName("body")[0].id = "application";
        const tooltipTriggerList = document.querySelectorAll(
            '[data-bs-toggle="tooltip"]'
        );
        const tooltipList = [...tooltipTriggerList].map(
            (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
        );
    },
    methods: {},
};
</script>
