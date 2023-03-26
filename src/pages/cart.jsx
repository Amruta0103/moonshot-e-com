import styled from "styled-components";
import { useCart } from "../context/cartContext";

const Cart = () => {
  const {cartItem} = useCart()
  console.log("ye hai cartItem", cartItem);
  const Cart = styled.div`
  margin:auto`

  const CartList = styled.div`
  margin: 5rem auto auto 5rem;
  display: flex;
  `
  const Card = styled.div`
  position: relative;
  height: 290px;
  width: 150px;
  margin: 1rem;
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
  const CardRating = styled.div`
  margin: auto;
  `
  const CardPrice = styled.div`
  text-align: left;
  font-weight: 600;
  font-size: 22px;
  `

  return(
    <Cart>
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
            <CardRating>{item.rating.rate}/{item.rating.count}</CardRating>
          </PriceRatingBox> 
        </Card>
        ))}
        </CartList>
      )
      }
    </Cart>
  )
}

export default Cart;
