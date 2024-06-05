import instagram from "/img/redes/instagram.svg"
import facebook from "/img/redes/facebook.svg"
import twitter from "/img/redes/twitter.svg"
import styled from "styled-components"


const FooterStyled  =  styled.footer`
  background-color:#041c3a;
  padding: 2rem 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
   & p {
    color: #D9D9D9;
    font-size: 1.2rem;
   }
`

const RedesIcons = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`
const Footer  = () => {
  return ( 
    <FooterStyled>
        <RedesIcons>
          <a href="https://www.instagram.com/"> <img src={instagram} alt="Icono Instagram" /></a>
          <a href="https://www.facebook.com/"> <img src={facebook} alt="Icono facebook" /></a>
          <a href="https://www.twitter.com/"> <img src={twitter} alt="Icono twiter" /></a>
        </RedesIcons>
        <p>Desarrollado por Eduard Villamil</p>
    </FooterStyled>
  )
}
export default Footer