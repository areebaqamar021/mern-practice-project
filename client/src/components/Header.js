import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Form } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="">
      <Navbar.Brand as={Link} to="/">
        <h5>MERN App</h5>
      </Navbar.Brand>
      
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/users">
          <h6>Users</h6>
        </Nav.Link>
        <Nav.Link as={Link} to="/register">
          <h6>Register</h6>
        </Nav.Link>

        <Nav.Link as={Link} to="/posts">
          <h6>Posts</h6>
        </Nav.Link>
        <Nav.Link as={Link} to="/add-post">
          <h6>Add Post</h6>
        </Nav.Link>
      </Nav>
      <Form inline>
      <Button as={Link} to="/login" variant="outline-light">Log In</Button>
    </Form>
    </Navbar>
  );
};

export default Header;
