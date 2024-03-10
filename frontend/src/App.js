import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Layout/NavBar';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Components/Categories';
import CategoryProduct from './Components/CategoryProduct';
import AllProducts from './Components/AllProducts';
import ProductDetail from './Components/ProductDetail';
function App() {
  return (
      <>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/allproducts' element={<AllProducts/>} />
          <Route path='category/:category_slug/:category_id' element={<CategoryProduct />} />
          <Route path='/product/:product_slug/:product_id' element={<ProductDetail/>} />
        </Routes>
        <NavBar />
        <Footer/>
        </BrowserRouter>
      </>  

)
};

export default App;
