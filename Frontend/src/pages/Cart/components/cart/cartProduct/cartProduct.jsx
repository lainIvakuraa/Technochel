import React from 'react';
import s from './cartProduct.module.css'
const CartProduct = ({canDelete}) => {
    return (
        <div className={`${s.cart_product_block} flex  justify-between mb-[19px]	 `}>
            <div className='flex '>
                <div className={`${s.cart_product_image}`}>
                    <img src="/img/big-3196740971-4.png" alt="" />
                </div>
                <div className={`${s.cart_product_title}`}>
                    <p>Холодильник LG-frost2281337</p>
                    <a href="#" className=' text-start'>Страница товара</a>
                </div>
            </div>
            <div className={`${s.cart_product_price}`}>
                <p className={`${s.price}`}>Цена: 29 999 ₽</p>
                <p className={`${s.count_price}`}>1 шт. x 29 999 ₽</p>
                {!canDelete ? 
                    <button className={`${s.cart_product_button}`}>Удалить из корзины</button> :
                     null
                }
            </div>
        </div>
    );
}

export default CartProduct;
