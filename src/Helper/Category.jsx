import React from 'react'
import { NavLink } from 'react-router-dom'


function Category(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-2 mb-2">
      <div className="card">
        <div className="card-body bg-success text-white text-wrap text-capitalize">
          <NavLink to={`/products/${props.value}`} className="btn">{props.value}</NavLink>
        </div>
      </div>
    </div>  
  )
}

export default Category
