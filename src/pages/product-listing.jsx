import styled from "styled-components";
import Card from '../components/product-card';
import { useProduct } from '../context/productContext';

const ProductListing = () => {

 const {data} = useProduct();

  const ProductListing = styled.div`
  margin: auto;
  `
  const AllProducts = styled.div`
  margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `
  return(
    <ProductListing>
      <h3>Products</h3>
      <AllProducts>
        {data.map((i)=>(
          <Card key={i.id} item={i}/>
        ))}
      </AllProducts>
    </ProductListing>
  )
}

export default ProductListing;