import styled from "styled-components";
import search from "./search.png";
import { useContext } from "react";
import { GlobalContext } from "../Context";

const ContainerStyled = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyled = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 556px;
    font-size: 20px;
    color: #d9d9d9;
    font-weight: 400;
    line-height: 20px;
    outline: none;
`

const  IconSearchStyled = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    max-width: 38px;
    height: 38px;
`


const InputText = () => {
  const {dispatch} = useContext(GlobalContext)

    return (
    <ContainerStyled > 
        <InputStyled type="text" placeholder="¿ Qué estás buscando ?"  onChange={(e) => dispatch({ type:"SET_FILTRAR_FOTOS", payload: e.target.value})}/> 
        <IconSearchStyled src={search}  alt="ícono de lupa"/>
    </ContainerStyled>

  )
}

export default InputText