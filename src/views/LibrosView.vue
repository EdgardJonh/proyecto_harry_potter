<template>
    <div id="libros">
            <cardLibros></cardLibros>
    </div>
</template>
<script>
import cardLibros  from "@/components/cardsLibros.vue";
    export default{
        name:'libros',
        data: function () {
            return{

            }
        },
        components: {
            cardLibros
        },
        methods:{

        },
        computed:{

        },
        watch:{},
        //hooks
        created(){

        },
        mounted(){

        }
    }

</script>
<style>
</style>