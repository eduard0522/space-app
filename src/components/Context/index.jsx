import { createContext,useEffect,useReducer } from "react";
const GlobalContext = createContext()

const initialState = {
  fotosGaleria:[],
  fotoSeleccionada: null,
  filtarFotos: []
};

const reducer = (state,action) => {
  switch(action.type){
    case "SET_FOTOS_GALERIA":
      return{
        ...state, fotosGaleria: action.payload  }
    case "SET_FOTO_SELECCIONADA":
      return {
        ...state,fotoSeleccionada: action.payload }

    case "SET_FILTRAR_FOTOS":
      return{
        ...state,
        filtarFotos: state.fotosGaleria.filter(foto => {
          return action.payload === "" || foto.titulo.toLowerCase().includes(action.payload.toLowerCase())
        })
      }

    case "ALTERNAR_FAVORITO":
      return {
        ...state,
        fotosGaleria : state.fotosGaleria.map(fotoDeGaleria => {
          return{
            ...fotoDeGaleria,
            favorita: fotoDeGaleria.id === foto.id ? !fotoDeGaleria.favorita : fotoDeGaleria.favorita 
          }
        }),
        fotoSeleccionada: {
          ...state.fotoSeleccionada, favorita: !fotoSeleccionada.favorita
        }
      }

    case "FILTRAR_TAGS":
      return{
        ...state,
        filtarFotos: fotosGaleria.filter(foto => {
          return action.payload === 0 ? foto : foto.tagId === (action.payload)
      })
      }

    default:
      return state;
  }

}

const GlobalContextProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(() => {
      const getFotos = async () => {
        try {
          const res = await fetch('http://localhost:3000/fotos');
          const data = await res.json();

          dispatch({type: "SET_FOTOS_GALERIA" , payload: data})
          dispatch({type: "SET_FILTRAR_FOTOS" , payload: data})
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