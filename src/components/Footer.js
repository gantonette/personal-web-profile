import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} al="Logo"/>

                    </Col>
                    <Col sm={6} className="text-center text-sm0end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gayle-wootton-a0a363244/"><img src={navIcon1} /></a>
                            <a href="#"><img src={navIcon2} /></a>
                            <a href="#"><img src={navIcon3} /></a>
                        </div>
                        <p>@gantonetto</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}