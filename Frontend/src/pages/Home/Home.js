import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import classes from './Product.module.css';
import fridge from '../../static/img/fridge.png'
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div className={classes.homePage}>
            <Container>
                <Row>
                    <Col lg={8}>
                        <div className={classes.sales}></div>
                    </Col>
                    <Col lg={4}>
                        <div className={classes.allSales}></div>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </div>
    );
};

export default Home;