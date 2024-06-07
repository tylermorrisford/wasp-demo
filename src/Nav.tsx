import { useState } from 'react';
import { HomeLogo } from './HomeLogo';
import './Nav.css';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sticky-nav">
            <div className="nav-header">
                <button className="nav-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/"><HomeLogo /></a></li>
                        <li><a href="/mission">Mission</a></li>
                        <li><a href="/bio">Bio</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
