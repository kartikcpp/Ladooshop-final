import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
const Container = styled.div``;
const Filter=styled.div`
    margin:20px;
    font-size: 20px;
`
const Title = styled.h1`
  margin: 20px;
`;
const Select=styled.select`
margin-left: 20px;
padding:10px;
    
`
const Option=styled.option``
function ProductList() {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Title>Ladoo</Title>
      <Filter>
        Filter Products:
        <Select>
          <Option>atta</Option>
          <Option>besan</Option>
          <Option>maida</Option>
          <Option>boondi</Option>
          <Option>dalda</Option>
        </Select>
      </Filter>
      <Products />
      <Newsletter/>
    </Container>
  );
}

export default ProductList;
