import React from 'react'
import CartProduct from '../cart/cartProduct/cartProduct'

function  Preview({handlePreview}) {
  return (
    <div className='lg:w-[1000px] w-[98vw]  mb-12 rounded-xl overflow-hidden  bg-white '>
        <div className="h-16 bg-[#4056A1] flex justify-center items-center">
         <h1 className=' text-white text-xl'>Ваш заказ:</h1>
        </div>
        <div className="flex flex-col px-8 border-slate-400  justify-center mt-2 ">
            <div className=" border-t border-slate-400">
                <CartProduct canDelete={true} />
            </div>
            <div className=" border-t border-slate-400">
                <CartProduct canDelete={true}/>
            </div>
            <div className=" border-y border-slate-400">
                <CartProduct canDelete={true}/>
            </div>
         </div>
         <div className="flex justify-center sm:px-12 px-2 py-4 text-[20px] md:text-[32px]">
            <h1 className='border-x sm:px-8 px-2  border-slate-400'>Скидка: 0%</h1>
            <h1 className='border-x sm:px-8 px-2 border-slate-400'>Доп услуги: 6500₽</h1>
            <h1 className='border-x sm:px-8 px-2 border-slate-400'>Скидка: 0%</h1>
         </div>
         <div className=" px-8">
            <div className="border  pb-6  p-5">
              <p className='md:text-[36px] text-[24px] text-start'>Выберите способ оплаты:</p>
              <div className="flex flex-col  items-center md:flex-row gap-4 justify-between">
                <div className="md:w-[389px] flex-col sm:flex-row h-auto sm:w-2/4 sm:h-[97px] border-black 
                cursor-pointer items-center flex border">
                  <div className="flex border-black items-center justify-around h-full w-2/4 py-2 sm:py-0  sm:border-r px-6">
                    <img src="/img/card.png" alt="" />
                    <p className='text-[25px]'>Карта</p>
                  </div>
                  <img src="/img/group.png" alt="" className='md:w-[170px] h-[54px] md:ml-3'/>
                </div>
                <div className="md:w-[389px] sm:w-2/4 h-[97px] border-black cursor-pointer items-center justify-center flex border">
                  <img src="/img/webmoney.png" alt=""  className='md:w-auto w-[140px]'/>
                </div>
              </div>
              <div className="flex mt-4 flex-col items-center gap-4 md:flex-row md:mt-12 justify-between">
                <div className="md:w-[389px] sm:w-2/4 h-[97px] border-black cursor-pointer items-center justify-center flex border">
                  <img src="/img/qiwi.png" alt="" className='md:w-auto w-[140px]'/>
                </div>
                <div className="md:w-[389px] sm:w-2/4 h-[97px] border-black cursor-pointer items-center justify-center flex border">
                  <img src="/img/alpha.png" alt="" className='md:w-auto w-[140px]'/>
                </div>
              </div>
            </div>
            <div className='text-[24px] text-end'>
            Есть подарочный купон?
              <a href="" className='text-blue-600 ml-3'>Кликните здесь.</a>
            </div>
            <div className="flex flex-col sm:flex-row justify-center my-12 gap-2 sm:gap-12">
              <button
              onClick={() => handlePreview(0)}
              className="flex text-[20px] md:text-[28px] rounded-xl items-center 
              justify-center px-4 py-2 bg-[#F5EB0F] ">Вернутся в корзину</button>
              <button
              onClick={() => handlePreview(2)}
              className="flex text-[20px] md:text-[28px] rounded-xl items-center 
              justify-center px-4 py-2 bg-[#3DE55E] ">Перейти к оплате</button>
            </div>
            
         </div>
         <div className="bg-[#4056A1] h-8 w-full"></div>
    </div>

  )
}

export default  Preview