
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../store'
import "./singleProduct.css"
const SingleProduct = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const dispatch = useDispatch()
  // const filteredProduct = data.find(p => p.id === id)
  // console.log(filteredProduct)
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(res.data)
    }
    fetchProduct()
  }, [id])
  console.log(product)
  const { title, price, category, description, image } = product
  return (
    <div className='big-div'>
      <div className='products-info'>
        <img src={image} alt={title} />
        <br />
        <hr />
        <h3>{title}</h3>
        <h4>Price: ${price}</h4>
        <h6>Manufacturer: {category}</h6>
        <br />
        <hr />
        <p>{description}</p>
        <br />
        <p>Rating: {price}</p>
      </div>
      <button className='btn-cart' onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </div>
  )
}

export default SingleProduct


























