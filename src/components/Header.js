import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import { useUser } from '../contexts/UserProvider';
import { Image, Nav, NavDropdown, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header () {
    const {user, logout} = useUser();

    console.log(user);
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Navbar.Brand>Microblog</Navbar.Brand>
                <Nav>
                    {user === undefined ? 
                    <Spinner animation='border' />
                    : <>
                        {
                            user !== null && <div className='justify-content-end'>
                                <NavDropdown title={
                                    <Image src={user.avatar_url + '&s=32'} roundedCircle />} align="end">
                                    <NavDropdown.Item as={NavLink} to={'/user/' + user.username}>
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        }
                    </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
} 