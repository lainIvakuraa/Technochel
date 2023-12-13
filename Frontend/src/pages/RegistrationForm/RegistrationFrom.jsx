import React from 'react';
import classes from './index.module.css'
import {Container, Col, Row, Form, Button} from 'react-bootstrap';
const RegistrationForm = () => {
    return (
        <div className={classes.RegistrationForm}>
            <Container className={classes.Container}>
                <Row>
                    <Row>
                        <Col md='12'>
                            <div className={classes.EnterField}>
                                <div><h1 className = {classes.Reg}>Вход/Регистрация</h1></div>
                                <div><p className = {classes.Enter}>Войдите, чтобы пользоваться сайтом Техночел</p></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group className = {classes.Block1}>
                                <h2>На сайте вы сможете:</h2>
                                <p>Участвовать в розыгрышах</p>
                                <p>Покупать по сниженным ценам</p>
                                <p>Следить за акциями</p>
                            </Form.Group>
                        </Form>
                        <Col md = {{span: 4, offset: 2}}>
                            <div className = {classes.Registration}>
                                <Form>
                                    <Form.Group className={classes.Email} controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Почта"/>
                                    </Form.Group>
                                    <Form.Group className= {classes.Password} controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className = {classes.COntrolPassword} type="password" placeholder="Пароль"/>
                                    </Form.Group>
                                    <div className = {classes.ButtonContainer}>
                                        <Button className = {classes.Button} variant="primary" type="submit">
                                            Готово
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                        <Col md = {{offset:1}}>
                            <Form>
                                <Form.Group className = {classes.Block2}>
                                    <h2>На сайте вы сможете:</h2>
                                    <p>Участвовать в розыгрышах</p>
                                    <p>Покупать по сниженным ценам</p>
                                    <p>Следить за акциями</p>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
};
export default RegistrationForm;