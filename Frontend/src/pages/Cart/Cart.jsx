import './Cart.css';
import { Header } from './components/Header';
import CartProduct from './components/cart/cartProduct/cartProduct';
import CartRelatedProduct from './components/cart/relatedProducts/cartProduct';
import AddService from './components/Misc/AddService';
import Preview from './components/Payment/Preview';
import { useState } from 'react';
import Confirm from './components/Payment/Confirm';

const Cart = () => {
  return (
    <>
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </>
  )
};

export default Cart;

