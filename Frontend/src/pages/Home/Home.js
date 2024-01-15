import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css'
import { Container, Row, Card, Image, Col } from 'react-bootstrap';
import banner1 from '../../static/img/nw_banner_1_18864_A_1701249101.webp'
import banner2 from '../../static/img/nw_banner_1_18963_A_1701357649.webp'
import banner3 from '../../static/img/nw_banner_1_18986_A_1701443889.webp'
//import PopularCategories from '../../store/PopularCategories';
import ItemCard from '../../components/itemCard/ItemCard';
import ProductCard from '../../components/itemCard/ProductCard';
import image from "../../assets/categories/smartphones.png"

import brand0 from '../../static/img/brands/apple-logo.png'
import brand1 from '../../static/img/brands/huawei.png'
import brand2 from '../../static/img/brands/lg.png'
import brand3 from '../../static/img/brands/samsung.png'
import brand4 from '../../static/img/brands/sony.png'
import brand5 from '../../static/img/brands/xiaomi.png'

import prod1 from '../../static/img/popProducts/0c9b8ab708b70ab9cd703db6b51463e8bf2d55e027b6d482e12966ae9005b0a7.jpg.webp'
import prod2 from '../../static/img/popProducts/16e1475080cb567107da9aadeeaf49c020d6e010b721a948204450cdfa243aa8.jpg.webp'
import prod3 from '../../static/img/popProducts/54133af3ca3248ec835893deb2cd060a27731991d502e20ceb601ff36ec579ef.jpg.webp'
import prod4 from '../../static/img/popProducts/b1c4c5719033c1978d7403001d5dbddc6880a975002855b60399d9124be6769d.jpg.webp'
import prod5 from '../../static/img/popProducts/b5616973dcb420b83800dee3a76965cba661f5fe1a21e03fb684aef2b0343c2b.jpg.webp'
import prod6 from '../../static/img/popProducts/bf6dbc137c02d463f244f1414c3af76c45db3fc086b1585e209520565ed4a1ba.jpg.webp'
import prod7 from '../../static/img/popProducts/ca311736d617fc5a47321110b4b2ea7526f2dc2deb6cd4140fab625ff87acb42.jpg.webp'
import prod8 from '../../static/img/popProducts/efec920f6ac5f0ace1ce1399a553ac1b0462791ca6f4af90fe0d004815c896e1.jpg.webp'

import cat1 from  '../../static/img/popCats/114d29cfe20f17933bac65e17c2edf53aeb4d5db5a0d683b5191195099eb437c.jpg'
import cat2 from  '../../static/img/popCats/14d47ba6e8fc8e32eb1a1f0581328ba668aa4f5511f60b8c3ac33b85800465b5.jpg'
import cat3 from  '../../static/img/popCats/32a06126f544adbe189ca2abe0915c92f4fa9b466ae3bb38736b20c381b5c4c0.png'
import cat4 from  '../../static/img/popCats/668811e2cfd11988e00d04b0ccb11da2757d3cdde29a6ed8a61f7f261ab4599b.png'
import cat5 from  '../../static/img/popCats/809d70b81f66d3f730c567c442e3ad98baeef227e15b2413dd3b0ca2c4afeca0.jpg'
import cat6 from  '../../static/img/popCats/b70d20da48dfebda15c88f04044237bfa6234fe05d539ff68a61395785620202.jpg'
import cat7 from  '../../static/img/popCats/db63ba92e3d26098bb822ce6d35f84038ce04bfcf587927fd71aabeee3bd6991.jpg'
import cat8 from  '../../static/img/popCats/e135e9e6c4903d49547578f57b15b674024b46ff9d0e74bea64556e46b0e7c42.jpg'

const PopularCategories = [
    { id: 1, name: "Материнские платы", img: cat1, category: "Бытовая техника" },
    { id: 2, name: "Оперативная память", img: cat2, category: "Бытовая техника" },
    { id: 3, name: "Мониторы", img: cat3, category: "Бытовая техника" },
    { id: 4, name: "Ноутбуки", img: cat4, category: "Бытовая техника" },
    { id: 5, name: "Видеокарты", img: cat5, category: "Бытовая техника" },
    { id: 6, name: "Процессоры", img: cat6, category: "Красота и здоровье" },
    { id: 7, name: "Наушники", img: cat7, category: "Красота и здоровье" },
    { id: 8, name: "Смартфоны", img: cat8, category: "Красота и здоровье" }]

const PopProducts = [
    { id: 1, name: '14" Ноутбук Realme Book QHD серый', img: prod2, price: "45 999 ₽" },
    { id: 2, name: '6.56" Смартфон Infinix SMART 8 128 ГБ черный', img: prod1, price: "8 999 ₽" },
    { id: 3, name: "Электрический духовой шкаф Beko BBIR13300XC черный", img: prod3, price: "36 999 ₽" },
    { id: 4, name: '6.67" Смартфон HONOR X9a 128 ГБ голубой', img: prod4, price: "24 999 ₽" },
    { id: 5, name: '6.67" Смартфон Infinix NOTE 30 Pro 256 ГБ черный', img: prod5, price: "21 999 ₽" },
    { id: 6, name: 'Встраиваемый холодильник Haier HBW5519ERU', img: prod7, price: "109 999 ₽" },
    { id: 7, name: "Пылесос Samsung SC4581 черный", img: prod8, price: "7 799 ₽" },
    { id: 8, name: "Наушники TWS Honor Choice Earbuds X5 белый", img: prod6, price: "2 199 ₽" }]



const Home = () => {
    return (
        <Container>
            
                <Swiper
                    //slidesPerView={1}
                    //spaceBetween={30}
                    loop={true}
                    touchRatio={2}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {/* <div style={{ width: '500px' }} /> */}
                    <SwiperSlide>
                        <img src={banner1} alt='banner1' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner2} alt='banner2' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={banner3} alt='banner3' />
                    </SwiperSlide>
                </Swiper>
            
            <div className='notdrag'>
            <Row style={{ fontSize: "32px", marginLeft: "0px" }}> Популярные категории </Row>
            <Row className="justify-content-md-center">
                {
                    PopularCategories.map(element =>
                        <ItemCard item={element} />
                    )
                }
            </Row>
                </div>
            <div style={{ fontSize: "32px", marginLeft: "0px", marginBottom: "10px" }}> Бренды </div>
            <Row className={["brandRow", "justify-content-md-center"].join(' ')}>
                <Col xl={2} lg={3} sm={4} xs={6} className='brandCol'>
                    <img src={brand0} alt='brand0' className="brandCard" />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}className='brandCol'>
                    <img src={brand1} alt='brand1' className="brandCard" />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}className='brandCol'>
                    <img src={brand2} alt='brand2' className="brandCard" />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}className='brandCol'>
                    <img src={brand3} alt='brand3' className="brandCard" />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}className='brandCol'>
                    <img src={brand4} alt='brand4' className="brandCard" />
                </Col>
                <Col xl={2} lg={3} sm={4} xs={6}className='brandCol'>
                    <img src={brand5} alt='brand5' className="brandCard" />
                </Col>
            </Row>
            <Row style={{ fontSize: "32px", marginLeft: "0px", marginTop: "15px" }}> Хиты продаж </Row>
            <Row className="justify-content-md-center">
                {
                    PopProducts.map(element =>
                        <ProductCard item={element} />
                    )
                }
            </Row>

        </Container>
    );
};

export default Home; 