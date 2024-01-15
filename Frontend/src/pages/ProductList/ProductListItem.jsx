import React from 'react';
import classes from './ProductListItem.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import ProductImage from '../../static/img/nokia.png'
import { Link, useNavigate } from "react-router-dom";


const ProductListItem = () => {
    const navigate = useNavigate();
    return (
        <div className={classes.ProductListItem}>
            <Row>
                <Col lg={2}>
                    <div className={classes.imageDiv}>
                        <img src={ProductImage}></img>
                    </div>
                </Col>
                <Col lg={8}>
                    <div className={classes.infoDiv}>
                        <Link to="/product" style={{textDecoration: "none"}}><div className={classes.itemTitle}><h4>Телефон Nokia</h4></div></Link>
                        <div className={classes.itemDescription}>16 Мб + 32 Гб, 16 Мб RAM, microSDHC, microSD;
                            1200 мА*ч Li-Ion, 22 ч разг.(GSM), 51 ч музыки
                            2 мпикс, 1886x1061, вспышка</div>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className={classes.buttonDiv}>
                        <Button className={classes.Button} variant="primary" type="submit">
                            В корзину
                        </Button>
                        <Button className={classes.Button} variant="primary" type="submit">
                            Характеристики
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default ProductListItem