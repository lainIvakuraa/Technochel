import React, {useState} from "react";

const AddService = ({price, service}) => {
    const [checked, setChecked] = useState(false)

    return (
      <li className='mt-[22px] md:w-auto w-full sm:w-[400px] md:ml-[30px] ml-[10px] flex justify-around cursor-pointer'
      onClick={() => setChecked(!checked)}
      >
      <input type='checkbox' 
      className='w-[25px] h-[26px] bg-white border border-[#D9D9D9]
        border-[5px]'
        checked={checked}
      />
      <div className='title_garant'>{service}</div>
      <p className='title_garant'>+ {price}₽</p>
    </li>
    ) 
  }


  export default AddService;