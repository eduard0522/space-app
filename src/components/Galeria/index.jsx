import Titulo from "../Titulo"
import Tag from "./Tags"
import Populares from "./Populares"
import Imagen from "./Imagen"
import styled from "styled-components"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../Context"

const GaleriaContainer = styled.div`
    display: flex;
`
const SeccionFluida = styled.section`
  flex-grow: 1;
`
const ContainerImagenes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:2rem;
`
const Galeria = () => {
  const { state} = useContext(GlobalContext)
  return (

    <>
        <Tag />
        <GaleriaContainer >
            <SeccionFluida>
              < Titulo> Navegue por la Galería </Titulo>
              <ContainerImagenes>
              {state.filtarFotos.map(foto => {
                  return <Imagen imagen={foto}  key={foto.id}></Imagen>
                })}
              </ContainerImagenes>
            </SeccionFluida>
            <Populares />
        </GaleriaContainer>
       
    </>
  )
}

export default Galeria