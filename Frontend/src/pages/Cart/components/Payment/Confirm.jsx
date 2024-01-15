import React from 'react'
import CartProduct from '../cart/cartProduct/cartProduct'

function  Confirm({handlePreview}) {
  return (
    <div className='lg:w-[1000px] w-[98vw]  mb-12 rounded-xl overflow-hidden  bg-white '>
        <div className="h-16 bg-[#4056A1] flex justify-center items-center">
         <h1 className=' text-white text-xl'>Заказ успешно оформлен</h1>
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
         <div className="flex flex-col sm:flex-row sm:text-center gap-2 sm:gap-0 justify-center
          lg:px-12 px-8 py-4  text-[16px] md:text-[20px]">
            <div className=" border-r-2 lg:px-6 px-2 ">
                <span>Номер заказа:</span> <br />
                <span className='text-[#696969]'>Q75UG297</span>
            </div>
            <div className=" border-r-2 lg:px-6 px-2">
                <span>Дата оформления:</span> <br />
                <span className='text-[#696969]'>24.09.23</span>
            </div>
            <div className="border-r-2 lg:px-8 px-2">
                <span>Итого:</span> <br />
                <span className='text-[#696969]'>56 497₽</span>
            </div>
            <div className=" lg:px-6 px-2">
                <span>Способ оплаты:</span> <br />
                <span className='text-[#696969]'>Банковская карта Visa</span>
            </div>
            
         </div>
         <div className="flex flex-col items-center px-8">
            
            <div className='sm:text-[20px] text-[12px] text-[#908A8A] sm:mt-6 border-t-2 w-full lg:w-[700px] text-center'>
            Ваш заказ принят, ожидайте его подтверждения. Информацию по заказу вы можете найти в разделе “история заказов”.
            </div>
            <div className="flex flex-col sm:flex-row justify-center my-3 sm:my-12 gap-2 sm:gap-12">
              
              <button
              onClick={() => handlePreview(0)}
              className="flex text-[20px] md:text-[28px] rounded-xl items-center 
              justify-center px-4 py-2 bg-[#3DE55E] ">История заказов</button>
            </div>
            
         </div>
         <div className="bg-[#4056A1] h-8 w-full"></div>
    </div>

  )
}

export default Confirm;