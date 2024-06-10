import styled from "styled-components"
import InfoImagen from "./InfoImagen"
import { useContext } from "react"
import { GlobalContext } from "../../Context"



const CardContainer = styled.figure`
  width: ${props => props.$expandida ? '90%' :"370px" };
  border-radius: 1rem;
  overflow: hidden;
  padding: 0;
  margin: 0;
    & img{
      margin: 0;
      padding: 0;
      width: 100%;
    }
`
const Imagen = ({imagen,expandida,solicitarZoom,actualizarFavorita}) => {
  const {state} = useContext(GlobalContext)
  return (
      <CardContainer $expandida = {expandida}>
          <img src={imagen.path} alt={imagen.titulo} /> 
          <InfoImagen foto={imagen} expandida={expandida}  solicitarZoom={solicitarZoom} actualizarFavorita={actualizarFavorita} ></InfoImagen>
      </CardContainer>
  )
}

export default Imagen