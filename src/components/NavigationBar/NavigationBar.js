import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown  from 'react-bootstrap/NavDropdown'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import logoImage from '../Images/folder.png'

const NavigationBar = () => {
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        refreshToken()
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const refreshToken = async() => {
        try {
            const response = await axios.get('/sso/v1/session')
            console.log(response)
            console.log(response.data.user.emailUser)
            setUserName(response.data.user.emailUser)
        } catch (error) {
            if(error.response) {
                navigate('/single')
            }
        }
    }

    // const Logout = async() => {
    //     try {
    //         await axios.delete('/sso/v1/logout')
    //         navigate('/')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <Navbar className="navbar fixed-top navbar-expand-lg" style={{backgroundSize: "0", backgroundColor: "#E1E6EA"}}>
            <Container>
                <Navbar.Brand as={Link} to="/beranda">
                    <img
                        src={logoImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
                        as={Link} to="/rl31"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/beranda">Beranda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <NavDropdown title={<span style={{color: "gray"}}>{`Login as ${ userName }`}</span>} id="basic-nav-dropdown">
                            {/* <NavDropdown.Item as={Link} to="/user/tambahuser">Tambah Pengguna</NavDropdown.Item> */}
                            <NavDropdown.Item as={Link} to="/user/ubahpassword">Ubah Sandi</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/logout">Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar