import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 50vh;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: 380px) {
    height: 50vh;
  }
`;
const Title = styled.h1`
  color: white;
  margin-top: 20px;
`;
const Button = styled.button`
  cursor: pointer;
  background-color: white;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
`;
function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.image} />
        <Info>
          <Title>{item.title}</Title>
          <Button>BUY NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
