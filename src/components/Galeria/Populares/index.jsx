import styled from "styled-components"
import fotosPopulares from "./fotos-populares.json"
import Titulo from "../../Titulo"

const ContainerPopulares = styled.div`
  display: flex;
  flex-direction:column;
  gap:1rem;
    & img{
      width: 212px;
      border-radius: .5rem;
    }
`

const Populares  =  () => {
  return (
    <div>
      <Titulo>populares</Titulo>
      <ContainerPopulares>
          {fotosPopulares.map(foto => <img src={foto.path} alt={foto.alt} key={foto.id} />)}
      </ContainerPopulares>
    </div>
   
  )
}

export default Populares