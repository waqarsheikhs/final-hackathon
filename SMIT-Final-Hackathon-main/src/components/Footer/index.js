import { Container,Col, Row, InputGroup, FormControl} from "react-bootstrap";
import "./css/style.css"
import * as React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
import { BasicButtons } from "..";




function Footer() {
    return (
        <>
            <Container fluid className="main">
                <Row className="row1">
                    <Col xs="auto" md="auto">
                        <ul>
                            <li className="list"><FaFacebookF /></li>
                            <li className="list"><FaTwitter /></li>
                            <li className="list"><FaGooglePlusG /></li>
                            <li className="list"><FaLinkedinIn /></li>
                            <li className="list"><FaPinterest /></li>
                        </ul>
                    </Col>
                    <Col className="footerNews">
                        <div className="newsletter1">SIGN UP FOR NEWSLETTER</div>
                        <div className="newsletter">
                            <InputGroup >
                                <FormControl
                                    placeholder="Your email address"
                                    aria-label="Your email address"
                                    aria-describedby="basic-addon2"
                                />
                                
                                <BasicButtons>SUBSCRIBE</BasicButtons>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                <Row className="row1">
                    <Col>
                    <h6 className="footerHeading">ABOUT TOP AGENICES</h6>
                    <ul>
                        <li className="footerList">About Us</li>
                        <li className="footerList">Privacy Policy</li>
                        <li className="footerList">Terms and Condition</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6 className="footerHeading">CUSTOMER SERVICE</h6>
                    <ul>
                        <li className="footerList">My Account</li>
                        <li className="footerList">Return Policy</li>
                        <li className="footerList">Order Form</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6 className="footerHeading">CATEGORIES</h6>
                    <ul>
                        <li className="footerList">Construction Tools</li>
                        <li className="footerList">Building Materials</li>
                        <li className="footerList">Electrical Goods</li>
                        <li className="footerList">Paints</li>
                        <li className="footerList">Kitchen</li>

                    </ul>
                    </Col>
                    <Col>
                    <h6 className="footerHeading">CONTACT US</h6>
                    <ul>
                        <li className="footerList">About Us</li>
                        <li className="footerList">Privacy Policy</li>
                        <li className="footerList">Terms and Condition</li>
                    </ul>
                    </Col>
                </Row>
                <Row className="footerRow">
                    <Col>Top Agencies © 2021 . All Rights Reserved. Developed by Arctic Solutions</Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default Footer;