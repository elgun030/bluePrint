import React from 'react'

import Tshirt from '../images/t-shirt.png'

//hooks
import { useState } from'react'

import { useDispatch } from 'react-redux'

//actions
import { removeFromCart, changeAmount } from './slices/cart.slice'





const CartItem = ({cartItem}) => {
    const [count, setCount] = useState(cartItem.quantity);
  console.log(count)
const dispatch = useDispatch ()

    const incrementHandler = () => {
        const newQuantity = +count + 1
          
          setCount(newQuantity);
          dispatch(changeAmount({cartItem, newQuantity}))
        
      };
      const decrementHandler = () => {
        const newQuantity =  +count - 1
        setCount(newQuantity)
        dispatch(changeAmount({cartItem, newQuantity}))
      };
      
      const changeCount = (e) => {
        const newQuantity = +e.target.value
        setCount(newQuantity)
        dispatch(changeAmount({cartItem, newQuantity}))

      }
      
const removeFromCartHandler = () => {
    dispatch (removeFromCart(cartItem))
}
console.log(count)
  return (
    <div className="flex gap-5 h-96 min-w-fit">
      <div className="border border-neutral-200 rounded-lg">
        <img src={cartItem.product.image} alt="T-shirt" className="h-full" />
      </div>
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-bold">{cartItem.product.name}</h3>
          <h4 className="font-bold text-neutral-500">{cartItem.product.category.replaceAll("_", " & ")}</h4>
        </div>
        <div className="flex gap-5">
          <div
            className="h-8 w-8 border flex items-center justify-center rounded-full cursor-pointer "
            style={{backgroundColor: `#${cartItem.product.color}`}}
          ></div>
          <div
            className="font-bold bg-[#1D1D1D] uppercase text-white w-9 h-9 flex items-center justify-center rounded-lg"
          >
            {cartItem.size}
          </div>
        </div>
        <div>
       {cartItem.quantity > 1 ? (<span className="font-medium text-xl">
            {cartItem.quantity} x {cartItem.product.price}AZN | <span className="font-black">{(cartItem.quantity * cartItem.product.price).toFixed(2)} AZN</span>
          </span>) :
          (<span className="font-medium text-xl">
            {cartItem.product.price} AZN 
          </span>)}
        </div>
        <div>
          <div className="flex items-center gap-6 font-black mb-8">
            <button onClick={decrementHandler} className="text-3xl">-</button>
            <input
            onChange={changeCount}
              type="number"
              min="1"
              max="100"
              className="border h-14 text-2xl text-center rounded-md"
              value={count}
            />
            <button onClick={incrementHandler} className="text-3xl">+</button>
          </div> 
          <button onClick={removeFromCartHandler}
            className="flex items-center justify-between rounded-lg font-black uppercase text-white bg-black text-medium px-4 py-3 w-72"
          >
            Remove
             
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem