import axios from "axios"

const personajes = {
    namespaced: true,
    state:{
        nombre:'Esto son los personajes',
        arrayPersonajes: []
    },
    getters:{},
    mutations:{
        DATOS_PERSONAJES:(state, datos)=>{
            state.arrayPersonajes = datos
        }
    },
    actions:{
        datosPersonajes:(contex)=>{
            //Llamo al metodo commit para pasar los datos del array
            let url = 'https://harry-potter-api.onrender.com/personajes'
            axios.get(url)
            .then((info)=>{
               
                contex.commit('DATOS_PERSONAJES', info.data)
            })
            .catch((error)=>{
                console.log(error)
            })
            
        },
        
      
       
    },
    modules:{}
}
export default personajes;