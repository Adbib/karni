import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar bg="FFFBF5" variant="light" style={{ background: "#FFFBF5" }}>
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Nav className="mx-auto">
          <li className="li-item" style={{ listStyle: "none" }}>
            <Nav.Link style={{ padding: 30 }} href="#home">
              عن المبادرة
            </Nav.Link>
          </li>
          <li className="li-item">
            <Nav.Link style={{ padding: 30 }} href="#features">
              كيفية المشاركة
            </Nav.Link>
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
