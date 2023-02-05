/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/alt-text */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import Image from "next/image";
import { useRouter } from "next/router";

import style from "../styles/navbar.module.css";

import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();

  const [navColor, setNavColor] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState(0);

  const [show, setShow] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    if (clientWindowHeight > 100) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }, [clientWindowHeight]);

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className={navColor ? style.navBarBg : style.navBar}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            onShow={() => setShowCanvas(true)}
            onHide={() => setShowCanvas(false)}
            style={showCanvas ? { "overflow-y": "auto" } : {}}
          >
            <Offcanvas.Header closeButton>
              <Navbar.Brand href="/"></Navbar.Brand>
            </Offcanvas.Header>
            <Nav className="justify-content-end flex-grow-1">
              <Offcanvas.Body>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Chats">Chat</Nav.Link>
                <Nav.Link href="/Explore">Explore</Nav.Link>
              </Offcanvas.Body>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <style jsx>{`
        #offcanvasNavbarDropdown-expand-lg {
          padding: 0px !important;
        }
      `}</style>
    </>
  );
};

export default NavBar;
