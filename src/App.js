import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import Cart from './components/Cart'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Products from './components/products'
import Menu from './Header/Menu'
import Pnf from './util/Pnf'

function App() {
  return (
    <Router>
      <Menu/>
      <ToastContainer autoClose={4000} position={'top-center'}/>
      <Routes>
        <Route path={`/`} element={<Home itemsPerpage={4}/>}/>
        <Route path={`/products/:catName`} element={<Products/>}/>
        <Route path={`/product/:id/category/:catname`} element={<ProductDetails/>}/>
        <Route path={`/cart`} element={<Cart/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}

export default App

