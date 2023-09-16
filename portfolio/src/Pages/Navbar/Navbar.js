import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <header class="header">
                <a href="#home" class="logo">Arpitam </a>

                <i class='bx bx-menu' id="menu-icon"></i>

                <nav class="navbar">
                    <a href="#home" class="active">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>

                    <span class="active-nav"></span>
                </nav>

            </header>
        </div>
    );
};

export default Navbar;