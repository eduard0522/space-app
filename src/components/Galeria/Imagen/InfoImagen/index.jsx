import styled from "styled-components"
import meGustaActivo from "/iconos/favorito-activo.png"
import meGusta from "/iconos/favorito.png"
import expandir from "/iconos/expandir.png"

const InfoImgContainer = styled.div`
  transform: translateY(-.5rem);
  margin: 0;
  padding: .8rem;
  background-color:#001634 ;
    & h3{
      font-size: 1.5rem;
      color: #d9d9d9;
      margin: 0;
      padding: 0;
    }
`
const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
   & p{
    font-size: 1rem;
      color: #d9d9d9;
      margin: 0;
      padding: 0;
   }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
    & button{
      background-color: transparent;
      border:none;
      cursor: pointer;
    }
` 

const InfoImagen = ({foto,expandida,solicitarZoom,actualizarFavorita}) => {

  const iconFovorite = foto.favorita ?  meGustaActivo : meGusta;

  const {titulo,fuente} = foto
  return (
    <InfoImgContainer>
        <h3> {titulo} </h3>
        <Footer >
          <p> {fuente}</p>
          <Buttons>
              { <button type="button" onClick={() => actualizarFavorita(foto)}> <img src={iconFovorite} alt="Icono corazon" /> </button> }
              { !expandida &&  <button aria-hidden={expandida} type="button"> <img src={expandir} alt="Icono expandir"  onClick={() => solicitarZoom(foto)}/> </button>}
          </Buttons>
        </Footer>
    </InfoImgContainer>

  )
}

export default InfoImagen