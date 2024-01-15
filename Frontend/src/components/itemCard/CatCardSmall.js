import React from 'react';
import { Card, Col, Image } from "react-bootstrap";
import "./itemCard.css"
import { Link } from 'react-router-dom';

const CatCardSmall = ({ item }) => {
    return (
        <Col xl={3} lg={3} sm={4} xs={6} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Link to="../product-list" relative="path" style={{ textDecoration: "none" }}>
                <div className="itemCard">
                    <Card className='myCard' border={'light'} >
                        <Image src={item.img} className='img' style={{ margin: '15px 15px 5px', padding: "0px 3px", objectFit: "contain" }} />
                        <div style={{ margin: '0px 15px 5px', fontSize: "18px", minHeight: "3em", display: "flex", justifyContent: "center", alignItems: "center" }}>{item.name}</div>
                    </Card>
                </div>
            </Link>
        </Col>

    );
};

export default CatCardSmall;