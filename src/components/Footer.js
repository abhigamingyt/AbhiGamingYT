import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by AbhiGaming</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} AG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">        
            <li className="social-icons">
              <a
                href="https://discord.gg/xyP33C99Ea"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCli_GbqPKIJqys7XETCMxjw"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/abhigaming_yt_/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
