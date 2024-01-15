import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import "./itemCard.css"

const ProductCard = ({item}) => {
    return (
        <Col xl={3} lg={4} sm={6} >
            
            <div className="itemCard">
            <Card className='myCard' border={'light'} >
                <div style={{margin:'10px 15px 0', fontSize:"18px", minHeight: "80px", display:"flex", justifyContent:"center", alignItems:"center"}}>{item.name}</div>
                <Image width={250} height={150} src={item.img} className='img' style={{margin:'10px auto', objectFit:"contain"}}/>
                <div className="price"> {item.price} </div>
            </Card>
            </div>
        </Col>
    );
};

export default ProductCard;