import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-3">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="text-white mb-0">Christopher Thompson</p>
                        <p className="text-white mb-0">GitHub: <a href="https://github.com/cwts007" target="_blank" rel="noopener noreferrer" className="text-white">cwts007</a></p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <p className="text-white mb-0">&copy; 2024 Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;