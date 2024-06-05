import styled from "styled-components";


const ItemStyled = styled.li`
    font-size:1.5rem;
    margin-bottom: 1.8rem;
    line-height: 1.7rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.$activo ? "#7B78E5" : "#D9D9D9"} ;
    font-family:${ props => props.$activo ? "GandiSansBold" : "GandiSansRegular" };
`

const ItemNavegacion = ({children,iconoActivo,iconoInactivo,activo=false}) => {
  return (
    <ItemStyled $activo={activo}>
    <img src={activo ? iconoActivo : iconoInactivo} alt="Icono"/>
    {children}
    </ItemStyled>
  )
}

export default ItemNavegacion;