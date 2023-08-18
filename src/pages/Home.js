import React from 'react'
import Todo from '../Todo'
import ShoppingCart from '../Shoppingcart'
import '../style.css'

const Home = () => {
  return (
    <div className='home'>
      <h1>The Todo List and Shopping Cart are below :</h1>
      <div className='todo'>
        <Todo />
      </div>
      <div className='cart'>
        <ShoppingCart />
      </div>
      </div>
  )
}

export default Home;