import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../ProductContext'

function ProductCard(props) {
  const context = useContext(ProductContext)
  const addToCart = context.productsApi.addToCart

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 mt-2 mb-2 '>
      <div className="card">
        <img src={props.thumbnail} alt="no image" width={200} height={200} className="card-img-top"/>
        <div className="card-body text-center">
          <h6 className='text-success text-capitalize'>{props.title}</h6>
          <p className="text-center text-success text-capitalize"> &#8377; {props.price}</p>
          <details>
            <summary className='text-primary'>Product details</summary>
            <p className='text-justify text-secondary card-text'>{props.description}</p>
          </details>
        </div>
        <div className="card-footer">
          <NavLink to={`/product/${props.id}/category/${props.category}`} className="btn btn-sm btn-outline-primary" title='product details'>
            <i className="bi bi-info-circle-fill"></i>
          </NavLink>

          <button onClick={() => addToCart(props)} className='btn btn-outline-success btn-sm float-end' title='Add to Cart'>
            <i className='bi bi-cart'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
