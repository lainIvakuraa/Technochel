import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import classes from './Navbar.module.css';
import Position from '../../static/img/Position.png';
import Tachka from '../../static/img/Tachka.png';
import Profile from '../../static/img/Profile.png';
import Logo from '../../static/img/logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
let Navbar = function() {
    return (
        
        <div className={classes.nav}>
            <Container>
            <Row>
            <div className={classes.navUpper}>
                <div className={classes.navUpperLeft}>
                    <div className={classes.position}><img src={Position} alt="position" /></div>
                    <div className={classes.city}>Хабаровск</div>
                </div>
                <div className={classes.navUpperRight}>8 800 555-35-35 (с 8:00 до 0:00)</div>
            </div>
            <div className={classes.navContent}>
                <div className={classes.technoChel}>
                    <a className={classes.mainPageLink} href='#'>
                    <div className={classes.logoImage}><img src={Logo} alt="Logo" /></div>
                        Техночел
                        </a>
                    <a className={classes.catalogPageLink} href="#">Каталог</a>
                </div>
                <div className={classes.Search}>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button>
                        Search
                    </Button>
                </Form>
                </div>
                <div className={classes.accountContainer}>
                    <div className={classes.cart}>
                    <div className={classes.cartImage}><img src={Tachka} alt="Tachka" /></div>
                    <a href='#'>Корзина</a>
                    </div>
                    <div className={classes.account}>
                    <div className={classes.profileImage}><img src={Profile} alt="Profile" /></div>
                    <a href='#'>Профиль</a>
                    </div>
                </div>
            </div>
            </Row>
        </Container>
        </div>
    );
        
        
}
export default Navbar