import { useParams } from 'react-router-dom';
import { useProduct } from '../context/productContext';
const ProductPage = () =>{
  const {id} = useParams()
  const { data } = useProduct()
  console.log("this is item", id)
  // var temp = data.map(item =>item.id);
  // console.log("temporary",temp.find(item => item.id === id));
  // console.log(data)
  console.log(data[id])
  return(
    <div>
      {/* <h3>{item.title}</h3> */}
      <h3>Hi</h3>
      {/* <p>{item.description}</p> */}
      <p>description</p>
    </div>
  )
}

export default ProductPage;