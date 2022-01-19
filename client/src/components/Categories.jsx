import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 380px) {
  flex-direction: column;
  }
`;
function Categories() {
    return (
        <div>
            <Container>
                {categories.map(item => {
                    return (<CategoryItem item={item} key={ item.id}/>)
                })}
            </Container>
            
        </div>
    )
}

export default Categories
