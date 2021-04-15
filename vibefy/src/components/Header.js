import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HeadsetIcon from '@material-ui/icons/Headset';
import { NavLink } from 'react-router-dom'
import '../App.css';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <Navbar bg="dark" variant="dark">
                <NavLink to="/home" className="btn" style={{color: 'white'}}><i>VIBEFY</i></NavLink>
                <Nav className="mr-auto"><HeadsetIcon className="headphone"></HeadsetIcon></Nav>
                <Nav className="ms-auto">
                    <NavDropdown title="MOODS" id="basic-nav-dropdown" style={{color: 'white'}}>
                        <NavLink to="/happy" className="btn" style={{color: 'black'}}><i>Happy</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/sad" className="btn" style={{color: 'black'}}><i>Sad</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/energetic" className="btn" style={{color: 'black'}}><i>Energetic</i></NavLink>
                        <NavDropdown.Divider />
                        <NavLink to="/angry" className="btn" style={{color: 'black'}}><i>Angry</i></NavLink>
                    </NavDropdown>
                    <NavLink to="/home" className="btn" style={{color: 'white'}}>Home</NavLink>
                    {
                    this.props.loggedInStatus === "NOT_LOGGED_IN" 
                    ? <><NavLink to="/login" className="btn" style={{color: 'white'}}>Login</NavLink>
                    <NavLink to="/register" className="btn" style={{color: 'white'}}>Register</NavLink></> 
                    : null
                    }
                </Nav>
            </Navbar>
        );
    }
}

export default Header;