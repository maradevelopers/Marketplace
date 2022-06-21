import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light flex-md-nowrap fixed-top">
        <a 
            className="navbar-brand"
            href="#">
            Marketplace Dapp
        </a>
        <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                <small className="text-white"></small>
            </li>
        </ul>
        </nav>
    );
}