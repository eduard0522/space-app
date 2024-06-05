import styled from "styled-components";

const Titulo = styled.h2`
margin: 1.5rem 0;
    font-size: 2rem;
    color: #7B78E5;
    text-align: ${props => props.$align ? props.$align : "left"};
`

export default Titulo