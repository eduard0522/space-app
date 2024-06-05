import styled from "styled-components"
import Imagen from "../Galeria/Imagen"

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
    top: 2rem;
    right: 4rem;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;

   }
`

const handleSubmmit = (e,setFoto) => {
  e.preventDefault();
  setFoto(null);
}

const ModalZoom = ({foto,setFotoSeleccionada,actualizarFavorita}) => {
  return (
  <>
    {foto && 
        <> 
        <Overlay />
        <DialogStyled open={!!foto}>
          <form method="dialog">
            <Imagen imagen={foto} expandida={true} actualizarFavorita={actualizarFavorita} />
            <button onClick={(e) => handleSubmmit(e,setFotoSeleccionada)}> X</button>
          </form>
        </DialogStyled>
        </>
      }
   </>
  )
}
export default ModalZoom