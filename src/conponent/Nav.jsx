
import React from "react"
import { Link } from "react-router-dom"
const Nav = () => {
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            padding: 10,
            gap:20
        }}>
            <Link to="">Home</Link>
            <Link to="contact">Contact</Link>
            <Link to="about">About</Link>
            <Link to="services">Services</Link>
        </div>
    )
}

export default Nav