<template>
    <div id="cardsHechizos">
      
        <div  class="con">
            <div style="margin: 2%;" v-for="datos in hechizosApi ">
            <b-card :title="datos.hechizo" img-src="https://pbs.twimg.com/media/D-EhNj-W4AAwh2C?format=jpg&name=medium" img-alt="Image" img-top
                tag="article" style="max-width: 20rem;" class="mb-2">
                <b-card-text>
                   {{ datos.uso }}
                </b-card-text>

                
            </b-card>
        </div>
        </div>
        
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    name: 'cardsHechizos',
    data: function () {
        return {

        }
    },
    //los actions se mapean en los methods
    //los tres punntos son para que los vaya sacando y los vaya guardando en un array
    methods:{
        ...mapActions('hechizos',['consumirDatos'])
    },
    //el mapState se usa en las propiedades computadas para que desestructure en un arreglo los states que estan en el almacen llamado hechizos[]
    //destructurar un arreglo destructuring
    computed:{
        //llamamos el modulo hechizos creado en el almacen luego llamamos el state hechizosApi [] 
        ...mapState('hechizos',['hechizosApi'])
    },
    watch:{

    },
    //hooks
    //para que el componente vaya al almacen y consuma los datos automaticamente se hace atravez de un hooks created
    created(){
        this.consumirDatos()
    },
    //hooks
    mounted(){

    }

}
</script>
<style scoped>
#cardsHechizos {
    background: rgb(44, 68, 92);
    background: linear-gradient(90deg, rgba(44, 68, 92, 1) 32%, rgba(247, 153, 83, 1) 100%, rgba(167, 75, 73, 1) 100%);

}
.con {
    margin: 4%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>