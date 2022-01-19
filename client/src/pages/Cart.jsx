import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import axios from "axios";
const { v4: uuidv4 } = require("uuid");

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Info = styled.div`
  flex: 3;
`;

const TopText = styled.h4`
  cursor: pointer;
  text-decoration: underline;
`;
const TopButton = styled.button`
  height: 40px;

  cursor: pointer;
  background-color: cyan;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid blanchedalmond;
  margin: 5px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductId = styled.span``;
const ProductName = styled.span``;

const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Amount = styled.span`
  width: 40px;
  border: 1px solid cyan;
  height: 30px;
  border-radius: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Productprice = styled.div`
  margin-top: 30px;
`;
const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1``;

const SummaryTotal = styled.div`
  margin: 30px 30px;
  font-weight: 900;
`;
const ChecoutButton = styled.button`
  width: 100%;
  height: 30px;
  color: white;
  background-color: black;
`;

function Cart() {
  const handleCheckout=()=>{

    axios
      .post(
        "https://ladooshop.herokuapp.com/api/checkout/create-checkout-session",
        { ...cart }
      )
      .then((response) => {
        window.location = response.data;
      });
  }
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopText>Your Bag ({cart.quantity})</TopText>
          <TopText>Your Wishlist ({cart.quantity})</TopText>
          <TopButton>Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => {
              {
                console.log(product.img);
              }
              return (
                <Product key={uuidv4()}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>Product:{product.title}</ProductName>
                      <ProductId>ID:{product._id}</ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <AmountContainer>
                      <RemoveIcon />
                      <Amount>{product.quantity} Kg</Amount>
                      <AddIcon />
                    </AmountContainer>
                    <Productprice>₹ {product.price}</Productprice>
                  </PriceDetail>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>

            <SummaryTotal>Total: ₹ {cart.total}</SummaryTotal>
            <ChecoutButton onClick={handleCheckout}>Checkout Now</ChecoutButton>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Cart;
