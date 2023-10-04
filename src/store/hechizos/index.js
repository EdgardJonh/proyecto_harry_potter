import axios from "axios";

const hechizos = {
    namespaced: true,
    state:{
        hechizos: [
            {
                nombre: '',
                uso:''
            },
            {
                nombre: '',
                uso:''
            }
        ],
        hechizosApi:[
            
        ],
        hechizosJson:[]
    },
    getters:{
    
    },
    mutations:{
        //el mutations manipula el state , el primer argumento de mi state consumir_datos es STATE segundo argumento los datos que deseo manipular
        CONSUMIR_DATOS: (state, datos)=>{
            state.hechizosApi = datos
        }
    },
    actions:{
        consumirDatos: (context)=>{
            //utilizo el parametro para comunicarme con el mutations
            //EL ACTION LLAMA AL MUTATIONS CON LA FUNCION COMMIT EL PRIMER PARAMETRO NOMBRE DEL MUTATIONS
            // Y EL SEGUNDO PARAMETRO LE PASA UNA INFORMACION
            // el actions llama el mutations consumir datos le pasa esa informacio 
            //el mutations consumir datos recibe esa data 
            //el mutation por dentro manipula el state de la propiedad hechizos le asigna la data
            let url = 'https://harry-potter-api.onrender.com/hechizos'
            axios.get(url)
            .then((informacion)=>{
                
                context.commit('CONSUMIR_DATOS', informacion.data)
            })
            .catch((error)=>{
                console.log(error)
            })
           
        } 
    },
    modules:{

    }
};
export default hechizos;
