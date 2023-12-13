import {Container, Col, Card, Row} from 'react-bootstrap';
import Noctua from '../../static/img/noctua.png';
import Xiaomi from '../../static/img/xiaom.png'
import classes from './Cabinet.module.css';
const Cabinet = () => {
    return (
        <div className={classes.Cabinet}>
            <Container className={classes.Container}>
                <Row>
                <Col md='4'>
                    <div className = {classes.Column}>
                        <Card style={{}}>
                            <Card.Body className = {classes.ColumnName}>
                                <Card.Text className = {classes.TextColumn}>
                                    Главная
                                </Card.Text>
                                <Card.Text className = {classes.TextColumn}>
                                    Избранное
                                </Card.Text>
                                <Card.Text className = {classes.TextColumn}>
                                    Корзина
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={{ span: 8, offset: 0}}>
                <div className = {classes.Upper}>
                <Row className ={classes.Row}>
                    <Col md={{ span: 6}} className ={classes.ColUp}>
                        <Card>
                            <Card.Header className = {classes.Header}>Личные данные</Card.Header>
                                <Card.Body className = {classes.Body}>
                                    <Card.Text className = {classes.TextMail}>
                                    Почта: kaiten@mail.ru
                                    </Card.Text>
                                    <Card.Text className = {classes.TextNumber}>
                                        Номер: 890******56
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md = "6" className = {classes.ColUp}>
                        <Card>
                            <Card.Header className = {classes.Header}>
                                Мои бонусы    666 M₽
                            </Card.Header>
                                <Card.Body className = {classes.Body}>
                                    <Card.Text className = {classes.TextPerson}>
                                        Владелец:    Станислав
                                   </Card.Text>
                                    <Card.Text className = {classes.TextCardNumber}>
                                        Номер карты:    43** **** **** **21
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                </div>
                <Row>
                    <Col md ={{ span: 6}}>
                        <div className = {classes.Zakaz}>
                            Мои заказы
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md ={{ span: 12}} className = {classes.ColDown}>
                        <div className = {classes.Down}>
                        <Card>
                            <Card.Body className = {classes.BodyDown}>
                                
                                <Card.Img variant="left" src= {Xiaomi} alt = "noctua"/>
                                <div className = {classes.Item}>
                                <Card.Text className = {classes.Item}>
                                    6.43" Смартфон Xiaomi Redmi Note 11 128 ГБ серый
                                </Card.Text>
                                </div>
                                
                                <div className = {classes.Price}>
                                    <Card.Text className = {classes.Price}>
                                        Цена: 999 ₽
                                    </Card.Text>
                                </div>
                                <div className = {classes.CountPrice}>
                                    <Card.Text className = {classes.CountItem}>
                                        2 шт. x 1998 ₽
                                    </Card.Text>
                                </div>
                                <div className = {classes.Date}>
                                    <Card.Text className = {classes.Date}>
                                        Приобретено: 21.21.21
                                    </Card.Text>
                                </div>
                                <div className = {classes.Link}>
                                    <Card.Link href="" className = {classes.Link}>
                                        Страница товара
                                    </Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md ={{ span: 12}} className = {classes.ColDown}>
                        <div className = {classes.Down}>
                        <Card>
                            <Card.Body className= {classes.BodyDown}>
                                <Card.Img variant="left" src= {Noctua} alt = "noctua"/>
                                <div className = {classes.Tovar}>

                                    <Card.Text className= {classes.Item}>
                                        Термопаста Noctua [NT-H1]
                                    </Card.Text>
                                </div>
                                <div className = {classes.Price}>
                                    <Card.Text className = {classes.Price}>
                                        Цена: 999 ₽
                                    </Card.Text>
                                </div>
                                <div className = {classes.CountPrice}>
                                    <Card.Text className = {classes.CountItem}>
                                        2 шт. x 1998 ₽
                                    </Card.Text>
                                </div>
                                <div className = {classes.Date}>
                                    <Card.Text className = {classes.Date}>
                                        Приобретено: 21.21.21
                                    </Card.Text>
                                </div>
                                <div className = {classes.Link}>
                                    <Card.Link href="" className = {classes.Link}>
                                        Страница товара
                                    </Card.Link>
                                </div>
                            </Card.Body>
                        </Card>
                        </div>
                    </Col>
                </Row>
                </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Cabinet;