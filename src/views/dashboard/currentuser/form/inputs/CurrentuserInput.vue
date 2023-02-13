<template>

    <div class="currentuser-input-group mb-3">
        <h6 class="font-apercu-light mb-1">{{label}}</h6>
        <input 
            class="currentuser-form-control" 
            type="text" 
            v-model="local_value" 
            :placeholder="placeholder" 
            
        />
    </div>
    
    <!-- @input="$emit('update:modelValue',$event.target.value)"  -->
    
</template>

<style lang="scss" scoped>
.currentuser-input-group
{
    display: flex;
    flex-direction: column;
    currentuser-form-control
    {
        border: none;
        border-radius: 0;
        background-color: #f9f9f9;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: black;
        border: 0;
        // border-top-left-radius: .25rem;
        // border-top-right-radius: .25rem;
        &:focus
        {
            border: none;
            box-shadow: none;
            background-color: #f9f9f9;
            outline: red auto 1px !important;
        }
        // placeholder
        &::placeholder
        {
            // color: black;
            opacity: 1;
        }
    }
}
</style>
<script>
export default {
    props: {
        label: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        value: {default:null},
    },
    data() {
        return {
            local_value: '',  
        };
    },
    
    created() {
        this.local_value = this.value;
    },
    
    watch: {
        local_value(newValue,oldValue) {
            this.$emit('update:value',newValue); 
        },
    },
};
</script>
