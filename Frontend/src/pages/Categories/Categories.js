import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CategoryList from "./CategoryList";


const Categories = () => {
    return (
        <Container>
            <Row>
                {/*<Col md={2}/>*/}
                <Col>
                    <CategoryList/>
                </Col>
                {/*<Col md={2}/>*/}
            </Row>
        </Container>
    );
};

export default Categories;