import React from 'react';
import { Card, Col, Image } from "react-bootstrap";
import "./itemCard.css"
import { Link } from 'react-router-dom';

const ItemCard = ({ item }) => {

    return (
        <Col xl={3} lg={4} sm={6}>
            <Link to="product-list" style={{ textDecoration: "none" }}>
                <div className="itemCard">
                    <Card className='myCard' border={'light'} tabIndex={0}>
                        <Image width={250} height={150} src={item.img} className='img' style={{ margin: '15px auto', padding: "0px 15px", objectFit: "contain" }} />
                        <div style={{ margin: '0px 15px 5px', fontSize: "18px", minHeight: "3em", display: "flex", justifyContent: "center", alignItems: "center" }}>{item.name}</div>
                    </Card>
                </div>
            </Link>
        </Col>
    );
};

export default ItemCard;