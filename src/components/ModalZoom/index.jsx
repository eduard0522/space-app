import styled from "styled-components"
import Imagen from "../Galeria/Imagen"
import { useContext } from "react"
import { GlobalContext } from "../Context"
import useModalZoom from "../hooks/ModalZoom"

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`


const DialogStyled = styled.dialog`
  position: absolute;
  top: 250px;
  width: 900px;
  max-width:100%;
  margin: 0 auto;
  padding: 0;
  background-color: transparent;
  border: none;

   & button{
    background-color: transparent;
    border: none;
    color: #D9D9D9;
    position: absolute;
    top: 1rem;
    right: 7rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

   }
`



const ModalZoom = () => {
  const {closeModal, selectedPhoto,isOpen} = useModalZoom();
  return (
  <>

    {selectedPhoto && 
        <> 
        <Overlay />
        <DialogStyled open={isOpen}>
          <form method="dialog">
            <Imagen imagen = {selectedPhoto} expandida={true}  />
            <button onClick={() => closeModal() }> X</button>
          </form>
        </DialogStyled>
        </>
      }
   </>
  )
}
export default ModalZoom