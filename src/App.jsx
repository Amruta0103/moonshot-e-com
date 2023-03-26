import './App.css';
import {Route, Routes} from "react-router-dom";
import NavBar from './components/navbar';
import Cart from './pages/cart';
import ProductListing from './pages/product-listing';
import Home from './pages/home';
import ProductPage from './pages/product-page';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<ProductListing />}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/productpage/:id' element={<ProductPage/>} />
      </Routes>
    </div>
  );
}

export default App;
