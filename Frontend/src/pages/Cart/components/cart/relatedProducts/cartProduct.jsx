import React from 'react';
import s from './cartRelatedProduct.module.css'
const CartRelatedProduct = () => {
    return (
        <div className={`${s.cart_product_block} flex justify-between mb-[3px]	 `}>
            <div className='flex '>
                <div className={`${s.cart_product_image} `}>
                    <img src="/img/big-3196740971-4.png" alt="" />
                </div>
                <div className={`${s.cart_product_title} text-start `}>
                    <p className='text-start'>Холодильник LG-frost2281337</p>
                    <a href="#">Страница товара</a>
                </div>
            </div>
           <div className='flex flex-col md:flex-row'>
           <div className={`${s.cart_product_price}`}>
                <p className={`${s.price}`}>Цена: 29 999 ₽</p>
                <p className={`${s.count_price}`}>1 шт. x 29 999 ₽</p>
            </div>
            <button className={`${s.cart_product_button}`}>+
            </button>
           </div>
        </div>
    );
}

export default CartRelatedProduct;
