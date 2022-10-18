import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import { AuthContextProvider } from '../context/AuthContext';
import Category from '../pages/Category';
import CheckoutContacto from '../pages/CheckoutContact';
import CheckoutData from '../pages/CheckoutData';
import EditProduct from '../pages/EditProduct';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NewProduct from '../pages/NewProduct';
import NotFound from '../pages/NotFound';
import OrderDetail from '../pages/OrderDetail';
import Orders from '../pages/Orders';
import ProductDetail from '../pages/ProductDetail';
import Register from '../pages/Register';
import SuccessOrder from '../pages/SuccessOrder';
import '../styles/App.css';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/category' element={<Category/>} />
              <Route path='/productdetail' element={<ProductDetail />} />
              <Route path='/checkout-contacto' element={<CheckoutContacto/> } />
              <Route path='/checkout-direccion' element={<CheckoutData/>} />
              <Route path='/success-order' element={<SuccessOrder />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/order-detail' element={<OrderDetail />} />
              <Route path='/new-product' element={<NewProduct />} />
              <Route path='/edit-product' element={<EditProduct />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
