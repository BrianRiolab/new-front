<template>
    <section class="application">
        <!-- <img
            :src="require(`@/assets/images2/reference_startup_6.png`)"
            class="p-fixed opacity-0"
            style="
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: -1;
                object-fit: contain;
            "
        /> -->
        <div class="application-layers">
            <div class="content-layer">
                <div class="content-layer-wrapper">
                    <div class="content-body p-3 p-lg-5">
                        <rdx-header />
                        <rdx-topbar-list />
                        <div
                            class="dashboard-container center pt-3 pb-5 mb-4 position-relative"
                            style="flex: 1"
                        >
                            <div class="container">
                                <router-view v-if="show" />
                            </div>
                            <rdx-footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
// import Header from "./components/Header.vue";
import Header from "@/views/dashboard/components/Header.vue";
import Footer from "@/views/dashboard/components/Footer.vue";
import TopbarList from "@/views/startup/components/TopbarList.vue";

export default {
    data() {
        return {
            show: false,
        };
    },
    components: {
        "rdx-header": Header,
        "rdx-footer": Footer,
        "rdx-topbar-list": TopbarList,
    },

    created() {
        this.$api.get({
            url: [
                [
                    "/api/showcase/" +
                        this.$store.session.current_user.showcase_id +
                        "/",
                    null,
                ],
                [
                    "/api/showcase_product/",
                    {
                        _filter_: [
                            {
                                _op_: "=",
                                showcase_id:
                                    this.$store.session.current_user
                                        .showcase_id,
                            },
                        ],
                    },
                ],
            ],
            success: (resp_showcase, resp_products) => {
                console.log("============================");
                console.log(resp_showcase);
                console.log(resp_products);

                this.show = true;
                this.$store.showcase.data = resp_showcase.data;
                this.$store.showcase.products = resp_products.data.results;
            },
            error: (err) => {
                console.log(err);
            },
        });
    },
    beforeUnmount() {},
    mounted() {
        document.getElementsByTagName("body")[0].id = "application";
        document
            .getElementsByTagName("body")[0]
            .classList.add("without-sidebar");
    },
    methods: {},
};
</script>
