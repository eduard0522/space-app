import styled from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import fotos from "./fotos.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

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

  const [fotosGaleria, setFotosGaleria] = useState(fotos)

  const actualizarFavorita = (foto) => {
      setFotosGaleria(fotosGaleria.map(fotoGaleria => {
        return {
          ...fotoGaleria,
          favorita: fotoGaleria.id === foto.id ?  !fotoGaleria.favorita : fotoGaleria.favorita
        }
      }
     ))
 }

  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
  
  return (
    <>
      <FondoGradiente >
        <GlobalStyles />
        <AppContainer>
            <Cabecera />
            <MainStyled>
              <BarraLateral />
              <ContenidoGaleria >
                  <Banner />
                  <Galeria fotos = {fotosGaleria}  seleccionarFoto={foto => setFotoSeleccionada(foto)} actualizarFavorita={actualizarFavorita} />
              </ContenidoGaleria>
            </MainStyled>
        </AppContainer> 
        <ModalZoom  foto={fotoSeleccionada} setFotoSeleccionada = {setFotoSeleccionada} actualizarFavorita={actualizarFavorita}/>
      </FondoGradiente >
      <Footer/>
    </>
  )

}
export default App
