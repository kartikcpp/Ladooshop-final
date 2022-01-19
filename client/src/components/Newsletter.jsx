import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import styled from 'styled-components';


const Container = styled.div`
height:50vh;
background-color:lavenderblush;
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
`;
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;`;
const Description = styled.div`
font-size:24px;
margin-bottom:20px;`;
const InputContainer = styled.div`
width:50%;
height:40px;
background-color: white;
display: flex;
justify-content: space-between;
border:1px solid cyan;

`;
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
border:none;
background-color:cyan;
cursor:pointer`;
function Newsletter() {
    return (
        <div>
            <Container>
                <Title>Newsletter</Title>
                <Description>Get Timely updates from email</Description>
                <InputContainer>
                    <Input placeholder='Your Email' />
                    <Button>
                        <SendIcon/>
                    </Button>
                </InputContainer>
            </Container>
        </div>
    )
}

export default Newsletter
