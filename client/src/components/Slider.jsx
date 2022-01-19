import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";

import { useState,useEffect } from "react";
import { publicRequest } from "../requestMethod";
import { Link } from "react-router-dom";
const Container = styled.div`
padding-top: 40px;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media (max-width: 380px) {
  display: none;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition:all 1s ease;
  transform: translateX(${props=>props.slideindex*-100}vw);
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.4;
  z-index: 2;
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  margin: 50px 0px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  margin: 0px 20px;
  background-color: transparent;
`;
function Slider() {

const [sliderItems, setsliderProducts] = useState([]);
useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await publicRequest.get("products");
      console.log(res.data);
      setsliderProducts(res.data);
    } catch (error) {}
  };
  getProducts();
  return () => {};
}, []);

  const [slideIndex, setSlideIndex] = React.useState(0);
    const handleClick = (direction) => {
      
        if (direction === 'left') {
            setSlideIndex(slideIndex>0?slideIndex-1:4)
        }
        else {
            setSlideIndex(slideIndex<4 ?slideIndex+1:0)
        }
  };
  return (
    <div>
      <Container>
        <Arrow
          direction="left"
          onClick={() => {
            handleClick("left");
          }}
        >
          <ArrowBackIcon />
        </Arrow>
        <Wrapper slideindex={slideIndex}>
          {sliderItems.map((item) => {
            return (
              <Slide key={item._id}>
                <ImgContainer>
                  <Img src={item.img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Link to={'/product/'+item._id}>
                  <Button>Buy NOW</Button>
                  </Link>
                </InfoContainer>
              </Slide>
            );
          })}
        </Wrapper>
        <Arrow
          direction="right"
          onClick={() => {
            handleClick("right");
          }}
        >
          <ArrowForwardIcon />
        </Arrow>
      </Container>
    </div>
  );
}

export default Slider;
