<template>
    <div class="vitrina-input-group mb-3">
        <label class="mb-1">{{ label }}</label>
        <textarea
            class="vitrina-form-control"
            :rows="rows"
            :placeholder="placeholder"
            v-model="local_value"
        ></textarea>
    </div>
</template>

<style lang="scss" scoped>
// .vitrina-input-group {
//     display: flex;
//     flex-direction: column;
//     label {
//         font-size: 0.75rem;
//         font-weight: 400;
//         line-height: 1.5;
//         color: black;
//     }
//     .vitrina-form-control {
//         border: none;
//         border-radius: 0.25rem;
//         background-color: white;
//         padding: 0.5rem 1rem;
//         font-size: 1rem;
//         font-weight: 400;
//         line-height: 1.5;
//         color: black;
//         border: 0;
//         // border-top-left-radius: .25rem;
//         // border-top-right-radius: .25rem;
//         &:focus {
//             border: none;
//             box-shadow: none;
//             background-color: white;
//             outline: red auto 1px !important;
//         }
//         // placeholder
//         &::placeholder {
//             // color: black;
//             opacity: 1;
//         }
//     }
// }
</style>

<script>
export default {
    name: "vitrina-textarea",
    props: {
        label: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        value: { default: null },
        rows: {
            type: Number,
            default: 7,
        },
    },
    data() {
        return {
            local_value: null,
        };
    },
    created() {
        console.log("desc: textarea ::: " + this.value);
        this.local_value = this.value;
    },
    watch: {
        local_value: function (newValue, oldValue) {
            this.$emit("update:value", newValue);
        },
    },
};
</script>
