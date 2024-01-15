import React from "react";
import s from './Header.module.css'
export const Header = () => {
  return (
    <div className=''>
      <div className={`xl:h-[166px] h-auto pb-3 ${s.header}`}>
        <div className="container mx-auto pt-[13px] flex justify-between">
          <div className='flex mt-2 md:mt-0'>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="32" viewBox="0 0 23 32" fill="none">
              <path d="M22 11.2792C22 14.2549 20.4752 18.3786 18.2531 22.2076C16.1978 25.7494 13.6707 28.8248 11.4979 30.3732C9.31338 28.839 6.78706 25.9131 4.74163 22.4708C2.5312 18.7509 1 14.6247 1 11.2792C1 7.91398 2.13649 5.37235 3.9574 3.66743C5.78776 1.95366 8.40167 1 11.5 1C17.5692 1 22 5.36996 22 11.2792Z" stroke="white" stroke-width="2" />
              <path d="M15.727 11.6011C15.727 13.9694 13.8261 15.8744 11.4997 15.8744C9.17332 15.8744 7.27246 13.9694 7.27246 11.6011C7.27246 9.23272 9.17332 7.32779 11.4997 7.32779C13.8261 7.32779 15.727 9.23272 15.727 11.6011Z" stroke="white" stroke-width="2" />
            </svg>
            <h3 className={`${s.header_location} ml-3`}>Хабаровск</h3>
          </div>
          <div className={`${s.header_phone}`}>
            8 800 555-35-35 (с 8:00 до 0:00)
          </div>
        </div>
        <div className={`container mx-auto mt-[17px]`}>
          <div className="flex lg:flex-row  flex-col">
            <div className="flex  justify-between  gap-[17px]  w-full">
              <div className="flex gap-1  md:gap-[5px] xl:gap-[17px]">
                <a href="#" className={`${s.header_techno_block} flex  `}>
                  <svg className={`md:pl-[8px] ${s.logo}`} xmlns="http://www.w3.org/2000/svg" width="62" height="67" viewBox="0 0 62 67" fill="none">
                    <path d="M36.0386 42.1211C29.2592 47.0995 22.5136 50.4694 17.1176 51.9226C14.4151 52.6504 12.1156 52.8798 10.3462 52.6372C8.57505 52.3943 7.47676 51.705 6.90889 50.7449C6.34102 49.7848 6.20563 48.3883 6.70382 46.479C7.20154 44.5715 8.29755 42.3075 9.96362 39.8273C13.2901 34.8752 18.7297 29.2971 25.509 24.3188C32.2884 19.3404 39.034 15.9705 44.43 14.5173C47.1325 13.7894 49.432 13.5601 51.2014 13.8027C52.9726 14.0455 54.0709 14.7349 54.6387 15.695C55.2066 16.6551 55.342 18.0515 54.8438 19.9609C54.3461 21.8684 53.2501 24.1324 51.584 26.6126C48.2575 31.5647 42.8179 37.1428 36.0386 42.1211Z" stroke="#F871FF" stroke-width="2.5" />
                    <path d="M36.2568 24.9727C43.0178 29.9823 48.4368 35.5855 51.745 40.553C53.4019 43.0409 54.4896 45.3101 54.9802 47.2199C55.4714 49.1317 55.3307 50.5271 54.7596 51.4841C54.1885 52.441 53.088 53.1253 51.3158 53.3601C49.5454 53.5946 47.2467 53.3546 44.5468 52.6143C39.1561 51.1362 32.4229 47.7352 25.6619 42.7256C18.901 37.716 13.482 32.1128 10.1738 27.1453C8.51683 24.6574 7.42918 22.3882 6.93851 20.4784C6.44737 18.5666 6.58808 17.1712 7.15919 16.2142C7.73031 15.2573 8.8308 14.573 10.6029 14.3382C12.3734 14.1037 14.672 14.3437 17.3719 15.084C22.7626 16.5621 29.4959 19.9631 36.2568 24.9727Z" stroke="#9857FF" stroke-width="2.5" />
                    <path d="M40.2649 33.1915C40.2649 42.2633 39.0751 50.4255 37.1845 56.2771C36.237 59.21 35.1354 61.4927 33.972 63.0159C32.7941 64.5578 31.7075 65.133 30.7911 65.133C29.8747 65.133 28.7881 64.5578 27.6103 63.0159C26.4468 61.4927 25.3453 59.21 24.3978 56.2771C22.5072 50.4255 21.3174 42.2633 21.3174 33.1915C21.3174 24.1197 22.5072 15.9575 24.3978 10.1059C25.3453 7.17308 26.4468 4.89032 27.6103 3.36717C28.7881 1.82524 29.8747 1.25003 30.7911 1.25003C31.7075 1.25003 32.7941 1.82524 33.972 3.36717C35.1354 4.89032 36.237 7.17308 37.1845 10.1059C39.0751 15.9575 40.2649 24.1197 40.2649 33.1915Z" stroke="#3822D6" stroke-width="2.5" />
                    <ellipse cx="30.7914" cy="33.1915" rx="3.57458" ry="3.98298" fill="#FFA9E0" />
                  </svg>
                  <p className={`${s.header_blosks} md:mr-0 mr-2`}>
                    Техночел
                  </p>
                </a>
                <a href="#" className={`${s.header_catalog_block}`}>
                  <p className={`${s.header_catalog}`}>Каталог</p>
                </a>
              </div>
              {/* создал 2 блока с поиском для улучшения адаптации */}
              {/* 1 */}
              <div className='relative hidden lg:flex'>
                <input placeholder="Поиск по сайту" type="text" className={`${s.header_input}`} />
                <svg className="absolute right-[30px] top-[11px] w-6 lg:w-auto xl:top-[22px]" xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path d="M25.413 11.84C25.413 17.7269 20.0534 22.68 13.2065 22.68C6.3595 22.68 1 17.7269 1 11.84C1 5.95316 6.3595 1 13.2065 1C20.0534 1 25.413 5.95316 25.413 11.84Z" stroke="#363636" stroke-width="2" />
                  <line x1="20.8027" y1="20.9264" x2="30.7538" y2="32.3429" stroke="#363636" stroke-width="2" />
                </svg>
              </div>

              <div className='flex justify-between align-center gap-1 md:gap-[50px] '>
                <a href="#" >
                  <svg  xmlns="http://www.w3.org/2000/svg" width="68" height="44" viewBox="0 0 68 44" fill="none">
                    <ellipse cx="26.0567" cy="39.4987" rx="5.2081" ry="4.0199" fill="white" />
                    <ellipse cx="47.17" cy="39.4987" rx="5.2081" ry="4.0199" fill="white" />
                    <path d="M58.2949 34.4208L12.9654 34.4208L14.5138 28.7083L19.1918 24.3238" stroke="white" stroke-width="3" />
                    <path d="M18.0327 21.1377C14.5338 15.8772 18.3053 8.83936 24.6231 8.83936H49.152C55.5196 8.83936 59.2806 15.976 55.6811 21.2286C54.2054 23.3821 51.7627 24.6694 49.152 24.6694H24.6231C21.9737 24.6694 19.4999 23.3438 18.0327 21.1377Z" stroke="white" stroke-width="3" />
                    <path d="M1.00047 3.11612L8.64392 4.52069L17.5 11.4828" stroke="white" stroke-width="3" />
                  </svg>  
                  <p className={`${s.header_cart}`}>Корзина</p>
                </a>
                <a href="#" >
                  <img className={`${s.header_profile_icon}`} src="/img/profile-1.png" alt="" />
                  <p className={`${s.header_cart} mt-[3px]`}>Войти</p>
                </a>
              </div>
            </div>
            {/* 2 */}
            <div className='relative items-center mt-2 flex lg:hidden'>
                <input placeholder="Поиск по сайту" type="text" className={`w-full h-12 px-4  rounded-full `} 
                />
                <svg className="absolute right-[30px]  w-6n lg:w-auto " xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                  <path d="M25.413 11.84C25.413 17.7269 20.0534 22.68 13.2065 22.68C6.3595 22.68 1 17.7269 1 11.84C1 5.95316 6.3595 1 13.2065 1C20.0534 1 25.413 5.95316 25.413 11.84Z" stroke="#363636" stroke-width="2" />
                  <line x1="20.8027" y1="20.9264" x2="30.7538" y2="32.3429" stroke="#363636" stroke-width="2" />
                </svg>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};


