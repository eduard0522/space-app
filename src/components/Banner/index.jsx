import styled from "styled-components";
import  banner from   './banner.png'

const ContainerStyled = styled.figure`
  background-image: url(${banner});
  width: 100%;
  max-width:100%;
  border-radius: 1rem;
  min-height: 328px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

const TitleStyled = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 53px;
  max-width: 300px;
  color: #d9d9d9;
  padding: 0 2rem;
`


const Banner = () => {
  return (
    <ContainerStyled >
        <TitleStyled>La galería más completa del espacio</TitleStyled>
    </ContainerStyled>
  )
}

export default Banner;