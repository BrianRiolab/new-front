<template>
    <img
        :src="require(`@/assets/images2/reference.png`)"
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
    />
    <main class="mt-0 main-content">
        <section>
            <div class="page-header min-vh-100 center">
                <div class="container">
                    <div class="row">
                        <div class="col-5 d-lg-flex d-none ps-0"></div>
                        <div
                            class="top-0 my-auto text-center col-5 d-lg-flex d-none h-100 ps-0 position-absolute start-0 justify-content-center flex-column"
                        >
                            <div
                                class="position-relative bg-gradient-primary h-100 d-flex flex-column justify-content-center overflow-hidden"
                                style="
                                    background-image: url('https://d1g2o4pwbvyrni.cloudfront.net/rdx-vitrina-dashboard/assets/img/signin-ill.jpeg');
                                    background-size: cover;
                                "
                            >
                                <h1
                                    class="mt-5 text-white font-weight-bolder position-relative font-sabon"
                                >
                                    Emprendimientos
                                </h1>
                            </div>
                        </div>
                        <div
                            class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
                        >
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},

    created() {},
    beforeUnmount() {},
    mounted() {
        document.getElementsByTagName("body")[0].id = "application";
        document.getElementsByTagName("body")[0].classList.add("bg-white");
    },
    methods: {},
};
</script>
