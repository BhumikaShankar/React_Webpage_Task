// SideMenu.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideMenu.css"; // Custom styles

export const SideMenu = () => {
return (
    <div className="side-menu">
    <ul>
    <li>
        <Link to="/search">
            <i class="bi bi-search"></i>
        </Link>
        </li>
        <br/>
        <br/>
        <li>
        <Link to="/">
            <i className="bi bi-house-door"></i>
            <span className="menu-text">Home</span>
        </Link>
        </li>
        <br/>
        <br/>
        <li>
        <Link to="/profile">
        <i class="bi bi-file-earmark-person"></i>
            <span className="menu-text">Profile</span>
        </Link>
        </li>
        <br/>
        <br/>
        <li>
        <Link to="/about">
            <i className="bi bi-info-circle"></i>
            <span className="menu-text">About</span>
        </Link>
        </li>
        <br/>
        <br/>
        <li>
        <Link to="/contact">
            <i className="bi bi-envelope"></i>
            <span className="menu-text">Contact</span>
        </Link>
        </li>
        <br/>
        <br/>
        <li>
        <Link to="/back">
        <i class="bi bi-backspace-fill"></i>
            <span className="menu-text">Back</span>
        </Link>
        </li>
    </ul>
    </div>
);
};
