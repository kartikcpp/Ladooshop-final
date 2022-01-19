import React,{useEffect,useState} from 'react'

import Product from './Product';
import styled from 'styled-components';
import axios from 'axios';
import { publicRequest } from '../requestMethod';
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 380px) {
  justify-content: center;
  
  }
`;

function Products() {
    const [popularProducts,setpopularProducts]=useState([])
    useEffect(() => {
        const getProducts=async()=>{
            try {
                const res=await publicRequest.get("products")
                console.log(res.data)
                setpopularProducts(res.data);
            } catch (error) {
                
            }

    }
    getProducts()
        return () => {
            
        }
    }, [])
    
    return (
        
            <Container>
                {popularProducts.map(item => {
                    return(<Product key={item._id} item={item}/>)
        })}
            </Container>
        
    )
}

export default Products
