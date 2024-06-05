import styled from "styled-components"
import InputText from "../CampoTexto/CampoTexto"

const HeaderEstilizado = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img{
    width: 212px;
  }
`

const Cabecera = ({aplicarFiltro}) => {
  return (
  <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo Space App" />
      <InputText  aplicarFiltro={aplicarFiltro}/>
  </HeaderEstilizado>
)}

export default Cabecera