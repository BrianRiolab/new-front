<template>
    <div :id="id" class="btn btn-primary" :style="{ width: width }">
        <slot></slot>

        <span v-if="show_plus" class="r-plus "> +</span>
    </div>
</template>

<style lang="scss" scoped>
// @import "@/styles/rdx-dashboard.scss";
// .button {
//     /*height: 45px;*/
//     padding: 5px 12px 7px 12px;
//     text-align: center;
//     cursor: pointer;
//     border-radius: 8px;
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//     overflow: hidden;
//     white-space: nowrap;
//     &.r-bg-red {
//         background: #d94733;
//         color: #fcf3f2;
//         font-weight: 500;
//         font-size: 14px;
//         .r-plus {
//             font-size: 16px;
//         }
//     }
// }
</style>

<script>
export default {
    name: "rdx-button",
    props: {
        width: { default: null },
    },
    data() {
        return {
            id: Math.random(),
            show_plus: false,
        };
    },
    created() {},
    mounted() {
        var btn = document.getElementById(this.id);
        if (btn.className.search("r-plus") >= 0) {
            this.show_plus = true;
        }
        // Si no agregue ninguna clase, fuerzo a que sea r-bg-red
        if (btn.className == "btn") {
            btn.className = "btn btn-primarry";
        }
    },
    methods: {},
};
</script>
