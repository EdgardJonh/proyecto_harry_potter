<template>
    <div id="cardsPersonajes">
        
        <div class="contenedorPersonajes">
            <div class="cardPersonajes" v-for="(personajes, index) in arrayPersonajes" :key="index">
                <b-card  
                :title="personajes.interpretado_por" 
                :img-src="personajes.imagen" 
                img-alt="Image" 
                img-top
                tag="article" 
                style="max-width: 30rem;" 
                class="mb-2">
                    <b-card-text>
                        {{ personajes.personaje }}
                    </b-card-text>
                    <b-button href="" @click.prevent="saberMasPersonaje(personajes.personaje,personajes.interpretado_por,personajes.casaDeHogwarts)" variant="primary">Saber Mas</b-button>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'cardsPersonajes',
    data: function () {
        return {

        }
    },
    //Metodos de funciones Programacion funcional
    methods: {
        ...mapActions('personajes', ['datosPersonajes']),

        saberMasPersonaje: function (param1,param2,param3){
            this.$router.push(`/saberMas/${param1}/${param2}/${param3}`)
            // this.$emit
        }
       
       
    },
    //Propiedades Computadas, ...mapState
    computed: {
        ...mapState('personajes', ['nombre', 'arrayPersonajes'])
    },
    watch: {},
    //Hooks
    created() {
        this.datosPersonajes()
        
    },
    mounted() {
      
    }
}
</script>
<!-- Lleva scope para mantener los estilos en el componente -->
<style scope>
#cardsPersonajes {
    color: white;
    background: rgb(44, 68, 92);
    background: linear-gradient(90deg, rgba(44, 68, 92, 1) 32%, rgba(247, 153, 83, 1) 100%, rgba(167, 75, 73, 1) 100%);

}
.contenedorPersonajes{
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin: 2%;
}
.cardPersonajes{
    
    margin: 1%;
    width: 20%;
}

</style>