<template>
    <div id="cardsLibros">
        <div class="contenedorLibros">
            <div class="cardLibros" v-for="(libros,index) in arrayLibros" :key="index">
                
                    <b-card border-variant="info" :header="libros.libro" align="center" style="max-width: 20rem;"
    >                    <p>{{ libros.autora }}</p>
                        <hr>
                        <p>{{ libros.fecha_de_lanzamiento}}</p>
                        <hr>
                        <P>{{ libros.titulo_original }}</P>
                        <b-card-text>{{ libros.descripcion   }}</b-card-text>
                    </b-card>
              
            </div>
        </div>
    </div>
</template>
<script >
import { mapActions, mapState } from 'vuex';
export default {

    name: 'cardsLibros',
    data: function () {
        return {

        }
    },
    components: {

    },
    methods: {
        ...mapActions('libros', ['datosLibros'])

    },
    computed: {
        ...mapState('libros', ['arrayLibros'])
    },
    watch: {

    },
    //hooks
    created() {
        this.datosLibros()
    },
    mounted() {

    }

}
</script>
<style scoped>
 .contenedorLibros{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
 }
 .cardLibros{
    margin: 2%;

}
</style>