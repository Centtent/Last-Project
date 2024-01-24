import React from "react";
import "../style/navbar.css"
import icon from "../img/Travel_logo.png"

const Navbar = () => {
    return (
        <nav>
            <img src={icon} alt="" />
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">About Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar