import styled from "styled-components"
import { GlobalStyles } from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import Galeria from "./components/Galeria"
import { useState,useEffect } from "react"
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

  const [fotosGaleria, setFotosGaleria] = useState([])
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null)

  
  const actualizarFavorita = (foto) => {
    if(foto.id === fotoSeleccionada?.id ){
     setFotoSeleccionada({
      ...fotoSeleccionada,
      favorita: !fotoSeleccionada.favorita,
     })
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ?  !fotoGaleria.favorita : fotoGaleria.favorita
      }
    }))
 } 


 useEffect(() => {
  const getFotos = async () => {
    try {
      const res = await fetch('http://localhost:3000/fotos');
      const data = await res.json();
      setFotosGaleria([...data]);
    } catch (error) {
      setFotosGaleria([])
    }
  }
  getFotos()
},[])

 const aplicarFiltro = (filtro) => {
    setFotosGaleria(fotosGaleria.filter( foto => {
     return filtro == ""  ||  foto.titulo.toLowerCase().includes(filtro.toLowerCase())
    }
  ));
 }

 const filtrarTags = (id) => {
  setFotosGaleria(fotosGaleria.filter( foto => {
   return id === 0 ? foto  : foto.tagId === (id)
  }));
}

  return (
    <>
      <FondoGradiente >
        <GlobalStyles />
        <AppContainer>
            <Cabecera  aplicarFiltro ={aplicarFiltro} />
            <MainStyled>
              <BarraLateral />
              <ContenidoGaleria >
                  <Banner />
                  <Galeria fotos = {fotosGaleria}  seleccionarFoto={foto => setFotoSeleccionada(foto)} actualizarFavorita={actualizarFavorita} filtrarTag={filtrarTags} />
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
