import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footers.css'


const Footer = () => {
    return (
        <div className="divfoots">
            <Container className="taableCon" fluid="md" >
                <Row className="foots">
                    <Col sm={7}><h4>About Pinoy hydroponics</h4><br />
                    <p className="aboutDetails">
                    The experts at Homegrown Hydroponics Inc. have the most experience and knowledge in the industry. 
                    Each location is staffed with friendly professionals who 
                    can answer your questions and help you achieve your gardening goals. 
                    Look to the experts at Homegrown to teach you about hydroponics and new gardening techniques.
                    </p>
                    
                    </Col>
                    <Col>Social Media Platform
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>GitHub</li>
                        </ul>
                    </Col>
                    <Col>Hello
                        <ul>
                            <li>Newbie</li>
                            <li>Advance</li>
                            <li>Reffresher</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <p className="devFooter">Develop&Design by deepcoder @ 2020</p>
        </div>
    );
}

export default Footer;