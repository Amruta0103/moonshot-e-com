import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useProduct } from '../context/productContext';
import backArrow from "../assets/arrow-left-solid.svg";
import { useNavigate } from 'react-router-dom';

const ProductPage = () =>{
  const navigate = useNavigate();

  const {id} = useParams()
  const { data } = useProduct()
  console.log("this is item", id)
  const newId = +id - 1;
  const item = data[newId];
  return(
    <ProductPageBlock>
      <Return onClick={() => navigate(-1)} src={backArrow}/>
      <ProdImage src={item.image} />
      <ProdInfo>
        <ProdTitle>{item.title}</ProdTitle>
        <ProdDescription>{item.description}</ProdDescription>
        <ProdPrice>₹{item.price}</ProdPrice>
      </ProdInfo>
    </ProductPageBlock>
  )
}

const Return = styled.img`
position: absolute;
left: 2rem;
top: 5rem;
width: 25px;
height: 25px;
padding: 1rem;
background: #bcc4cc;
border-radius: 3rem;
`
const ProductPageBlock = styled.div`
display: flex;
width: 70%;
margin: 5rem auto;
justify-content: center;
align-items: center;
`
const ProdImage = styled.img`
height: 350px;
width: 350px;
`
const ProdInfo = styled.div`
width: 70%;
margin: 1rem;
`
const ProdTitle = styled.div`
text-align: center;
margin: auto;
font-size: 2rem;
font-weight: 700;
`
const ProdDescription = styled.div`
text-align: center;
color: #546270;
margin: 1rem;
font-size: 18px;
`
const ProdPrice = styled.div`
font-size: 2rem;
font-weight: 600;
text-align: center;
` 
export default ProductPage;