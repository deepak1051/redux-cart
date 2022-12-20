import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store'
import './allProducts.css'
const AllProducts = () => {
  const [data, setData] = useState([])
  const [clone, setClone] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)
      setClone(res.data)
    }
    fetchProducts()
  }, [])
  const handleFilter = (category) => {
    const filteredProducts = clone.filter(p => p.category === category)
    setData(filteredProducts)
  }

  const handleClick = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div>
      <h1>All Products</h1>
      <button onClick={() => setData(clone)}>All</button>
      <button onClick={() => handleFilter("men's clothing")}>men</button>
      <button onClick={() => handleFilter("women's clothing")}>women</button>
      <button onClick={() => handleFilter("electronics")}>electronics</button>
      <button onClick={() => handleFilter("jewelery")}>jewelery</button>
      <ul className='product_container'>
        {data.map(product => {
          return <div key={product.id} className='product_card'>

            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            {/* </Link> */}
            <div className='button_container'>
              <button onClick={() => handleClick(product)} className='btn-1'>add to cart</button>
              <Link to={`/products/${product.id}`}> <button className='btn-2'>details</button></Link>
            </div>
          </div>
        })}
      </ul>
    </div>
  )
}

export default AllProducts
