<template>
    <nav id="sidebar" class="sidebar">
        <!--start-->
        <div class="logo">
            <img
                src="@/assets/img/araucaria.png"
                style="width: 50px; padding-left: 10px; padding-top: 10px"
                alt="rdx-short-logo"
                class="svg"
            />
        </div>

        <!--middle-->
        <ul class="nav" data-controller="navbar">
            <templage
                v-if="$store.session.current_user.profile_ch == 'ENTREPRENEUR'"
            >
                <rdx-sidebar-item
                    title="Mi emprendimiento"
                    icon="bi-shop-window"
                    @click="on_click('/dashboard/vitrina_view')"
                />

                <rdx-sidebar-item
                    title="Productos"
                    icon="bi-grid-3x2-gap"
                    @click="on_click('/dashboard/product_list')"
                />

                <rdx-sidebar-item
                    title="Capacitaciones"
                    icon="bi-person-workspace"
                    @click="on_click('/dashboard/training')"
                />
            </templage>

            <templage
                v-if="
                    $store.session.current_user.profile_ch ==
                    'SHOWCASE_APPROVER'
                "
            >
                <rdx-sidebar-item
                    title="Emprendimientos"
                    icon="bi-person-workspace"
                    @click="on_click('/dashboard/training')"
                />
            </templage>
        </ul>

        <!--bottom-->
        <div class="bottom">
            <div
                class="rdx p-3"
                data-bs-toggle="tooltip"
                data-bs-title="RDx"
                data-bs-placement="right"
            >
                <img
                    src="@/assets/img/araucaria.png"
                    alt="rdx-short-logo"
                    class="svg"
                />
            </div>
        </div>
    </nav>
</template>

<!-- import style -->
<style lang="scss" scoped>
.sidebar {
    background: #131313;
}
</style>

<script>
import SidebarItem from "./SidebarItem.vue";

export default {
    data() {
        return {};
    },
    components: {
        "rdx-sidebar-item": SidebarItem,
    },

    created() {},
    beforeUnmount() {},
    mounted() {},
    methods: {
        on_click(path) {
            this.$router.push({ path: path });
        },
    },
};
</script>
