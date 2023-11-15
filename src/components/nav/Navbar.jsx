import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import classes from './Navbar.module.css';
import Position from '../../static/img/Position.png';
import Tachka from '../../static/img/Tachka.png';
import Profile from '../../static/img/Profile.png';
import Logo from '../../static/img/logo.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbutton from '../../static/img/navbutton.png'
import InputGroup from 'react-bootstrap/InputGroup';
let Navbar = function() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className={classes.navbar}>
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
                <InputGroup className="mb-3">
                        <Form.Control
                        placeholder="search"
                        aria-label="search"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="secondary" color='blue' id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                
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
                <a className={classes.hamburger}
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                      }}
                >
                    <img src={Navbutton} className={classes.navbutton} alt="Navbutton" />
                </a>
            </div>
            </Row>
        </Container>
        </div>
        
        <div className={
            isNavExpanded ? classes.navmobile: classes.navmobileHidden}>
            <Row>
                <Col>
                <div className={classes.mobileNavContainer}>
                <a className={classes.mobileNavLink}>Техночел</a>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className={classes.mobileNavContainer}>
                <a className={classes.mobileNavLink}>Каталог</a>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className={classes.mobileNavContainer}>
                <a className={classes.mobileNavLink}>Корзина</a>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className={classes.mobileNavContainer}>
                <a className={classes.mobileNavLink}>Профиль</a>
                </div>
                </Col>
            </Row>
        </div>
        <p>hovno</p>
        </div>
    );
        
        
}
export default Navbar