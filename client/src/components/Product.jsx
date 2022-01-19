import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import React from "react";
import styled from "styled-components";
import Heart from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin:10px;
  transition: all 0.5s ease;

  &:hover{
      background-color: gray;
      transform: scale(1.3);
  }
`;
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;
const Container = styled.div`
flex :1;
margin:5px;
min-width: 280px;
height:200px;
display:flex;
justify-content: center;
align-items: center;
position: relative;

`
const Image = styled.img`
height:100%;
width:100%;
object-fit:cover`;
function Product({ item }) {
  return (
    <div>
      <Container>
              <Image src={item.img}/>
        <Info>
          <Icon>
            <ShoppingCart />
          </Icon>
          <Link to={`/product/${item._id}`}>
            
          <Icon>
            <Search />
          </Icon>
          </Link>
          <Icon>
            <Heart />
          </Icon>
        </Info>
      </Container>
    </div>
  );
}

export default Product;
