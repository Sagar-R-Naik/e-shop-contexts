import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ProductCard from '../Helper/ProductCard'

const url = "https://dummyjson.com"

function Products() {

  const [product,SetProduct] = useState([])
  const params = useParams()

  const getProduct = async () => {
    const res = await axios.get(`${url}/products/category/${params.catName}`)
    console.log('category based products = ',res)
    SetProduct(res.data.products)
  }

  useEffect(() => {
    getProduct()
  },[])
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-success">Products</h3>
        </div>
      </div>
      <div className="row">
        {
          product.map((item,index) => {
            return <ProductCard key={index} {...item} />
          })
        }
      </div>
    </div>
  )
}

export default Products