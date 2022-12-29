import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='brandLogo' src="https://www.tripandsip.com/wp-content/uploads/2019/12/Logo-Draft-1024x281-728x200.png" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/home'>Home</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/home'>Banner</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/service'>Service</Link>
                        <Link className='text-decoration-none px-2 text-dark fw-semibold' to='/contactUs'>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;