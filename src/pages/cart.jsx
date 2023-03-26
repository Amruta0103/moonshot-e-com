import styled from "styled-components";
import { useCart } from "../context/cartContext";
import plus from "../assets/plus-solid.svg";
import minus from '../assets/minus-solid.svg';

const Cart = () => {
  const {cartItem, setCartItem} = useCart()

  return(
    <CartBox>
      <h3>Cart</h3>
      {cartItem.length < 1 ? (
        <h4>OOPS!! Cart is Empty</h4>
      ):(
        <CartList>
        {cartItem.map((item) => (
        <Card key={item.id}>
          <CardImg src={item.image}/>
          <CardTitle>{item.title}</CardTitle>
          <CardInfo>{item.description}</CardInfo>
          <PriceRatingBox>
            <CardPrice>₹{item.price}</CardPrice>
            {/* <CardRating>{item.rating}</CardRating> */}
          </PriceRatingBox> 
        <ButtonsBox>
                <button className="reducer-btns"
                  onClick={()=>setCartItem((prevState) =>
                    prevState.map((items) =>
                      items.id === item.id
                        ? { ...items, quantity: item.quantity + 1 }
                        : items
                    ))}
                >
                  <img style={{height: "15px"}} src={plus} alt="plus"></img>
                </button>
                <h5 style={{marginBlockStart: "0px", marginBlockEnd: "0", width: "1rem"}}>{item.quantity}</h5>
                <button
                  className= "reducer-btns"
                  onClick={() => setCartItem((prevState) =>
                    prevState.map((items) =>
                      items.id === item.id
                        ? { ...items, quantity: item.quantity - 1 }
                        : items
                    ))
                  }
                  disabled = {item.quantity === 1 ? true : false}
                >
                  <img style={{height: "15px"}} src={minus} alt="trash/minus"></img>
                </button>
              </ButtonsBox>
        </Card>
        ))}
        </CartList>
      )
      }
    </CartBox>
  )
}

const CartBox = styled.div`
  margin:auto
  `
  const CartList = styled.div`
  margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `
  const Card = styled.div`
  position: relative;
  height: 290px;
  width: 150px;
  margin: 3rem;
  padding: 0.5rem;
  text-align: center;
  font-size: 18px;
  `
  const CardImg = styled.img`
  width: 140px;
  height: 150px;
  margin: 0.5rem;
  `
  const CardTitle = styled.div`
  text-align: center;
  max-width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  ` 
  const CardInfo = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  `
  const PriceRatingBox = styled.div`
  display: flex;
  `
  // const CardRating = styled.div`
  // margin: auto;
  // `
  const CardPrice = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 22px;
  `
  const ButtonsBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  `
export default Cart;
