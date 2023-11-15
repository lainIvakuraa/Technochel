import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import "./categories.css"

const CategoryItem = ({category}) => {
    return (
        <Col xl={3} lg={4} sm={6} >
            <div className="item">
            <Card style={{width: 300, cursor: 'pointer'}} border={'light'} >
                <Image width={250} height={150} src={category.img} style={{margin:'10px auto'}}/>
                <div style={{margin:'0px auto 5px'}}>Смартфоны</div>
            </Card>
            </div>
        </Col>
    );
};

export default CategoryItem;