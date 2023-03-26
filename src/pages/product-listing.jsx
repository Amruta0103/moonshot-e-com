import styled from "styled-components";
import Card from '../components/product-card';
import { useProduct } from '../context/productContext';
import { useState } from "react";

const ProductListing = () => {
  let array = [];
  let newArr = [];
  let val;
  const [search, setSearch] = useState();
  const {data} = useProduct();

  const searchValue = (e) => {
    console.log(e.target.value);
    val=e.target.value;
  }
  console.log("searchValue:- ", searchValue)

  const searching = () => {
    setSearch(val);
    array = (data.map((items) => 
    (items.title.toLowerCase().toString().includes(val.toLowerCase().toString())) === true ? 
    (items.id) : "false" ))
    array.map((i) => i !== "false" ? newArr.push(i) : console.log(i));
    console.log("prolly final", newArr.map(k => k));
  }

  // console.log(naya)

  const ProductListing = styled.div`
  margin: auto;
  `
  
  return(
    <ProductListing>
      <h3>Products</h3>
      <ProductSearch placeholder="Search Products" onChange={(e) => searchValue(e)}/>
      <button onClick={() => searching()}>Search</button>
      {search}
      <AllProducts>
        {data.map((i)=>(
          <Card key={i.id} item={i}/>
        ))}
      </AllProducts>
    </ProductListing>
  )
}

const AllProducts = styled.div`
  margin:auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  `
const ProductSearch = styled.input`
  width: 25rem;
  height: 2.5rem;
  border: 1px solid black;
  border-radius: 2rem;
`
export default ProductListing;
