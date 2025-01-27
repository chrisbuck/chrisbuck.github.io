import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import styles from "./TopNav.module.scss";

const TopNav = () => {
    return (
        <header>
            <Navbar expand="lg" className={`bg-body-tertiary ${styles.navbar}`}>
                <Container fluid>
                    <Navbar.Brand href="https://chrisbuck.github.io/#/" className={styles.navbarBrand}>
                        ChrisBuck.github.io
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default TopNav;
