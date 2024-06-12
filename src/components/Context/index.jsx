import { createContext,useEffect,useReducer } from "react";
const GlobalContext = createContext()

const initialState = {
  fotosGaleria:[],
  fotoSeleccionada: null,
  filtarFotos: [],
  isOpenPhoto: false
};

const reducer = (state,action) => {
  switch(action.type){
    case "SET_FOTOS_GALERIA":
      return{
        ...state, fotosGaleria: action.payload  }
    case "SET_FOTO_SELECCIONADA":
      return {
        ...state,fotoSeleccionada: action.payload,
            isOpenPhoto: action.payload != null ? true : false
      }
        
    case "SET_FILTRAR_FOTOS":
      return{
        ...state,
        filtarFotos: state.fotosGaleria.filter(foto => {
          return action.payload.filter === "" || foto.titulo.toLowerCase().includes(action.payload.toLowerCase())
        })
      }

    case "ALTERNAR_FAVORITO":
      return {
        ...state,
        filtarFotos : state.filtarFotos.map(fotoDeGaleria => {
          return {
            ...fotoDeGaleria,
            favorita: fotoDeGaleria.id === action.payload.id ? !fotoDeGaleria.favorita : fotoDeGaleria.favorita 
          }
        }),

      fotoSeleccionada: state.fotoSeleccionada? {
        ...state.fotoSeleccionada,
        favorita : !state.fotoSeleccionada.favorita
      }:null
      } 
      
    case "FILTRAR_TAGS":
      return{
        ...state,
        filtarFotos:  state.fotosGaleria.filter(foto => {
          return action.payload === 0 ? foto : foto.tagId === (action.payload)
      })
      }

    default:
      return state;
  }

}

const GlobalContextProvider = ({children}) => {
  console.log("coargando contexto")
  const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
      const getFotos = async () => {
        try {
          const res = await fetch('http://localhost:3000/fotos');
          const data = await res.json();
          console.log(res.data)
          dispatch({type: "SET_FOTOS_GALERIA" , payload: data})
          dispatch({type: "SET_FILTRAR_FOTOS" , payload: {data,filter:""}})
        } catch (error) {
          console.log(error)
           dispatch({type: "SET_FOTOS_GALERIA" , payload: []})
        }
      }
      getFotos()
      },[])

  return(
    <GlobalContext.Provider  value={{ state,dispatch}} > 
    {children}
    </GlobalContext.Provider>
  )
}

export {
  GlobalContextProvider,
  GlobalContext
}