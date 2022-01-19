import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  padding: 40px;
  width: 40%;
  @media (max-width: 380px) {
    width: 100%;
    padding: 20px;
  }
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
  width: 100%;
  background-color: cyan;
`;

function Register() {
  const navigate=useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();

    if (confirmpassword !== password) {
      alert("password not match");
      return;
    } else {
      const authentication = getAuth();
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          navigate("/");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        })

        .catch((err) => {
          alert(err.toString());
        });
    }
  };
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/");
    }
  }, []);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirm] = useState("");
  return (
    <Container>
      <Wrapper>
        <Title>Create An Account</Title>
        <Form>
          <Input
            placeholder="email"
            value={email}
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <Input
            placeholder="confirm password"
            type="password"
            value={confirmpassword}
            onChange={(e) => {
              setconfirm(e.target.value);
            }}
          />

          <Button onClick={handleRegister}>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
