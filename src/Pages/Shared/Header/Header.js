import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import './Header.css';

const Header = () => {
      const { user, logOut, searchText, setSearchText } = useAuth();
      const history = useHistory();
    
      const handleSearchKeypress = e => {
        if (e.key === 'Enter') {
          history.push("/explore")
         }
      };

      return (
            <Navbar bg="dark" expand="lg" sticky="top">
                  <Container className="navbar">
                        <Navbar.Brand as={Link} to="/" className="text-white">Car BAZAAR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                              <input type="search" value={searchText}onKeyPress={handleSearchKeypress} onChange={e=> setSearchText(e.target.value)} placeholder="Search"/>
                              <Nav className="ms-auto">
                                    <NavLink className="nav-link text-white" to="/home">Home</NavLink>
                                    <NavLink className="nav-link text-white" to="/explore" onClick={() => setSearchText("")}>All Products</NavLink>
                                    <NavLink className="nav-link text-white" to="/all-mechanic">Hire Mechanics</NavLink>
                                    <NavLink className="nav-link text-white" to="/dashboard">Dashboard</NavLink>
                                    {user.email ? (
                                    <>
                                          <p className="mt-2 text-white">Login as:{" "}
                                                <small className="fw-bold text-warning"> {user.displayName}</small>
                                          </p>
                                          <Button onClick={logOut} variant="info">{" "}Log Out</Button>
                                    </>
                                    ) : (
                                    <NavLink className="nav-link" to="/login">
                                          <Button variant="success"> Log In</Button>
                                    </NavLink>
                                    )}
                              </Nav>
                        </Navbar.Collapse>
                  </Container>
            </Navbar>
      );
};

export default Header;