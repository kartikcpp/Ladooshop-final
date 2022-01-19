import React,{useEffect, useState} from "react";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethod";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 380px) {
  flex-direction: column;
  padding: 20px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 75vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.div`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
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
const Button = styled.button`
  padding: 15px;
  border: 1px solid cyan;
  background-color: white;
  cursor: pointer;
`;
function Product() {
   const dispatch = useDispatch()
  const [quantity,setquantity]=useState(1);
  const[product,setProduct]=useState({})
  const id=useLocation().pathname.split('/')[2];
  console.log(id)
  useEffect(()=>{
    const getProduct=async()=>{
      const res=await publicRequest.get('products/find/'+id)
      setProduct(res.data)
      console.log(res.data)
    }
    getProduct()
  },[id])

  const handlequantity=(type)=>{
    if(type==='inc')setquantity(quantity+1)
    else{
      if(quantity>1){  
      setquantity(quantity-1)}

    }
  }

  const handleClick=()=>{
    dispatch(addProduct({...product,quantity,price:product.price*quantity}))
  }
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImageContainer>
          <Image src={product.img}></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Description>{product.desc}</Description>
          <Price>₹ {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={() => handlequantity("dec")} />
              <Amount>{quantity} Kg</Amount>
              <AddIcon onClick={() => handlequantity("inc")} />
            </AmountContainer>
            <Button onClick={handleClick}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
    </Container>
  );
}

export default Product;
