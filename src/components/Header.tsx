import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar bg="FFFBF5" variant="light" style={{ background: "#FFFBF5" }}>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mx-auto">
          <li className="li-item" style={{ listStyle: "none" }}>
            <Link className="nav-link" style={{ padding: 30 }} to="/about">
              عن المبادرة
            </Link>
          </li>
          <li className="li-item">
            <Link className="nav-link" style={{ padding: 30 }} to="/how">
              كيفية المشاركة
            </Link>
          </li>
          {/* <li className="li-item">
            <Nav.Link style={{ padding: 30 }} href="#pricing">
              اتصل بنا
            </Nav.Link>
          </li> */}
        </Nav>
      </Container>
    </Navbar>
  );
}
