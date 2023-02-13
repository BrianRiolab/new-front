<template>
    <div class="confirm">
        <div class="position-fixed vw-100 vh-100 center">
            <div class="d-flex flex-column justify-content-center">
                <div style="font-weight: 600; font-size: 22px">
                    {{ $store.global.confirm.title }}
                </div>

                <div class="d-flex justify-content-center">
                    <div
                        v-if="$store.global.confirm.left"
                        @click="$store.global.confirm.left.click()"
                        :class="'confirm-button-' + $store.global.confirm.type"
                        role="button"
                    >
                        {{ $store.global.confirm.left.label }}
                    </div>

                    <div>&nbsp;&nbsp;&nbsp;</div>

                    <div
                        v-if="$store.global.confirm.right"
                        @click="$store.global.confirm.right.click()"
                        :class="'confirm-button-' + $store.global.confirm.type"
                        role="button"
                    >
                        {{ $store.global.confirm.right.label }}
                    </div>
                </div>

                <div style="font-weight: 400; font-size: 18px">
                    {{ $store.global.confirm.subtitle }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// @import "@/styles/rdx-dashboard.scss";

.confirm-button {
    // @extend .rounded-pill, .rounded-pill, .border, .mt-4, .mb-4;
    width: 100px;
    height: 30px;
    text-align: center;
    font-weight: 600;
}

.confirm {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: rgb(249, 249, 249);
    opacity: 0.8;
    .confirm-button {
        &-success {
            background: #d9f35c;
            font-color: #000;
            // @extend .confirm-button;
        }
    }
    .confirm-button-warning {
    }
}
</style>

<script>
export default {
    name: "rdx-confirm",
    props: {},
    data() {
        return {};
    },
};
</script>
