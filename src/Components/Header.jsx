import React from 'react'
import logo from '../imgs/svg/logo-desktop.svg';

export default function Header() {
    return (
        <div className="header-container">
            <img src={logo} alt="Header Logo" />
            <button className="btn-dark-mode">MODO DARK</button>
        </div>
    )
}
