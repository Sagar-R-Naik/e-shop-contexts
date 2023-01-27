import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'

function Menu() {
  const context = useContext(ProductContext)
  const [cart] = context.productsApi.cart
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-warning'>
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">E-SHOP</NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="menu">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/`} className="nav-link">  <i className="bi bi-house"></i>  Home</NavLink>
                </li>
            </ul>

            <ul className="navbar-nav">
                <li className="nav-item">
                   <NavLink to={`/cart`}  className="nav-link">
                        <i className="bi bi-cart"></i> Cart
                        <span className="badge text-bg-dark ms-2">
                          {cart.length > 0 ? cart.length : 0}
                        </span>
                   </NavLink>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
