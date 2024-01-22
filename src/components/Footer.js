import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="icon">
              <a href="https://github.com/AnzalnaKainat">Anzalna Kainat- GitHub</a>
              <a href="https://github.com/Maha-Qunoot">Maha Qunoot- GitHub</a>
  
            </div>
            <p>Copyright 2023. Project Portfolio All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}