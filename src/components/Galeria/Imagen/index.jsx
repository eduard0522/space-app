import styled from "styled-components"
import InfoImagen from "./InfoImagen"


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
const Imagen = ({imagen,expandida}) => {
 
  return (
      <CardContainer $expandida = {expandida}>
          <img src={imagen.path} alt={imagen.titulo} /> 
          <InfoImagen foto={imagen} expandida={expandida} ></InfoImagen>
      </CardContainer>
  )
}

export default Imagen