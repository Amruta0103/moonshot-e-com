import styled from "styled-components"
import { Link } from 'react-router-dom';
import { useCart } from "../context/cartContext";

const NavBar = () => {
  const { cartItem } = useCart()
  
  const NavBar = styled.div`
  display: flex;
  margin: auto;
  background-color: #00ffc0;
  height: 4rem;
  justify-content: center;
  align-items: center;
  `
  const NavBarOptions = styled.div`
  margin: auto 1rem;
  width: 7rem;
  text-align: center;
  padding: 0.5rem;
  `
  return(
    <NavBar>
      <Link to="/" style={{"color":"inherit","textDecoration": "none"}}>
        <NavBarOptions>Home</NavBarOptions>  
      </Link>
      <Link to="/products" style={{"color":"inherit","textDecoration": "none"}}>
        <NavBarOptions>Products</NavBarOptions>  
      </Link>
      <Link to="/cart" style={{"color":"inherit","textDecoration": "none"}}>
        <NavBarOptions>Cart/{cartItem.length}</NavBarOptions>
      </Link>
    </NavBar>
  )
}

export default NavBar;