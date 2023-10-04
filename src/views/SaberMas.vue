<template>
    <div id="saberMas" >
        <h3>Este es el nombre del Personaje: <span style="color: red;">{{ param1 }}</span></h3>
          <h3>Nombre del actor: <span style="color: rgb(151, 155, 96);">{{ param2 }}</span></h3>
          <h3>Casa de Hogwarts: <span style="color: orange;">{{param3  }}</span></h3>
          
    </div>
</template>
<script>
    export default {
        name: 'saberMas',
        props:{
            param1: String,
            param2: String,
            param3:String
        },
        data: function () {
            return{

            }
        }

    }
</script>
<style scoped>
h3{
    color: white;
}
</style>