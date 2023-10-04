<template>
    <div id="personajes">
        <CardsPersonajes></CardsPersonajes>
    </div>
</template>
<script>
    import CardsPersonajes from '@/components/cardsPersonajes.vue'
    //exportacion de un objeto
    export default{
        name: 'personajes',
        data: function () {
            return{

            }
        },
        components:{
            CardsPersonajes
        },
        methods:{},
        computed:{},
        watch:{},
        //hooks:
        //ejecuta la funcion del metodo automaticamente
        created(){

        },
        mounted(){

        }

    }
</script>
<style>

</style>