import styled from "styled-components"
import { useCart } from "../context/cartContext"
import { Link } from "react-router-dom";

const Card = ({item}) => {
  const {cartItem, setCartItem} = useCart();

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
  const CardBtn = styled.button`
  height: 2rem;
  width: 150px;
  background: #33ff99;
  border: 1px solid #33ff99;
  border-radius: 2rem;
  `
  return(
    <Link to={`/productpage/${item.id}`} item={item}>
      <Card key={item.id}>
        <CardImg src={item.image}/>
        <CardTitle>{item.title}</CardTitle>
        <CardInfo>{item.description}</CardInfo>
        <PriceRatingBox>
          <CardPrice>₹{item.price}</CardPrice>
          <CardRating>{item.rating.rate}/{item.rating.count}</CardRating>
        </PriceRatingBox>
        <Link to={cartItem.find((items) => items.id === item.id) ? "/cart" :"/products"}>
          <CardBtn
          onClick={cartItem.find((items) => items.id === item.id) ? () => !setCartItem : () => setCartItem((items)=> [...items, item])}
          >
            {cartItem.find((items) => items.id === item.id) ? 'Go to Cart' : 'Add to Cart'}
          </CardBtn>
          </Link>
      </Card>
    </Link> 
  )
}

export default Card;