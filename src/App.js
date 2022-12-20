
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Main from "./components/Main"
import AllProducts from './pages/AllProducts'
import SingleUser from "./components/SingleUser"
import './app.css';
import SingleProduct from './pages/SingleProduct';
import CartProducts from './pages/CartProducts';

const App = () => {
  return (
    <BrowserRouter>
      <Header hello='header' />

      <Routes>
        <Route element={<Main />} path="/" />
        {/* <Route element={<Repos />} path="/repos/:user" /> */}
        <Route element={<SingleUser />} path="/:user" />
        <Route element={<AllProducts />} path='/products' />
        <Route element={<SingleProduct />} path='/products/:id' />
        <Route element={<CartProducts />} path='/cart' />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
