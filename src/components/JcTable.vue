<template>
    <table id="demo">
        <slot name="thead">

        </slot>
        <slot name="tbody">

        </slot>
    </table>
</template>
<script>
export default {
    name: 'JcTable',
    props: {
        load: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            columns: [],
            rows: []
        }
    },
    watch: {
        load(){
             $('#demo').DataTable(this.$store.state.datatableOption);
        },
      

           
        
    },
    mounted() {
      
    }
}
</script>