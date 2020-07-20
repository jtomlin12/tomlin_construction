import React, { useState } from "react";
import { Link, withRouter, useLocation } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
import { Footer } from "../components/Footer";

function Navigation(props) {
  const styles = {
    background: {
      height: "100vh",
      backgroundImage: "url(/images/Stone-Wallpaper-HD.jpg)",
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const paths = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/gallery",
      name: "Gallery"
    },
    {
      path: "/about",
      name: "About"
    },
    {
      path: "/contact",
      name: "Contact"
    }
  ];

  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();

  return (
    <div style={styles.background}>
      <nav className="sticky-top">
        <h1 href="/" className="text">
          Tomlin Construction
        </h1>
        <Navbar expand="md">
          <NavbarToggler onClick={toggle} light color="light" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              {paths.map(pages => (
                <NavItem key={pages.name}>
                  <NavLink
                    tag={Link}
                    to={pages.path}
                    active={location.pathname === pages.path}
                    onClick={() => toggle()}
                    className="text hover"
                  >
                    {pages.name}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </nav>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default withRouter(Navigation);
