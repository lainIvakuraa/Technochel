import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import classes from './ProductList.module.css'
import ProductListItem from './ProductListItem';
const ProductList = () => {
    return(
        <div classname={classes.Product}>
                <Container>
                    <div className={classes.pr}>РЕКЛАМА</div>
                    <Row>
                        <Col lg={2}>
                            <div className={classes.leftPr}></div>
                        </Col>
                        <Col lg={10}>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                            <ProductListItem></ProductListItem>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
export default ProductList