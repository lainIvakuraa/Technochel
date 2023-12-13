import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import classes from './Product.module.css';
import fridge from '../../static/img/fridge.png'
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div className={classes.product}>
            <Container>
                <Row>
                    <Col lg={2}>
                        <div className={classes.orders}>
                            Заказы
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className={classes.productTitle}>
                            <h1>Холодильник LG</h1>
                            <div className={classes.productInner}>
                                <Row>
                                    <Col lg={7}>
                                <img src={fridge}></img>
                                    </Col>
                                    <Col lg={5}>
                                <div className={classes.productInfo}>
                                    <div className={classes.productPrice}>
                                        <h1>29 999 ₽</h1> <Button>В корзину</Button>
                                    </div>
                                    <div className={classes.productDesctiption}>
                                    Надёжный холодильник, способный вместить в себя и сохранять при оптимальной температуре до 100кг продуктов, имеется морозильная камера, отсеки для хранения овощей, яиц 
                                    </div>
                                </div>
                                </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className={classes.productSpecifications}>
                            <h1>Характеристики: </h1>
                            <div className={classes.productSpecificationList}>
                                <div className={classes.specification}>
                                    <Row>
                                        
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Производитель:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>LG</div></Col>
                                    </Row>
                                    
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Модель:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>LG-frost2281337</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Количество отсеков:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>3 шт</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Вместимость:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>99л</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Основной цвет:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>серый</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Энергопотребление:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>108 кВтч/год</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Подставка для яиц:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>есть</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Высота:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>2,5м</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Ширина:</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>50см</div></Col>
                                    </Row>
                                </div>
                                <div className={classes.specification}>
                                    <Row>
                                    <Col sm={6} xs={6}><div className={classes.specificationName}>Глубина</div></Col>
                                    <Col sm={6} xs={6}><div className={classes.specificationParam}>44см</div></Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Home;