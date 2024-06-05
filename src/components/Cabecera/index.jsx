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

const Cabecera = () => {
  return (
  <HeaderEstilizado>
      <img src="img/logo.png" alt="Logo Space App" />
      <InputText />
  </HeaderEstilizado>
)}

export default Cabecera