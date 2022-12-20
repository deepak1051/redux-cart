import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import './cartProducts.css'
import { addToCart, removeToCart, resetCart } from '../store/index'

const CartProducts = () => {
  const { data } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  console.log(data)

  let totalAmount = 0
  for (let el of data) {
    totalAmount += el.totalPrice
  }

  const handleCheckout = () => {
    alert('thanks for shopping...')
    dispatch(resetCart())
  }
  return (
    <div>

      {data.length === 0 && <h1 style={{ fontSize: '1.3rem', textAlign: 'center', marginTop: '1rem' }}>your cart is empty select some products <Link to='/products'>here</Link></h1>}
      <div className='cart_container'>
        <div className='cart_product'>
          {data.map(p => {
            return <div key={p.id} className='cart_product-card'>
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              {/* <p>{p.description.substring(0, 50)}...</p> */}
              <p>price per unit: ${p.price.toFixed(2)} </p>
              <div>
                <button onClick={() => dispatch(removeToCart(p))}>-</button>
                <span>{p.quantity}</span>
                <button onClick={() => dispatch(addToCart(p))}>+</button>
              </div>
              <p>totalPrice: ${p.totalPrice.toFixed(2)}</p>
            </div>
          })}
        </div>
        {!!totalAmount && <div className='checkout_card'>
          <h2>Total Amount</h2>
          <p>Amount {totalAmount.toFixed(2)}</p>
          <button onClick={handleCheckout}>place order</button>
        </div>}
      </div>
    </div>
  )
}

export default CartProducts