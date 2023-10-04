import router from "@/router"
import axios from "axios"

const libros = {
    namespaced: true,
    state:{
        arrayLibros:[]
    },
    getters:{
        //Calculan
    },
    mutations:{ 
        DATOS_LIBROS: (state,datos )=>{
            state.arrayLibros = datos
        }
    },
    actions:{
        datosLibros:(context)=>{
            // router
            let url = 'https://harry-potter-api.onrender.com/libros'
            axios.get(url)
            .then((info)=>{
                context.commit('DATOS_LIBROS', info.data)
            })
            .catch((error)=>{
                console.log(error)
            })
            let info = 'los datos'
            
        }
    },
    modules:{

    }
}
export default libros;