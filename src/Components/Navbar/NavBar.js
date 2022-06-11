import { Button } from 'bootstrap';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
    //#023047
    return (
        <div className='shadow-sm container'style={{marginTop: '2%'}}>
            <Container>
      <Navbar  expand="lg" variant="light" >
        <Container>
          <Navbar.Brand href="#">ATools<span style={{color:"red"}}>.</span></Navbar.Brand>
                    </Container>
                    <button className='btn custom-bg d-none d-lg-block image w-25'>Start Free Trial</button>
                    <button className='btn custom-bg-2 d-none d-lg-block image w-25'>Login</button>
      </Navbar>
    </Container>
        </div>
    );
};

export default NavBar;