<template>
    <div id="hechizos">
        <cardHechizos></cardHechizos>
    </div>
</template>
<script>
import cardHechizos from '@/components/cardsHechizos.vue'
    export default{
        name: 'hechizos',
        data: function () {
            return{
               
            }
        },
        components:{
            cardHechizos
        }

    }
</script>
<style scoped>
    #hechizos{
        background-color: #0c2425;
        color: white;
        
    }
</style>