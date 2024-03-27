import { useState } from "react";
import { Col, Image, Nav, NavItem, Navbar, NavbarBrand, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
    const [active, setActive] = useState('home')
    return(
        <>
        <Row>
            <Col sm={3} className="bg-primary flex-column" style={{"height": "100vh"}}>
                <ul>
                    <li>
                    <NavLink className="text-light" to = "">Home</NavLink>
                    {active !== "home" && <div>
                        <ul style={{'listStyleType': 'none', 'padding': "0"}}>
                            <li>
                                Groups
                            </li>
                            <li>
                                Members
                            </li>
                        </ul>
                    </div>
                    }
                    
                    </li>
                    <li>
                    <NavLink className="text-light" to = "about">About</NavLink>
                    </li>
                    <li>
                    <NavLink className="text-light" to = "info">Info</NavLink>
                    </li>
                    <li>
                    <NavLink className="text-light" to = "home">Home4</NavLink>
                    </li>
                    <li>
                    <NavLink className="text-light" to = "h">Home5</NavLink>
                    </li>
                </ul>
            </Col>
            <Col sm={6}>
                <Outlet />
            </Col>
        </Row>
        </>
    )
}