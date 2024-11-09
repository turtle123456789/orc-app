  import React from 'react'
  import { Button, Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
  const HeaderComponent = () => {
    return (
      <Navbar  rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="Convert Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} to="/convert" href="#">Convert</Navbar.Link>
        <Navbar.Link as={Link} to="/" href="#">Services</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
  }

  export default HeaderComponent