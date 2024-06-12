import { useContext } from "react";
import { GlobalContext } from "../Context";

const useModalZoom = () =>{

    const {state,dispatch} = useContext(GlobalContext)

    const openModal  = (foto) => {
        dispatch({type:"SET_FOTO_SELECCIONADA",payload:foto})
    } 
    
    const closeModal = () => {
        dispatch({type:"SET_FOTO_SELECCIONADA", payload: null})
    }

    const selectedPhoto = state.fotoSeleccionada;

    const isOpen = state.isOpenPhoto;

    return {openModal,closeModal,selectedPhoto,isOpen}
}

export default useModalZoom;