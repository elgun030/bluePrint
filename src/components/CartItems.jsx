import React from 'react'
import CartItem from "../components/CartItem"

//hooks
import { useSelector } from 'react-redux'

const CartItems = () => {
const cartItems = useSelector((state) => state.cart)

  return (
    <div
    id="cartList"
    className="border-y border-neutral-100 pt-10 pb-20 flex overflow-x-scroll gap-20"
  >
{cartItems.map((cartItem, index) => 
<CartItem key={index} cartItem={cartItem} />)}   
  </div>
  )
}

export default CartItems