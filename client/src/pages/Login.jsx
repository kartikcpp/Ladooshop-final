import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 50px;
  width: 40%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1``;
const Input = styled.input`
  margin-top: 20px;
  height: 40px;
  padding-left: 10px;
`;
const Button = styled.button`
  margin-top: 20px;
  height: 40px;
  padding-left: 20px;
  width: 30%;
  background-color: cyan;
  @media (max-width: 380px) {
  width:100%;
  }
`;
const Linkdesign=styled.a`
margin-top:20px;
text-decoration:underline;
cursor:pointer;`;

function Login() {
  const navigate=useNavigate()
  const authentication=getAuth()
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, []);
  const handleLogin=(e)=>{
 e.preventDefault();

   signInWithEmailAndPassword(authentication, email, password).then(
     (response) => {
       navigate("/home");
       sessionStorage.setItem(
         "Auth Token",
         response._tokenResponse.refreshToken
       );
     }
   );
  }

  const [email,setemail]=useState("")
  const[password,setpassword]=useState('')
    return (
      <Container>
        <Wrapper>
          <Title>Log In </Title>
          <Form>
            
                        
            <Input placeholder="email" value={email} onChange={(e)=>{setemail(e.target.value)}} />
            <Input placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            
            <Button onClick={handleLogin}>Log In</Button>
            <Linkdesign>Create an Account</Linkdesign>
          </Form>
        </Wrapper>
      </Container>
    );
}

export default Login
