import styled from 'styled-components'
import tags from './tags.json'


const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-top: 2rem;
`

const DivTags = styled.div`
display: flex;
    align-items: center;
    gap: 1.5rem;
`

const TagStyled = styled.button`
    display: inline-block;
    border-radius: .7rem;
    padding: .6rem .5rem;
    background-color: #d9d9d95a;
    color: #D9D9D9;
    border: 2px solid #d9d9d95a ;
    &:hover{
      border: 2px solid #C98CF1;
      cursor: pointer;
    }
`

const   TextStyled = styled.p`
    color: #D9D9D9;
    font-size: 1.2rem;
`

const Tag = ({filtrarTag}) => {
  return (
    <TagsContainer>
      <TextStyled> Buscar por tags: </TextStyled>
      <DivTags>
         {tags.map (tag => <TagStyled key={tag.id} onClick={() => filtrarTag(tag.id)}> {tag.titulo} </TagStyled>)}
      </DivTags>
    </TagsContainer>
      
  )
}
export default Tag