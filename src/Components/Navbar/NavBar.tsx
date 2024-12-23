import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../Context/AuthContext";
export default function NavBar() {
  const { userData }: any = useContext(AuthContext);

  return (
    <>
      <Navbar
        expand="lg"
        className=" p-2 mb-1 "
        style={{ backgroundColor: "white" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-3">
            UMS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard/home">Home</Nav.Link>
              <Nav.Link href="#link">
                Wellcome{" "}
                <span className="text-warning fw-bold ms-1">
                  {userData?.username}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
