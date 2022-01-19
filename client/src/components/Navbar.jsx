import React,{useEffect,useState} from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const Container = styled.div`
  height: 60px;
  @media (max-width: 380px) {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 380px) {
    padding: 10px 0px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 380px) {
    justify-content: center;
    flex: 2;
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 380px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  border: 1px solid lightcyan;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  @media (max-width: 380px) {
    width: 50px;
  }
`;
const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 380px) {
    font-size: 24px;
  }
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 380px) {
    font-size: 12px;
    margin-left: 10px;
  }
`;
function Navbar() {
  let [disp,setdisp]=useState(true)
  const[em,setem]=useState('')

const auth = getAuth()
const user = auth.currentUser;

  const navigate=useNavigate()
   const handleLogout = () => {
     sessionStorage.removeItem("Auth Token");
     setdisp(true)
     navigate("/");
   };
    
   useEffect(() => {
     let authToken = sessionStorage.getItem("Auth Token");
     console.log(authToken);
     if (authToken) {

      setdisp(false)
      const auth = getAuth();
       setem(auth.currentUser.email);
     }

     if (!authToken) {
       setdisp(true)
     }
   }, [disp]);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="search" />
              <SearchIcon></SearchIcon>
            </SearchContainer>
          </Left>
          <Center>
            <Link to="/">

            <Logo>LadooShop...</Logo>
            </Link>
          </Center>
          <Right>{disp?( <>
          <Link to="/register"><MenuItem>Register</MenuItem></Link>
            <Link to='/login'>    <MenuItem>Login</MenuItem></Link>
            </>
            ):<MenuItem onClick={handleLogout}>Log out {em}</MenuItem>}
           
           
            <Link to='/cart'>

            <MenuItem>
              <Badge badgeContent={cart.quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Navbar;
