import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    height:30px;
    background-color: lightgreen;
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    
`

function Announcement() {
    return (
        
            <Container>
                Announcement flat 40% OFF!!!!!!!!!!!
            </Container>
            
        )
}

export default Announcement
