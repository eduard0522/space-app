import { useState,useEffect } from "react"
import styled from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"
import { GlobalContextProvider } from "./components/Context"

const FondoGradiente  = styled.div`
  background: linear-gradient(75deg,#0c3465 4.16%, #04244F 48%, #154b8e 96.76%);
  width: fit-content;
  min-width: 100%;
  min-height: 100vh;
  padding: 2rem;
  box-sizing: border-box;
`

const AppContainer  = styled.div`
    width: 100%;
    max-width: 1640px;
    margin: 0 auto;
`

const MainStyled = styled.main`
  display: flex;
  gap: 1.5rem;
`

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () =>  {

  return (
    <>
      <FondoGradiente >
        <GlobalStyles />
        
        <GlobalContextProvider>
            <AppContainer>
                <Cabecera />
                <MainStyled>
                  <BarraLateral />
                  <ContenidoGaleria >
                      <Banner />
                      <Galeria  />
                  </ContenidoGaleria>
                </MainStyled>
            </AppContainer> 
            <ModalZoom  />
            <Footer />
        </GlobalContextProvider>
      </FondoGradiente >
     
    </>
  )

}
export default App
